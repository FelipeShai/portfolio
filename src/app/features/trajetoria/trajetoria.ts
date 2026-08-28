import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Education } from './components/education/education';
import { Timeline } from './components/timeline/timeline';
import { trajetoriaEducation, trajetoriaExperience } from './trajetoria.content';

@Component({
  selector: 'app-trajetoria',
  imports: [Timeline, Education],
  templateUrl: './trajetoria.html',
  styleUrl: './trajetoria.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trajetoria {
  protected readonly experience = trajetoriaExperience;
  protected readonly education = trajetoriaEducation;
}
