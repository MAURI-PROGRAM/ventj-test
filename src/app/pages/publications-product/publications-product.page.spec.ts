import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicationsProductPage } from './publications-product.page';

describe('PublicationsProductPage', () => {
  let component: PublicationsProductPage;
  let fixture: ComponentFixture<PublicationsProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationsProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
