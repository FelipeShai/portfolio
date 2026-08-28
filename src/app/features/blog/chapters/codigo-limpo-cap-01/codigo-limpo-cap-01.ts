import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-codigo-limpo-cap-01',
  imports: [RouterLink],
  templateUrl: './codigo-limpo-cap-01.html',
  styleUrl: './codigo-limpo-cap-01.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodigoLimpoCap01 {}
