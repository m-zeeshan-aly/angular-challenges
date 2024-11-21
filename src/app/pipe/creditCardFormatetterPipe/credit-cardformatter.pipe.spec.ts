import { CreditCardformatterPipe } from './credit-cardformatter.pipe';

describe('CreditCardformatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardformatterPipe();
    expect(pipe).toBeTruthy();
  });
});
