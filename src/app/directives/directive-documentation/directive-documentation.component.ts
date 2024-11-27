import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RippleDirective } from '../ripple/ripple.directive';

@Component({
  selector: 'app-directive-documentation',
  standalone: true,
  imports: [CardComponent,RippleDirective],
  templateUrl: './directive-documentation.component.html',
  styleUrl: './directive-documentation.component.scss'
})
export class DirectiveDocumentationComponent {

}


