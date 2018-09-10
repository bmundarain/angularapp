import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-xs-center">
        <h1 class="display-3">Thank You!</h1>
        <p class="lead"><strong>Your shipment list has deliver successfully</strong> Thanks for complete this action.</p>
        <hr>
        <p>
            Having trouble? <a href="">Contact us</a>
        </p>
        <p class="lead">
            <a class="btn btn-primary btn-sm" routerLink="/" role="button">Continue to homepage</a>
        </p>
    </div>
  `
})

export class ThankyouComponent implements OnInit {

  ngOnInit() {}

}
