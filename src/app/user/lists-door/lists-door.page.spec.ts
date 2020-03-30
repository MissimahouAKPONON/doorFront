import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListsDoorPage } from './lists-door.page';

describe('ListsDoorPage', () => {
  let component: ListsDoorPage;
  let fixture: ComponentFixture<ListsDoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsDoorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListsDoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
