import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {MustMatch} from "../../must-match.validator";
import {AuthenticationService} from "../../_services";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
      this.passwordsShouldMatch
    );

  constructor(private router:Router, private fb: FormBuilder,private auth: AuthenticationService,public toastController: ToastController) { }

  mustMatch (controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
  }
  private passwordsShouldMatch(fGroup: FormGroup) {
    const password: string = fGroup.get('password').value; // get password from our password form control
    const confirmPassword: string = fGroup.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      fGroup.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
    return fGroup.get('password');
    // return fGroup.get('password').value === fGroup.get('passwordConfirm').value
    //     ? null : {'mismatch': true};
  }

  ngOnInit() {
  }
  register() {
    let data = this.registerForm.value;
    data.roles = ["user"];
    this.auth.register(data).subscribe((res) => {
      console.log(res);
      let roles = res.roles;
      if (roles[0] === "ROLE_USER") {
        this.router.navigate(['/lists-door']);
        this.auth.presentToast("Bienvenue "+res.username+" !!","success");
      } else if (roles[0] === "ROLE_ADMIN") {
        this.router.navigate(['/scenario-create']);
        this.auth.presentToast("Bienvenue "+res.username+" !!","success");
      }
    }, (error) => {
      this.auth.presentToast(error,"danger");
    });
    // console.log(data);

  }

}

