import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-lists-door',
  templateUrl: './lists-door.page.html',
  styleUrls: ['./lists-door.page.scss'],
})
export class ListsDoorPage implements OnInit {

  lists;
  constructor(private router: Router, private api: AuthService) {
    this.lists = [];
  }

  ngOnInit() {
    this.api.getAll('user/doorlist').subscribe(data => {
      console.log(data);
      this.lists = data;

    });
  }

}
