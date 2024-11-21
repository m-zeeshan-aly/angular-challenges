
import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {

  @Input() public creditCardNumber = "";

  private readonly =false;

  public get isReadonly(): boolean{
    return this.readonly;

  }

  @Input() public set isReadonly(value:boolean){
    this.creditCardNumber  = value ? this.formateReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;

  }

  private formateReadonlyCCNum(ccNum:string):string{
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown =parts.map((part,index) =>{
      if (index===parts.length-1){
        return part;
      }
      return "xxxx";
    });
    return onlyLast4Shown.join('-');
  }

}


