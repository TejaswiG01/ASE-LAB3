import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public viewer: any;

  constructor() {
    this.reset();
  }

  reset() {
    this.viewer = {
      fn: '',
      ln: '',
      username: '',
      password: ''
    };
  }
  ngOnInit() {
  }

  register() {
    const viewerInfo = {
      fn: this.viewer.fn,
      ln: this.viewer.ln,
      username: this.viewer.username,
      password: this.viewer.password
    };

    // localStorage supported
    if (window.localStorage) {
      localStorage.setItem(viewerInfo.username, JSON.stringify(viewerInfo));
    }
  }
}
