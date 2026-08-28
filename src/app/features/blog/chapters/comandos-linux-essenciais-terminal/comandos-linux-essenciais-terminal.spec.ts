import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ComandosLinuxEssenciaisTerminal } from './comandos-linux-essenciais-terminal';

describe('ComandosLinuxEssenciaisTerminal', () => {
  let component: ComandosLinuxEssenciaisTerminal;
  let fixture: ComponentFixture<ComandosLinuxEssenciaisTerminal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandosLinuxEssenciaisTerminal],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ComandosLinuxEssenciaisTerminal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('marks a command as copied after copyCommand and clears it afterwards', async () => {
    vi.useFakeTimers();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    const copyPromise = (component as any).copyCommand('pwd');
    await copyPromise;

    expect(writeText).toHaveBeenCalledWith('pwd');
    expect((component as any).copiedCommand()).toBe('pwd');

    vi.advanceTimersByTime(1600);
    expect((component as any).copiedCommand()).toBeNull();

    vi.useRealTimers();
  });
});
