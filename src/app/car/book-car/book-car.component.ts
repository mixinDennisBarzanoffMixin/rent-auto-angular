import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var gtag: any;

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss']
})
export class BookCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Event snippet for Full Rental Request conversion page
    // In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->


    $("form[id='confirmForm']").validate({
      rules: {
        email: {
          required: false,
          email: true
        },
        phoneNumber: {
          required: true
        }
      },
      // Specify validation error messages
      messages: {
        phoneNumber: "Моля въведете тел. номер",
        email: "Моля въведете валиден email"
      },
      submitHandler: function (form) {
        this.gtag_report_conversion();
        form.submit();
        $('.preloader').fadeIn(1000);
      }
    });
  }

  gtag_report_conversion(url) {
    /*<![CDATA[*/

    const callback = function () {
      if (typeof (url) !== 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-824530894/kWYhCMnCs4UBEM6vlYkD',
      'value': /*[[${totalPrice}]]*/ 500.00,
      'currency': 'EUR',
      'event_callback': callback
    });
    return false;

    /*]]>*/
  }
  submitBooking() {
    // document.getElementById('confirmButton').click();
    $('#confirmForm').submit();
  }

}
