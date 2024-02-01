declare module 'currency-code-converter' {
    interface CurrencyCodeEntry {
      currency: string;
      country: string;
      code: string;
      number: number;
    }
  
    export function currencyToNumber(currency: string): number;
    export function currencyToCountry(currency: string): string[];
    export function currencyToCode(currency: string): string;
    
    export function countryToCurrency(country: string): string;
    export function countryToCode(country: string): string;
    export function countryToNumber(country: string): number;
    
    export function codeToCountry(code: string): string[];
    export function codeToCurrency(code: string): string;
    export function codeToNumber(code: string): number;
    
    export function numberToCountry(number: number): string[];
    export function numberToCurrency(number: number): string;
    export function numberToCode(number: number): string;
  
    export function allCodes(): CurrencyCodeEntry[];
  }
  