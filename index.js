// index.js

const converter = require('./src/currencyCodeConverter');

module.exports = {
  currencyToNumber: converter.currencyToNumber,
  currencyToCountry: converter.currencyToCountry,
  currencyToCode: converter.currencyToCode,
  countryToCurrency: converter.countryToCurrency,
  countryToCode: converter.countryToCode,
  countryToNumber: converter.countryToNumber,
  codeToCountry: converter.codeToCountry,
  codeToCurrency: converter.codeToCurrency,
  codeToNumber: converter.codeToNumber,
  numberToCountry: converter.numberToCountry,
  numberToCurrency: converter.numberToCurrency,
  numberToCode: converter.numberToCode,
  allCodes: converter.allCodes
};
