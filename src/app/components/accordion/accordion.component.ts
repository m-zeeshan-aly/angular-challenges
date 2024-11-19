import { Component, Input } from '@angular/core';

import { AccordionItem } from '../../accordion.item.interface';
import { NgFor ,NgIf } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() public items: AccordionItem[]=[];

  public toggle(item:AccordionItem): void{
    item.isExpanded= !item.isExpanded;
  }

  constructor(){

  }

}
