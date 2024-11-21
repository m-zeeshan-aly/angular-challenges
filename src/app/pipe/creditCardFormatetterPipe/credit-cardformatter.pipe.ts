import { Pipe, PipeTransform } from '@angular/core';
import { TurborepoAccessTraceResult } from 'next/dist/build/turborepo-access-trace';

@Pipe({
  name: 'creditCardformatter',
  standalone: true
})
export class CreditCardformatterPipe implements PipeTransform {

  transform(cardNumber : string): string{

    if(this.hasCorrectLength(cardNumber)){
      if (this.isNumericString(cardNumber)){

         return this.formateCardNumber(cardNumber);
      }
      return cardNumber+" : Number Contains Invalid Characters";

    }
    return cardNumber + " : Invalid Card Length";

  }

  private hasCorrectLength(cardNumber:string): boolean{

    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength =16;
    const isAmericanExpressCardLength = 15;

    if ((cardNumberLength ===isAmericanExpressCardLength) || (cardNumberLength===isMasterDiscoverVisaCardLength)){
      return true

    }

    return false
  }

  private isNumericString(input: string): boolean {
  const numericRegex = /^[0-9]+$/; // Regex to match only numeric characters (0-9)
  return numericRegex.test(input);
  }


  private formateCardNumber(cardNumber: string): string{
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts!.join('-');
  }




}


