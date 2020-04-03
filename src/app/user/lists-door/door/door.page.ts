import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from "../../../_services";
import {AuthService} from "../../../auth/auth.service";
import {IonCard, NavController} from "@ionic/angular";

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
               private api: AuthService,
               navClt: NavController) {
    this.params = this.route.snapshot.params.id;
    // console.log(this.params);
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.api.get(`user/doorlist/door/${this.params}`).subscribe((porte) => {
          this.door = porte;
          console.log(porte);
        },
        (error) => {
          // "Nous n'avons pas trouvé ce Porte à Porte"
      this.authenticationService.presentToast('Nous n\'avons pas trouvé ce Porte à Porte', 'danger');
        });
  }
  goTo(next) {
    next.href = '#scenario_3';
    // nextElement.
  }

}
