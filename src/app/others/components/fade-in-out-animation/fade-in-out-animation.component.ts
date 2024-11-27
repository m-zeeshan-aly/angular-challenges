import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/fade-in-out/fade-in-out-animation';
import { NgIf } from '@angular/common';
import { RippleDirective } from '../../../directives/ripple/ripple.directive';


@Component({
  selector: 'app-fade-in-out-animation',
  standalone: true,
  imports: [NgIf,RippleDirective],
  templateUrl: './fade-in-out-animation.component.html',
  styleUrl: './fade-in-out-animation.component.scss',
  animations:[fadeInOutAnimation]
})
export class FadeInOutAnimationComponent {
  public isInDOM= true;


}



