import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rentauto-sofia';

  ngOnInit(): void {
      /*==== Loader ====*/
      $('.preloader').fadeOut(1000); // set duration in brackets

      /*==== Date Picker ====*/
      $('.form_datetime').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
      });

      /*==== Nav ====*/
      $('.navbar-collapse a').on('click', () => {
        $('.navbar-collapse').collapse('hide');
      });


      /*==== Sticky ====*/
      $('#header').sticky({topSpacing: 0});

      /*==== Counter ====*/
      $('.counter-item').appear(() => {
        $('.counter-number').countTo();
      });

      // Text Typer
      const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          that.tick();
        }, delta);
      };

      window.onload = () => {
        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
          const toRotate = elements[i].getAttribute('data-type');
          const period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
        document.body.appendChild(css);
      };


      /*==== Cars ====*/
      $(document).ready(() => {
        $('.carsmodals').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true,
              loop: true
            },
            700: {
              items: 1,
              nav: true,
              loop: true
            },
            1170: {
              items: 1,
              nav: true,
              loop: true
            }
          }


        });
      });


      /*==== Testimonials ====*/
      $(document).ready(() => {
        $('.testimonialsList').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
              loop: true
            },
            700: {
              items: 1,
              nav: false,
              loop: true
            },
            1170: {
              items: 1,
              nav: true,
              loop: true
            }
          }


        });
      });


      /*==== Blog ====*/
      $(document).ready(() => {
        $('.blogGrid').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
              loop: true
            },
            700: {
              items: 2,
              nav: false,
              loop: true
            },
            1170: {
              items: 3,
              nav: true,
              loop: true
            }
          }


        });
      });


      /*==== Clients Logo ====*/
      $(document).ready(() => {
        $('.owl-clients').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 2,
              nav: false,
              loop: true
            },
            700: {
              items: 4,
              nav: false,
              loop: true
            },
            1170: {
              items: 5,
              nav: true,
              loop: true
            }
          }


        });
      });


      /*==== Smoothscroll ====*/
      $('#home a, .custom-navbar a').on('click', function(event) {
        const $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });

      /* ==== Revolution Slider ==== */
      if ($('.tp-banner').length > 0) {
        $('.tp-banner').show().revolution({
          delay: 6000,
          startheight: 750,
          startwidth: 1170,
          hideThumbs: 1000,
          navigationType: 'none',
          touchenabled: 'on',
          onHoverStop: 'on',
          navOffsetHorizontal: 0,
          navOffsetVertical: 0,
          dottedOverlay: 'none',
          fullWidth: 'on'
        });
      }


    }
}
