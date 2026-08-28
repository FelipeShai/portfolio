import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CloneableJavaDeepCopy } from './cloneable-java-deep-copy';

describe('CloneableJavaDeepCopy', () => {
  let component: CloneableJavaDeepCopy;
  let fixture: ComponentFixture<CloneableJavaDeepCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloneableJavaDeepCopy],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CloneableJavaDeepCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
