import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message = 'This is the login page.';

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService/*,
        private alertService: AlertService*/) { }

  ngOnInit() {
  	// reset login status
  	this.authenticationService.logout();
  }
}
