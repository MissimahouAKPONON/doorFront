import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {AuthenticationService} from '../../_services';

@Component({
  selector: 'app-lists-door',
  templateUrl: './lists-door.page.html',
  styleUrls: ['./lists-door.page.scss'],
})
export class ListsDoorPage implements OnInit {

  lists: any[] = [];
  constructor(private router: Router, private api: AuthService, private auth: AuthenticationService) {
    this.api.getAll().subscribe((data: any[]) => {
      console.log(data);
      this.lists = data;

    });
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }

}
