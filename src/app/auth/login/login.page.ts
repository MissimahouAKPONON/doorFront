import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private router: Router, private fb:FormBuilder, private auth: AuthenticationService,public toastController: ToastController) { }

  ngOnInit() {

  }
  login() {
    let data = this.loginForm.value;
    this.auth.login(data).subscribe((res) => {
      // console.log(res);
      // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let roles = res.roles;
      if (roles[0] === "ROLE_USER") {
        this.router.navigate(['/lists-door']);
        this.auth.presentToast("Bienvenue "+res.username+" !!","success");
      } else if (roles[0] === "ROLE_ADMIN") {
        this.router.navigate(['/scenario-create']);
        this.auth.presentToast("Bienvenue "+res.username+" !!","success");
      }
    }, (error) => {
      // console.log(error);
      this.auth.presentToast(error.error.message,"danger");
    });
  }

}
