import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit(){
    setTimeout (() => {
      let currentUser = this.auth.currentUserValue;
      if (currentUser && currentUser.roles){
      let roles = currentUser.roles;
      if (roles[0] === "ROLE_USER") {
        this.router.navigate(['/lists-door']);
        this.auth.presentToast("Bienvenue "+currentUser.username+" !!","success");
      } else if (roles[0] === "ROLE_ADMIN") {
        this.router.navigate(['/scenario-create']);
        this.auth.presentToast("Bienvenue "+currentUser.username+" !!","success");
      }
      } else {
        this.router.navigate(['/login']);
      }

    }, 5000);
  }

}
