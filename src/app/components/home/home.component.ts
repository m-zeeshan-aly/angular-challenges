import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { StarRatingsComponent } from '../star-ratings/star-ratings.component';
import { MessageComponent } from '../message/message.component';
import { AccordionItem } from '../../accordion.item.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
     CardComponent, AccordionComponent,
      ProgressBarComponent, StarRatingsComponent,
      MessageComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public accordionItems: AccordionItem[] = [
      {
        title : "Example1",
        content : "hello",
        isExpanded : false

      },
       {
        title : "Example2",
        content : "Pakistan",
        isExpanded :  false

      },
       {
        title : "Example3",
        content : "How are you",
        isExpanded : false

      }
    ]

}


