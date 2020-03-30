import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScenarioCreatePage } from './scenario-create.page';

describe('ScenarioCreatePage', () => {
  let component: ScenarioCreatePage;
  let fixture: ComponentFixture<ScenarioCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScenarioCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
