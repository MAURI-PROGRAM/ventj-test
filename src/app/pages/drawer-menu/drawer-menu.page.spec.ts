import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrawerMenuPage } from './drawer-menu.page';

describe('DrawerMenuPage', () => {
  let component: DrawerMenuPage;
  let fixture: ComponentFixture<DrawerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
