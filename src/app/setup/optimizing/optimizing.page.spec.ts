import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptimizingPage } from './optimizing.page';

describe('OptimizingPage', () => {
  let component: OptimizingPage;
  let fixture: ComponentFixture<OptimizingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimizingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptimizingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
