import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartialVendorComponent } from './partial-vendor.component';

describe('PartialVendorComponent', () => {
  let component: PartialVendorComponent;
  let fixture: ComponentFixture<PartialVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialVendorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartialVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
