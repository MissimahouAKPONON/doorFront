import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkOutPage } from './network-out.page';

describe('NetworkOutPage', () => {
  let component: NetworkOutPage;
  let fixture: ComponentFixture<NetworkOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
