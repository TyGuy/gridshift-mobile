import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavingsPrefsPage } from './savings-prefs.page';

describe('SavingsPrefsPage', () => {
  let component: SavingsPrefsPage;
  let fixture: ComponentFixture<SavingsPrefsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsPrefsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsPrefsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
