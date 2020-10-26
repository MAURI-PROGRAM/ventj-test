import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookiesPoliciesPage } from './cookies-policies.page';

describe('CookiesPoliciesPage', () => {
  let component: CookiesPoliciesPage;
  let fixture: ComponentFixture<CookiesPoliciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesPoliciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookiesPoliciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
