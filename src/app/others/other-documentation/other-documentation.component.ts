import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FadeInOutAnimationComponent } from '../components/fade-in-out-animation/fade-in-out-animation.component';
import { AgGridComponent } from "../components/ag-grid/ag-grid.component";

@Component({
  selector: 'app-other-documentation',
  standalone: true,
  imports: [CardComponent, FadeInOutAnimationComponent, AgGridComponent],
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss'
})
export class OtherDocumentationComponent {

}



