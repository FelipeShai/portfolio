import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodigoLimpoCap01 } from './codigo-limpo-cap-01';

describe('CodigoLimpoCap01', () => {
  let component: CodigoLimpoCap01;
  let fixture: ComponentFixture<CodigoLimpoCap01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoLimpoCap01],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoLimpoCap01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
