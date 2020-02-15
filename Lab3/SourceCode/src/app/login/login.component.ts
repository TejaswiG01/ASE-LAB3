import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    emailid: [''],
    password: ['']
  });
  public invalidUser = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  userLogin() {
    let user: any = localStorage.getItem(this.loginForm.controls.emailid.value);
    if (user != null) {
      user = JSON.parse(user);
      if (this.loginForm.controls.password.value === user.password) {
        this.router.navigate(['/', 'home']);
      }
    }
    this.invalidUser = true;
  }
}
