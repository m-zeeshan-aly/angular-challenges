import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FadeInOutAnimationComponent } from '../components/fade-in-out-animation/fade-in-out-animation.component';

@Component({
  selector: 'app-other-documentation',
  standalone: true,
  imports: [CardComponent,FadeInOutAnimationComponent],
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss'
})
export class OtherDocumentationComponent {

}



