import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from "../../../_services";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-door',
  templateUrl: './door.page.html',
  styleUrls: ['./door.page.scss'],
})
export class DoorPage implements OnInit {

  door: any;
  params: number = null;
  currentUser: any;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               private api: AuthService) {
    this.params = this.route.snapshot.params.id;
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.api.get(`user/doorlist/door/${this.params}`).subscribe((door) => {
          this.door = door;
        },
        (error) => {
      this.authenticationService.presentToast("Nous n'avons pas trouvé ce Porte à Porte","danger")
        });
  }

}
