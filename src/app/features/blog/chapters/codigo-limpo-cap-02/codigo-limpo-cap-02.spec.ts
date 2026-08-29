import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodigoLimpoCap02 } from './codigo-limpo-cap-02';

describe('CodigoLimpoCap02', () => {
  let component: CodigoLimpoCap02;
  let fixture: ComponentFixture<CodigoLimpoCap02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoLimpoCap02],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoLimpoCap02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
