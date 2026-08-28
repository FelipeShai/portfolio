import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline } from './timeline';

describe('Timeline', () => {
  let component: Timeline;
  let fixture: ComponentFixture<Timeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timeline],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', [
      {
        company: 'Empresa',
        role: 'Cargo',
        period: '2024',
        location: 'Remoto',
        summary: 'Resumo',
        highlights: ['Destaque'],
      },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
