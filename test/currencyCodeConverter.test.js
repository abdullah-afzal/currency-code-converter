const converter = require('../src/currencyCodeConverter');

describe('Currency Code Converter Functions', () => {
  test('Currency to Number', () => {
    expect(converter.currencyToNumber('US Dollar')).toBe('840');
  });

  test('Currency to Country', () => {
    expect(converter.currencyToCountry('US Dollar')).toStrictEqual(["AMERICAN SAMOA", "BONAIRE, SINT EUSTATIUS AND SABA", "BRITISH INDIAN OCEAN TERRITORY (THE)", "ECUADOR", "EL SALVADOR", "GUAM", "MARSHALL ISLANDS (THE)", "MICRONESIA (FEDERATED STATES OF)", "NORTHERN MARIANA ISLANDS (THE)", "PALAU", "PANAMA", "PUERTO RICO", "RÉUNION", "TIMOR-LESTE", "TURKS AND CAICOS ISLANDS (THE)", "UNITED STATES MINOR OUTLYING ISLANDS (THE)", "UNITED STATES OF AMERICA (THE)", "VIRGIN ISLANDS (BRITISH)", "VIRGIN ISLANDS (U.S.)", "ZIMBABWE"]);
  });

  test('Currency to Code', () => {
    expect(converter.currencyToCode('US Dollar')).toBe('USD');
  });

  test('Country to Currency', () => {
    expect(converter.countryToCurrency('UNITED STATES OF AMERICA (THE)')).toBe('US Dollar');
  });

  test('Country to Code', () => {
    expect(converter.countryToCode('UNITED STATES OF AMERICA (THE)')).toBe('USD');
  });

  test('Country to Number', () => {
    expect(converter.countryToNumber('UNITED STATES OF AMERICA (THE)')).toBe('840');
  });

  test('Code to Country', () => {
    expect(converter.codeToCountry('USD')).toStrictEqual(["AMERICAN SAMOA", "BONAIRE, SINT EUSTATIUS AND SABA", "BRITISH INDIAN OCEAN TERRITORY (THE)", "ECUADOR", "EL SALVADOR", "GUAM", "MARSHALL ISLANDS (THE)", "MICRONESIA (FEDERATED STATES OF)", "NORTHERN MARIANA ISLANDS (THE)", "PALAU", "PANAMA", "PUERTO RICO", "RÉUNION", "TIMOR-LESTE", "TURKS AND CAICOS ISLANDS (THE)", "UNITED STATES MINOR OUTLYING ISLANDS (THE)", "UNITED STATES OF AMERICA (THE)", "VIRGIN ISLANDS (BRITISH)", "VIRGIN ISLANDS (U.S.)", "ZIMBABWE"]);
  });

  test('Code to Currency', () => {
    expect(converter.codeToCurrency('USD')).toBe('US Dollar');
  });

  test('Code to Number', () => {
    expect(converter.codeToNumber('USD')).toBe('840');
  });

  test('Number to Country', () => {
    expect(converter.numberToCountry('840')).toStrictEqual(["AMERICAN SAMOA", "BONAIRE, SINT EUSTATIUS AND SABA", "BRITISH INDIAN OCEAN TERRITORY (THE)", "ECUADOR", "EL SALVADOR", "GUAM", "MARSHALL ISLANDS (THE)", "MICRONESIA (FEDERATED STATES OF)", "NORTHERN MARIANA ISLANDS (THE)", "PALAU", "PANAMA", "PUERTO RICO", "RÉUNION", "TIMOR-LESTE", "TURKS AND CAICOS ISLANDS (THE)", "UNITED STATES MINOR OUTLYING ISLANDS (THE)", "UNITED STATES OF AMERICA (THE)", "VIRGIN ISLANDS (BRITISH)", "VIRGIN ISLANDS (U.S.)", "ZIMBABWE"]);
  });

  test('Number to Currency', () => {
    expect(converter.numberToCurrency('840')).toBe('US Dollar');
  });

  test('Number to Code', () => {
    expect(converter.numberToCode('840')).toBe('USD');
  });
});
