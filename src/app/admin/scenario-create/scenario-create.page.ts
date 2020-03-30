import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {AuthenticationService} from "../../_services";

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.page.html',
  styleUrls: ['./scenario-create.page.scss'],
})
export class ScenarioCreatePage implements OnInit {
  door = new FormGroup({
        title:  new FormControl('', Validators.required),
        scenarios: new FormArray([]),
  });

  get title() {
    return this.door.get('title');
  }
   scenarios = this.door.get('scenarios') as FormArray;
  isradio: boolean = false;
  constructor(private fb: FormBuilder, private api: AuthService, private auth: AuthenticationService) {

  }

  ngOnInit() {
  }
  createScenario(): FormGroup {
    return new FormGroup({
      request: new FormControl('', Validators.required),
      answers: new FormControl('', Validators.required),
      placeholder: new FormControl([''])
    });
  }

  addScenario() {
    this.scenarios = this.door.get('scenarios') as FormArray;
    this.scenarios.push(this.createScenario());
  }
  removeScenario(i: number) {
    this.scenarios.removeAt(i);
  }
  change(event) {
    console.log(event.target);
    if (event.target.value === 'radio') {
        this.isradio = true;
    }
  }

  submit() {
    console.log(this.door.value);
    this.api.post('admin/door', this.door.value).subscribe(data => {
      console.log(data);
      this.auth.presentToast("Porte à Porte Bien Enregistrer !","success")

    }, error => {
      this.auth.presentToast(error,"danger")

    })
  }

}
