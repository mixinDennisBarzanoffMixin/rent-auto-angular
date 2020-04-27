import { WrappedFunction } from "firebase-functions-test/lib/main"
import { admin, testEnv } from "./test.config";
import { findAvailableCars } from "../src/findAvailableCars"

const db = admin.firestore();

describe('Testing the available cars function', () => {
    let wrappedAvailableCars: WrappedFunction
    const unoccupiedCarId = 'unoccupied-123'
    const occupiedCarId = 'occupied-2341'
    const carsCollection = db.collection('cars')
    let bookingPathsToDelete: any[] = []

    beforeEach(async () => {
        wrappedAvailableCars = testEnv.wrap(findAvailableCars)
        const bookingsCollection = db.collection('bookings')
        await Promise.all([
            carsCollection.doc(unoccupiedCarId).set({
                name: 'Pontiac Torrent'
            }),
            carsCollection.doc(occupiedCarId).set({
                name: 'Mercedes X'
            }),
            Promise.all([
                bookingsCollection.add({
                    startDate: new Date('02-01-2020'),
                    endDate: new Date('02-03-2020'),
                    carId: occupiedCarId,
                }),
                bookingsCollection.add({
                    startDate: new Date('02-10-2020'),
                    endDate: new Date('02-15-2020'),
                    carId: occupiedCarId
                }),
            ]).then((docs) => {
                bookingPathsToDelete = docs.map((doc) => doc.path)
            })
        ])
    })
    it('Finds all available cars', async () => {
        const cars: any[] = await wrappedAvailableCars({
            startDate: new Date('02-02-2020'),
            endDate: new Date('02-06-2020')
        })
        // console.log(cars)
        expect(cars[0].name).toBe('Pontiac Torrent')
        // console.log(cars.map((car) => car.data()))
    })
    afterEach(async () => {
        await Promise.all([
            carsCollection.doc(occupiedCarId).delete(),
            carsCollection.doc(unoccupiedCarId).delete(),
        ])
        await Promise.all(
            bookingPathsToDelete.map((bookingPath) => db.doc(bookingPath).delete())
        )
    })
})