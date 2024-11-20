import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';

import { AccordionItem } from './accordion.item.interface';
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { StarRatingsComponent } from "./components/star-ratings/star-ratings.component";
import { MessageComponent } from "./components/message/message.component";
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent,
     CardComponent, AccordionComponent,
      ProgressBarComponent, StarRatingsComponent,
      MessageComponent,TopOfPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-challenges';
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


