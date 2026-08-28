import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cloneable-java-deep-copy',
  imports: [RouterLink],
  templateUrl: './cloneable-java-deep-copy.html',
  styleUrl: './cloneable-java-deep-copy.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloneableJavaDeepCopy {}
