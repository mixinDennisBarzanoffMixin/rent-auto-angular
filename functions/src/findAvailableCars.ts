import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const db = admin.firestore()

export const findAvailableCars = functions.https.onCall(async (data, context) => {
    const { startDate, endDate } = data;
    const allCars = await db.collection('cars').get()
    const bookingsBetween = await getBookingsBetween(startDate, endDate)
    // console.log('bookings between:')
    // console.log(bookingsBetween);
    const rentedCarIdsInPeriod = bookingsBetween.map((booking) => booking.data().carId)
    // console.log(rentedCarIdsInPeriod)
    // console.log(allCars.docs)
    const availableCars = allCars.docs.filter((car) => !rentedCarIdsInPeriod.includes(car.id))
    console.log(availableCars)
    return availableCars.map((carDoc) => ({ ...carDoc.data(), id: carDoc.id }))
});

const getBookingsBetween = async (startDate: Date, endDate: Date) => {
    const bookingsCollection = db.collection('bookings')
    // bullshit to make `where` work with two inequalities
    const properStartDateBookings = await bookingsCollection
        .where('startDate', '<', endDate)
        .get()
    const properEndDateBookings = await bookingsCollection
        .where('endDate', '>', startDate)
        .get()
    // const properStartDateBookingsData = properStartDateBookings.docs.map((booking) => booking.data())
    // const properEndDateBookingsData = properEndDateBookings.docs.map((booking) => booking.data())
    return intersection(properStartDateBookings.docs, properEndDateBookings.docs)
}

const intersection = (
    array1: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>[],
    array2: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>[],
): FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>[] => {
    // console.log(array1)
    // console.log(array2)
    const array2Ids = array2.map((doc) => doc.id)
    return array1.filter(value => array2Ids.includes(value.id))
}
