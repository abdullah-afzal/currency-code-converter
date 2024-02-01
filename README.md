# Currency Code Converter

A simple Node.js module for converting between different formats of currency data, including currency, country, code, and number.

## Installation

To use this module in your Node.js project, you can install it using npm:

```bash
npm install currency-code-converter
```

Certainly, let's enhance the usage section to include examples for both JavaScript (Node.js) and React.

## Usage

### Node.js (JavaScript)

```javascript
const converter = require('currency-code-converter');

// Example: Convert currency to number
try {
  const numericCode = converter.currencyToNumber('Euro');
  console.log(numericCode); // Output: 978
} catch (error) {
  console.error(error.message);
}

// Example: Convert country to currency
try {
  const currency = converter.countryToCurrency('Germany');
  console.log(currency); // Output: Euro
} catch (error) {
  console.error(error.message);
}

// Additional functions follow a similar pattern for code and number conversions.
```

### React (JavaScript)

```jsx
import React, { useState } from 'react';
import Converter from 'currency-code-converter';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('Euro');

  // Example: Convert currency to number in a React component
  const handleConvertToNumber = () => {
    try {
      const numericCode = Converter.currencyToNumber(selectedCurrency);
      console.log(numericCode); // Output: Numeric code of the selected currency
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Currency Code Converter</h1>
      <label>Select a currency:</label>
      <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
        {/* Populate the dropdown with available currencies */}
        {/* (Consider fetching the list dynamically or hardcoding it based on your needs) */}
      </select>
      <button onClick={handleConvertToNumber}>Convert to Number</button>
    </div>
  );
};

export default App;
```

Adjust the React example based on your actual component structure and data fetching requirements.

## Functions

### `currencyToNumber(currency: string): number`
Converts a currency to its numeric code.

### `currencyToCountry(currency: string): string[]`
Converts a currency to an array of corresponding countries.

### `currencyToCode(currency: string): string`
Converts a currency to its alphabetic code.

### `countryToCurrency(country: string): string`
Converts a country to its corresponding currency.

### `countryToCode(country: string): string`
Converts a country to its alphabetic code.

### `countryToNumber(country: string): number`
Converts a country to its numeric code.

### `codeToCountry(code: string): string[]`
Converts a code to an array of corresponding countries.

### `codeToCurrency(code: string): string`
Converts a code to its corresponding currency.

### `codeToNumber(code: string): number`
Converts a code to its numeric code.

### `numberToCountry(number: number): string[]`
Converts a numeric code to an array of corresponding countries.

### `numberToCurrency(number: number): string`
Converts a numeric code to its corresponding currency.

### `numberToCode(number: number): string`
Converts a numeric code to its alphabetic code.

### `allCodes(): object[]`
Return an array of objects containing all countries, code, currency, number.

## License

This project is licensed under the MIT License - see the LICENSE file for details.