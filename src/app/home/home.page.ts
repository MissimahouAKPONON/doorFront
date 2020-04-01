import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services";
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isConnected: boolean;
  alertPresented = false;
    constructor(private router: Router, private auth: AuthenticationService, private network: Network, public alert: AlertController) {
    // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //     this.presentAlertConfirm();
    // });
      // disconnectSubscription.unsubscribe();
  }
  async presentAlertConfirm() {
    const alert = await this.alert.create({
      header: 'Avertissement',
      message: 'Vérifiez vôtre Connexion !!',
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/network-out']);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {


    // this.network.onConnect().subscribe(() => {
    //   setTimeout (() => {
    //     let currentUser = this.auth.currentUserValue;
    //     if (currentUser && currentUser.roles){
    //     let roles = currentUser.roles;
    //     if (roles[0] === "ROLE_USER") {
    //       this.router.navigate(['/lists-door']);
    //       this.auth.presentToast("Bienvenue "+currentUser.username+" !!","success");
    //     } else if (roles[0] === "ROLE_ADMIN") {
    //       this.router.navigate(['/scenario-create']);
    //       this.auth.presentToast("Bienvenue "+currentUser.username+" !!","success");
    //     }
    //     } else {
    //       this.router.navigate(['/login']);
    //     }
    //
    //   }, 5000);
    //
    //   // this.router.navigate(['/network-out']);
    //
    // });

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
