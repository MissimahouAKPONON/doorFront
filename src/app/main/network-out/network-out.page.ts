import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-out',
  templateUrl: './network-out.page.html',
  styleUrls: ['./network-out.page.scss'],
})
export class NetworkOutPage implements OnInit {

  constructor(private router: Router, private network: Network, public alert: AlertController) {
    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }

}
