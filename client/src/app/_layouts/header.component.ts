import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/index';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'my-app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    isLogin: boolean;

    constructor(
        private authService: AuthenticationService,
    ) {
      $(document).ready(function () {

          // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
          $('#noti_Counter')
              .css({ opacity: 0 })
              .text('7')              // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
              .css({ top: '-10px' })
              .animate({ top: '-2px', opacity: 1 }, 500);

          $('#noti_Button').click(function () {

              // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
              $('#notifications').fadeToggle('fast', 'linear', function () {
                  if ($('#notifications').is(':hidden')) {
                      $('#noti_Button').css('background-color');
                  }
                  else $('#noti_Button').css('background-color');        // CHANGE BACKGROUND COLOR OF THE BUTTON.
              });

              $('#noti_Counter').fadeOut('slow');                 // HIDE THE COUNTER.

              return false;
          });

          // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
          $(document).click(function () {
              $('#notifications').hide();

              // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
              if ($('#noti_Counter').is(':hidden')) {

              }
          });

          $('#notifications').click(function () {
              return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
          });
      });
      }


    ngOnInit() {
        this.updateLoginStatus();
    }

    updateLoginStatus() {
        this.isLogin = this.authService.status();
    }
}
