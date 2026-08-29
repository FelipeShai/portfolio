import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-codigo-limpo-cap-02',
  imports: [RouterLink],
  templateUrl: './codigo-limpo-cap-02.html',
  styleUrl: './codigo-limpo-cap-02.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodigoLimpoCap02 {}
