import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: readonly string[];
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly items = input.required<readonly TimelineItem[]>();
}
