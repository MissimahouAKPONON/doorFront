import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-door',
  templateUrl: './door.page.html',
  styleUrls: ['./door.page.scss'],
})
export class DoorPage implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

}