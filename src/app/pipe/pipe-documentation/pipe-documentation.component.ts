
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { NgFor } from '@angular/common';
import { SortByKeyPipe } from '../sortByKey/sort-by-key.pipe';
import { CreditCardformatterPipe } from '../creditCardFormatetterPipe/credit-cardformatter.pipe';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [CardComponent,TruncatePipe,NgFor,SortByKeyPipe,CreditCardformatterPipe],
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss'
})
export class PipeDocumentationComponent {

  objectArray = [
  { id: 1, content: 'Apple' },
  { id: 2, content: 'Orange' },
  { id: 3, content: 'Banana' },
  { id: 4, content: 'Mango' },
];

}


