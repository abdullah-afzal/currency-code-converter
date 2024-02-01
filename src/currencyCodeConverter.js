const codes = require('./codes');

module.exports = {
  currencyToNumber: (currency) => {
    const entry = codes.find((entry) => entry.currency === currency);
    if (entry) {
      return entry.number;
    }
    throw new Error(`Invalid currency: ${currency}`);
  },

  currencyToCountry: (currency) => {
    const matchingEntries = codes.filter((entry) => entry.currency === currency);
  
    if (matchingEntries.length > 0) {
      return matchingEntries.map((entry) => entry.country);
    }
  
    throw new Error(`Invalid currency: ${currency}`);
  },
  

  currencyToCode: (currency) => {
    const entry = codes.find((entry) => entry.currency === currency);
    if (entry) {
      return entry.code;
    }
    throw new Error(`Invalid currency: ${currency}`);
  },

  countryToCurrency: (country) => {
    const entry = codes.find((entry) => entry.country === country);
    if (entry) {
      return entry.currency;
    }
    throw new Error(`Invalid country: ${country}`);
  },

  countryToCode: (country) => {
    const entry = codes.find((entry) => entry.country === country);
    if (entry) {
      return entry.code;
    }
    throw new Error(`Invalid country: ${country}`);
  },

  countryToNumber: (country) => {
    const entry = codes.find((entry) => entry.country === country);
    if (entry) {
      return entry.number;
    }
    throw new Error(`Invalid country: ${country}`);
  },

  codeToCountry: (code) => {
    const matchingEntries = codes.filter((entry) => entry.code === code);
    if (matchingEntries.length > 0) {
        return matchingEntries.map((entry) => entry.country);
      }
    throw new Error(`Invalid code: ${code}`);
  },

  codeToCurrency: (code) => {
    const entry = codes.find((entry) => entry.code === code);
    if (entry) {
      return entry.currency;
    }
    throw new Error(`Invalid code: ${code}`);
  },

  codeToNumber: (code) => {
    const entry = codes.find((entry) => entry.code === code);
    if (entry) {
      return entry.number;
    }
    throw new Error(`Invalid code: ${code}`);
  },

  numberToCountry: (number) => {
    const matchingEntries = codes.filter((entry) => entry.number === number);
    if (matchingEntries.length > 0) {
        return matchingEntries.map((entry) => entry.country);
      }
    throw new Error(`Invalid number: ${number}`);
  },

  numberToCurrency: (number) => {
    const entry = codes.find((entry) => entry.number === number);
    if (entry) {
      return entry.currency;
    }
    throw new Error(`Invalid number: ${number}`);
  },

  numberToCode: (number) => {
    const entry = codes.find((entry) => entry.number === number);
    if (entry) {
      return entry.code;
    }
    throw new Error(`Invalid number: ${number}`);
  },

  allCodes: () => {
    return codes
  }
};
