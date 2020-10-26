import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConditionsWebUsePage } from './conditions-web-use.page';

describe('ConditionsWebUsePage', () => {
  let component: ConditionsWebUsePage;
  let fixture: ComponentFixture<ConditionsWebUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsWebUsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionsWebUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
