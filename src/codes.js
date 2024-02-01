const codes = [
    { code: 'AFN', country: 'AFGHANISTAN', currency: 'Afghani', number: "971" },
    { code: 'ALL', country: 'ALBANIA', currency: 'Lek', number: "008" },
    { code: 'DZD', country: 'ALGERIA', currency: 'Algerian Dinar', number: "012" },
    { code: 'USD', country: 'AMERICAN SAMOA', currency: 'US Dollar', number: "840" },
    { code: 'EUR', country: 'ANDORRA', currency: 'Euro', number: "978" },
    { code: 'AOA', country: 'ANGOLA', currency: 'Kwanza', number: "973" },
    { code: 'XCD', country: 'ANGUILLA', currency: 'East Caribbean Dollar', number: "951" },
    // { code: '', country: 'ANTARCTICA', currency: 'No universal currency', number: '' },
    { code: 'XCD', country: 'ANTIGUA AND BARBUDA', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'ARS', country: 'ARGENTINA', currency: 'Argentine Peso', number: "032" },
    { code: 'AMD', country: 'ARMENIA', currency: 'Armenian Dram', number: "051" },
    { code: 'AWG', country: 'ARUBA', currency: 'Aruban Florin', number: "533" },
    { code: 'AUD', country: 'AUSTRALIA', currency: 'Australian Dollar', number: "036" },
    { code: 'EUR', country: 'AUSTRIA', currency: 'Euro', number: "978" },
    { code: 'AZN', country: 'AZERBAIJAN', currency: 'Azerbaijanian Manat', number: "944" },
    { code: 'BSD', country: 'BAHAMAS (THE)', currency: 'Bahamian Dollar', number: "044" },
    { code: 'BHD', country: 'BAHRAIN', currency: 'Bahraini Dinar', number: "048" },
    { code: 'BDT', country: 'BANGLADESH', currency: 'Taka', number: "050" },
    { code: 'BBD', country: 'BARBADOS', currency: 'Barbados Dollar', number: "052" },
    { code: 'BYN', country: 'BELARUS', currency: 'Belarussian Ruble', number: "933" },
    { code: 'EUR', country: 'BELGIUM', currency: 'Euro', number: "978" },
    { code: 'BZD', country: 'BELIZE', currency: 'Belize Dollar', number: "084" },
    { code: 'XOF', country: 'BENIN', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'BMD', country: 'BERMUDA', currency: 'Bermudian Dollar', number: "060" },
    { code: 'BTN', country: 'BHUTAN', currency: 'Ngultrum', number: "064" },
    // { code: 'INR', country: 'BHUTAN', currency: 'Indian Rupee', number: "356" },
    { code: 'BOB', country: 'BOLIVIA (PLURINATIONAL STATE OF)', currency: 'Boliviano', number: "068" },
    { code: 'BOV', country: 'BOLIVIA (PLURINATIONAL STATE OF)', currency: 'Mvdol', number: "984" },
    { code: 'USD', country: 'BONAIRE, SINT EUSTATIUS AND SABA', currency: 'US Dollar', number: "840" },
    { code: 'BAM', country: 'BOSNIA AND HERZEGOVINA', currency: 'Convertible Mark', number: "977" },
    { code: 'BWP', country: 'BOTSWANA', currency: 'Pula', number: "072" },
    { code: 'NOK', country: 'BOUVET ISLAND', currency: 'Norwegian Krone', number: "578" },
    { code: 'BRL', country: 'BRAZIL', currency: 'Brazilian Real', number: "986" },
    { code: 'USD', country: 'BRITISH INDIAN OCEAN TERRITORY (THE)', currency: 'US Dollar', number: "840" },
    { code: 'BND', country: 'BRUNEI DARUSSALAM', currency: 'Brunei Dollar', number: "096" },
    { code: 'BGN', country: 'BULGARIA', currency: 'Bulgarian Lev', number: "975" },
    { code: 'XOF', country: 'BURKINA FASO', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'BIF', country: 'BURUNDI', currency: 'Burundi Franc', number: "108" },
    { code: 'CVE', country: 'CABO VERDE', currency: 'Cabo Verde Escudo', number: "132" },
    { code: 'KHR', country: 'CAMBODIA', currency: 'Riel', number: "116" },
    { code: 'XAF', country: 'CAMEROON', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'CAD', country: 'CANADA', currency: 'Canadian Dollar', number: "124" },
    { code: 'KYD', country: 'CAYMAN ISLANDS (THE)', currency: 'Cayman Islands Dollar', number: "136" },
    { code: 'XAF', country: 'CENTRAL AFRICAN REPUBLIC (THE)', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'XAF', country: 'CHAD', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'CLF', country: 'CHILE', currency: 'Unidad de Fomento', number: "990" },
    { code: 'CLP', country: 'CHILE', currency: 'Chilean Peso', number: "152" },
    { code: 'CNY', country: 'CHINA', currency: 'Yuan Renminbi', number: "156" },
    { code: 'AUD', country: 'CHRISTMAS ISLAND', currency: 'Australian Dollar', number: "036" },
    { code: 'AUD', country: 'COCOS (KEELING) ISLANDS (THE)', currency: 'Australian Dollar', number: "036" },
    { code: 'COP', country: 'COLOMBIA', currency: 'Colombian Peso', number: "170" },
    { code: 'COU', country: 'COLOMBIA', currency: 'Unidad de Valor Real', number: "970" },
    { code: 'KMF', country: 'COMOROS (THE)', currency: 'Comoro Franc', number: "174" },
    { code: 'CDF', country: 'CONGO (THE DEMOCRATIC REPUBLIC OF THE)', currency: 'Congolese Franc', number: "976" },
    { code: 'XAF', country: 'CONGO (THE)', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'NZD', country: 'COOK ISLANDS (THE)', currency: 'New Zealand Dollar', number: "554" },
    { code: 'CRC', country: 'COSTA RICA', currency: 'Costa Rican Colon', number: "188" },
    { code: 'EUR', country: 'CROATIA', currency: 'Euro', number: "978" },
    { code: 'CUC', country: 'CUBA', currency: 'Peso Convertible', number: "931" },
    { code: 'CUP', country: 'CUBA', currency: 'Cuban Peso', number: "192" },
    { code: 'ANG', country: 'CURAÇAO', currency: 'Netherlands Antillean Guilder', number: "532" },
    { code: 'EUR', country: 'CYPRUS', currency: 'Euro', number: "978" },
    { code: 'CZK', country: 'CZECH REPUBLIC (THE)', currency: 'Czech Koruna', number: "203" },
    { code: 'XOF', country: 'CÔTE D\'IVOIRE', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'DKK', country: 'DENMARK', currency: 'Danish Krone', number: "208" },
    { code: 'DJF', country: 'DJIBOUTI', currency: 'Djibouti Franc', number: "262" },
    { code: 'XCD', country: 'DOMINICA', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'DOP', country: 'DOMINICAN REPUBLIC (THE)', currency: 'Dominican Peso', number: "214" },
    { code: 'USD', country: 'ECUADOR', currency: 'US Dollar', number: "840" },
    { code: 'EGP', country: 'EGYPT', currency: 'Egyptian Pound', number: "818" },
    { code: 'SVC', country: 'EL SALVADOR', currency: 'El Salvador Colon', number: "222" },
    { code: 'USD', country: 'EL SALVADOR', currency: 'US Dollar', number: "840" },
    { code: 'XAF', country: 'EQUATORIAL GUINEA', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'ERN', country: 'ERITREA', currency: 'Nakfa', number: "232" },
    { code: 'EUR', country: 'ESTONIA', currency: 'Euro', number: "978" },
    { code: 'ETB', country: 'ETHIOPIA', currency: 'Ethiopian Birr', number: "230" },
    { code: 'EUR', country: 'EUROPEAN UNION', currency: 'Euro', number: "978" },
    { code: 'FKP', country: 'FALKLAND ISLANDS (THE) [MALVINAS]', currency: 'Falkland Islands Pound', number: "238" },
    { code: 'DKK', country: 'FAROE ISLANDS (THE)', currency: 'Danish Krone', number: "208" },
    { code: 'FJD', country: 'FIJI', currency: 'Fiji Dollar', number: "242" },
    { code: 'EUR', country: 'FINLAND', currency: 'Euro', number: "978" },
    { code: 'EUR', country: 'FRANCE', currency: 'Euro', number: "978" },
    { code: 'EUR', country: 'FRENCH GUIANA', currency: 'Euro', number: "978" },
    { code: 'XPF', country: 'FRENCH POLYNESIA', currency: 'CFP Franc', number: "953" },
    { code: 'EUR', country: 'FRENCH SOUTHERN TERRITORIES (THE)', currency: 'Euro', number: "978" },
    { code: 'XAF', country: 'GABON', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'GMD', country: 'GAMBIA (THE)', currency: 'Dalasi', number: "270" },
    { code: 'GEL', country: 'GEORGIA', currency: 'Lari', number: "981" },
    { code: 'EUR', country: 'GERMANY', currency: 'Euro', number: "978" },
    { code: 'GHS', country: 'GHANA', currency: 'Ghana Cedi', number: "936" },
    { code: 'GIP', country: 'GIBRALTAR', currency: 'Gibraltar Pound', number: "292" },
    { code: 'EUR', country: 'GREECE', currency: 'Euro', number: "978" },
    { code: 'DKK', country: 'GREENLAND', currency: 'Danish Krone', number: "208" },
    { code: 'XCD', country: 'GRENADA', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'EUR', country: 'GUADELOUPE', currency: 'Euro', number: "978" },
    { code: 'USD', country: 'GUAM', currency: 'US Dollar', number: "840" },
    { code: 'GTQ', country: 'GUATEMALA', currency: 'Quetzal', number: "320" },
    { code: 'GBP', country: 'GUERNSEY', currency: 'Pound Sterling', number: "826" },
    { code: 'GNF', country: 'GUINEA', currency: 'Guinea Franc', number: "324" },
    { code: 'XOF', country: 'GUINEA-BISSAU', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'GYD', country: 'GUYANA', currency: 'Guyana Dollar', number: "328" },
    { code: 'HTG', country: 'HAITI', currency: 'Gourde', number: "332" },
    // { code: 'USD', country: 'HAITI', currency: 'US Dollar', number: "840" },
    { code: 'AUD', country: 'HEARD ISLAND AND McDONALD ISLANDS', currency: 'Australian Dollar', number: "036" },
    { code: 'HNL', country: 'HONDURAS', currency: 'Lempira', number: "340" },
    { code: 'HKD', country: 'HONG KONG', currency: 'Hong Kong Dollar', number: "344" },
    { code: 'HUF', country: 'HUNGARY', currency: 'Forint', number: "348" },
    { code: 'ISK', country: 'ICELAND', currency: 'Iceland Krona', number: "352" },
    { code: 'INR', country: 'INDIA', currency: 'Indian Rupee', number: "356" },
    { code: 'IDR', country: 'INDONESIA', currency: 'Rupiah', number: "360" },
    { code: 'XDR', country: 'INTERNATIONAL MONETARY FUND (IMF)', currency: 'SDR (Special Drawing Right)', number: "960" },
    { code: 'IRR', country: 'IRAN (ISLAMIC REPUBLIC OF)', currency: 'Iranian Rial', number: "364" },
    { code: 'IQD', country: 'IRAQ', currency: 'Iraqi Dinar', number: "368" },
    { code: 'EUR', country: 'IRELAND', currency: 'Euro', number: "978" },
    { code: 'GBP', country: 'ISLE OF MAN', currency: 'Pound Sterling', number: "826" },
    { code: 'ILS', country: 'ISRAEL', currency: 'New Israeli Sheqel', number: "376" },
    { code: 'EUR', country: 'ITALY', currency: 'Euro', number: "978" },
    { code: 'JMD', country: 'JAMAICA', currency: 'Jamaican Dollar', number: "388" },
    { code: 'JPY', country: 'JAPAN', currency: 'Yen', number: "392" },
    { code: 'GBP', country: 'JERSEY', currency: 'Pound Sterling', number: "826" },
    { code: 'JOD', country: 'JORDAN', currency: 'Jordanian Dinar', number: "400" },
    { code: 'KZT', country: 'KAZAKHSTAN', currency: 'Tenge', number: "398" },
    { code: 'KES', country: 'KENYA', currency: 'Kenyan Shilling', number: "404" },
    { code: 'AUD', country: 'KIRIBATI', currency: 'Australian Dollar', number: "036" },
    { code: 'KPW', country: 'KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)', currency: 'North Korean Won', number: "408" },
    { code: 'KRW', country: 'KOREA (THE REPUBLIC OF)', currency: 'Won', number: "410" },
    { code: 'KWD', country: 'KUWAIT', currency: 'Kuwaiti Dinar', number: "414" },
    { code: 'KGS', country: 'KYRGYZSTAN', currency: 'Som', number: "417" },
    { code: 'LAK', country: 'LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)', currency: 'Lao Kip', number: "418" },
    { code: 'EUR', country: 'LATVIA', currency: 'Euro', number: "978" },
    { code: 'LBP', country: 'LEBANON', currency: 'Lebanese Pound', number: "422" },
    { code: 'LSL', country: 'LESOTHO', currency: 'Loti', number: "426" },
    { code: 'ZAR', country: 'LESOTHO', currency: 'Rand', number: "710" },
    { code: 'LRD', country: 'LIBERIA', currency: 'Liberian Dollar', number: "430" },
    { code: 'LYD', country: 'LIBYA', currency: 'Libyan Dinar', number: "434" },
    { code: 'CHF', country: 'LIECHTENSTEIN', currency: 'Swiss Franc', number: "756" },
    { code: 'EUR', country: 'LITHUANIA', currency: 'Euro', number: "978" },
    { code: 'EUR', country: 'LUXEMBOURG', currency: 'Euro', number: "978" },
    { code: 'MOP', country: 'MACAO', currency: 'Pataca', number: "446" },
    { code: 'MKD', country: 'NORTH MACEDONIA', currency: 'Denar', number: "807" },
    { code: 'MGA', country: 'MADAGASCAR', currency: 'Malagasy Ariary', number: "969" },
    { code: 'MWK', country: 'MALAWI', currency: 'Malawi Kwacha', number: "454" },
    { code: 'MYR', country: 'MALAYSIA', currency: 'Malaysian Ringgit', number: "458" },
    { code: 'MVR', country: 'MALDIVES', currency: 'Rufiyaa', number: "462" },
    { code: 'XOF', country: 'MALI', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'EUR', country: 'MALTA', currency: 'Euro', number: "978" },
    { code: 'USD', country: 'MARSHALL ISLANDS (THE)', currency: 'US Dollar', number: "840" },
    { code: 'MRU', country: 'MAURITANIA', currency: 'Ouguiya', number: "929" },
    { code: 'MUR', country: 'MAURITIUS', currency: 'Mauritius Rupee', number: "480" },
    { code: 'EUR', country: 'MAYOTTE', currency: 'Euro', number: "978" },
    { code: 'MXN', country: 'MEXICO', currency: 'Mexican Peso', number: "484" },
    { code: 'MXV', country: 'MEXICO', currency: 'Mexican Unidad de Inversion (UDI)', number: "979" },
    { code: 'USD', country: 'MICRONESIA (FEDERATED STATES OF)', currency: 'US Dollar', number: "840" },
    { code: 'MDL', country: 'MOLDOVA (THE REPUBLIC OF)', currency: 'Moldovan Leu', number: "498" },
    { code: 'EUR', country: 'MONACO', currency: 'Euro', number: "978" },
    { code: 'MNT', country: 'MONGOLIA', currency: 'Tugrik', number: "496" },
    { code: 'EUR', country: 'MONTENEGRO', currency: 'Euro', number: "978" },
    { code: 'XCD', country: 'MONTSERRAT', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'MAD', country: 'MOROCCO', currency: 'Moroccan Dirham', number: "504" },
    { code: 'MZN', country: 'MOZAMBIQUE', currency: 'Mozambique Metical', number: "943" },
    { code: 'MMK', country: 'MYANMAR', currency: 'Kyat', number: "104" },
    { code: 'NAD', country: 'NAMIBIA', currency: 'Namibia Dollar', number: "516" },
    { code: 'ZAR', country: 'NAMIBIA', currency: 'Rand', number: "710" },
    { code: 'AUD', country: 'NAURU', currency: 'Australian Dollar', number: "036" },
    { code: 'NPR', country: 'NEPAL', currency: 'Nepalese Rupee', number: "524" },
    { code: 'EUR', country: 'NETHERLANDS (THE)', currency: 'Euro', number: "978" },
    { code: 'XPF', country: 'NEW CALEDONIA', currency: 'CFP Franc', number: "953" },
    { code: 'NZD', country: 'NEW ZEALAND', currency: 'New Zealand Dollar', number: "554" },
    { code: 'NIO', country: 'NICARAGUA', currency: 'Cordoba Oro', number: "558" },
    { code: 'XOF', country: 'NIGER (THE)', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'NGN', country: 'NIGERIA', currency: 'Naira', number: "566" },
    { code: 'NZD', country: 'NIUE', currency: 'New Zealand Dollar', number: "554" },
    { code: 'AUD', country: 'NORFOLK ISLAND', currency: 'Australian Dollar', number: "036" },
    { code: 'USD', country: 'NORTHERN MARIANA ISLANDS (THE)', currency: 'US Dollar', number: "840" },
    { code: 'NOK', country: 'NORWAY', currency: 'Norwegian Krone', number: "578" },
    { code: 'OMR', country: 'OMAN', currency: 'Rial Omani', number: "512" },
    { code: 'PKR', country: 'PAKISTAN', currency: 'Pakistan Rupee', number: "586" },
    { code: 'USD', country: 'PALAU', currency: 'US Dollar', number: "840" },
    { code: 'PAB', country: 'PANAMA', currency: 'Balboa', number: "590" },
    { code: 'USD', country: 'PANAMA', currency: 'US Dollar', number: "840" },
    { code: 'PGK', country: 'PAPUA NEW GUINEA', currency: 'Kina', number: "598" },
    { code: 'PYG', country: 'PARAGUAY', currency: 'Guarani', number: "600" },
    { code: 'PEN', country: 'PERU', currency: 'Sol', number: "604" },
    { code: 'PHP', country: 'PHILIPPINES (THE)', currency: 'Philippine Peso', number: "608" },
    { code: 'NZD', country: 'PITCAIRN', currency: 'New Zealand Dollar', number: "554" },
    { code: 'PLN', country: 'POLAND', currency: 'Zloty', number: "985" },
    { code: 'EUR', country: 'PORTUGAL', currency: 'Euro', number: "978" },
    { code: 'USD', country: 'PUERTO RICO', currency: 'US Dollar', number: "840" },
    { code: 'QAR', country: 'QATAR', currency: 'Qatari Rial', number: "634" },
    { code: 'XAF', country: 'REPUBLIQUE DU CONGO', currency: 'CFA Franc BEAC', number: "950" },
    { code: 'RON', country: 'ROMANIA', currency: 'Romanian Leu', number: "946" },
    { code: 'RUB', country: 'RUSSIAN FEDERATION (THE)', currency: 'Russian Ruble', number: "643" },
    { code: 'RWF', country: 'RWANDA', currency: 'Rwanda Franc', number: "646" },
    { code: 'USD', country: 'RÉUNION', currency: 'US Dollar', number: "840" },
    { code: 'EUR', country: 'SAINT BARTHÉLEMY', currency: 'Euro', number: "978" },
    { code: 'SHP', country: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', currency: 'Saint Helena Pound', number: "654" },
    { code: 'XCD', country: 'SAINT KITTS AND NEVIS', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'XCD', country: 'SAINT LUCIA', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'EUR', country: 'SAINT MARTIN (FRENCH PART)', currency: 'Euro', number: "978" },
    { code: 'XCD', country: 'SAINT VINCENT AND THE GRENADINES', currency: 'East Caribbean Dollar', number: "951" },
    { code: 'WST', country: 'SAMOA', currency: 'Tala', number: "882" },
    { code: 'EUR', country: 'SAN MARINO', currency: 'Euro', number: "978" },
    { code: 'STN', country: 'SAO TOME AND PRINCIPE', currency: 'Dobra', number: "930" },
    { code: 'SAR', country: 'SAUDI ARABIA', currency: 'Saudi Riyal', number: "682" },
    { code: 'XOF', country: 'SENEGAL', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'RSD', country: 'SERBIA', currency: 'Serbian Dinar', number: "941" },
    { code: 'SCR', country: 'SEYCHELLES', currency: 'Seychelles Rupee', number: "690" },
    { code: 'SLL', country: 'SIERRA LEONE', currency: 'Leone', number: "694" },
    { code: 'SGD', country: 'SINGAPORE', currency: 'Singapore Dollar', number: "702" },
    { code: 'ANG', country: 'SINT MAARTEN (DUTCH PART)', currency: 'Netherlands Antillean Guilder', number: "532" },
    { code: 'XSU', country: 'SOLOMON ISLANDS', currency: 'Solomon Islands Dollar', number: "090" },
    { code: 'SOS', country: 'SOMALIA', currency: 'Somali Shilling', number: "706" },
    { code: 'ZAR', country: 'SOUTH AFRICA', currency: 'Rand', number: "710" },
    { code: 'SSP', country: 'SOUTH SUDAN', currency: 'South Sudanese Pound', number: "728" },
    { code: 'EUR', country: 'SPAIN', currency: 'Euro', number: "978" },
    { code: 'LKR', country: 'SRI LANKA', currency: 'Sri Lanka Rupee', number: "144" },
    { code: 'SDG', country: 'SUDAN (THE)', currency: 'Sudanese Pound', number: "938" },
    { code: 'SRD', country: 'SURINAME', currency: 'Surinam Dollar', number: "968" },
    { code: 'NOK', country: 'SVALBARD AND JAN MAYEN', currency: 'Norwegian Krone', number: "578" },
    { code: 'SZL', country: 'SWAZILAND', currency: 'Lilangeni', number: "748" },
    { code: 'SEK', country: 'SWEDEN', currency: 'Swedish Krona', number: "752" },
    { code: 'CHF', country: 'SWITZERLAND', currency: 'Swiss Franc', number: "756" },
    { code: 'SYP', country: 'SYRIAN ARAB REPUBLIC', currency: 'Syrian Pound', number: "760" },
    { code: 'TWD', country: 'TAIWAN (PROVINCE OF CHINA)', currency: 'New Taiwan Dollar', number: "901" },
    { code: 'TJS', country: 'TAJIKISTAN', currency: 'Somoni', number: "972" },
    { code: 'TZS', country: 'TANZANIA, UNITED REPUBLIC OF', currency: 'Tanzanian Shilling', number: "834" },
    { code: 'THB', country: 'THAILAND', currency: 'Baht', number: "764" },
    { code: 'USD', country: 'TIMOR-LESTE', currency: 'US Dollar', number: "840" },
    { code: 'XOF', country: 'TOGO', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'NZD', country: 'TOKELAU', currency: 'New Zealand Dollar', number: "554" },
    { code: 'TOP', country: 'TONGA', currency: 'Pa’anga', number: "776" },
    { code: 'TTD', country: 'TRINIDAD AND TOBAGO', currency: 'Trinidad and Tobago Dollar', number: "780" },
    { code: 'TND', country: 'TUNISIA', currency: 'Tunisian Dinar', number: "788" },
    { code: 'TRY', country: 'TURKEY', currency: 'Turkish Lira', number: "949" },
    { code: 'TMT', country: 'TURKMENISTAN', currency: 'Turkmenistan New Manat', number: "934" },
    { code: 'USD', country: 'TURKS AND CAICOS ISLANDS (THE)', currency: 'US Dollar', number: "840" },
    { code: 'AUD', country: 'TUVALU', currency: 'Australian Dollar', number: "036" },
    { code: 'UGX', country: 'UGANDA', currency: 'Uganda Shilling', number: "800" },
    { code: 'UAH', country: 'UKRAINE', currency: 'Hryvnia', number: "980" },
    { code: 'AED', country: 'UNITED ARAB EMIRATES (THE)', currency: 'UAE Dirham', number: "784" },
    { code: 'GBP', country: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)', currency: 'Pound Sterling', number: "826" },
    { code: 'USD', country: 'UNITED STATES MINOR OUTLYING ISLANDS (THE)', currency: 'US Dollar', number: "840" },
    { code: 'USD', country: 'UNITED STATES OF AMERICA (THE)', currency: 'US Dollar', number: "840" },
    { code: 'UYU', country: 'URUGUAY', currency: 'Peso Uruguayo', number: "858" },
    { code: 'UYI', country: 'URUGUAY', currency: 'Uruguay Peso en Unidades Indexadas (UI)', number: "940" },
    { code: 'UZS', country: 'UZBEKISTAN', currency: 'Uzbekistan Sum', number: "860" },
    { code: 'VUV', country: 'VANUATU', currency: 'Vatu', number: "548" },
    { code: 'VES', country: 'VENEZUELA (BOLIVARIAN REPUBLIC OF)', currency: 'Bolívar Soberano', number: "928" },
    { code: 'VND', country: 'VIET NAM', currency: 'Dong', number: "704" },
    { code: 'USD', country: 'VIRGIN ISLANDS (BRITISH)', currency: 'US Dollar', number: "840" },
    { code: 'USD', country: 'VIRGIN ISLANDS (U.S.)', currency: 'US Dollar', number: "840" },
    { code: 'XOF', country: 'WALLIS AND FUTUNA', currency: 'CFA Franc BCEAO', number: "952" },
    { code: 'MAD', country: 'WESTERN SAHARA', currency: 'Moroccan Dirham', number: "504" },
    { code: 'YER', country: 'YEMEN', currency: 'Yemeni Rial', number: "886" },
    { code: 'ZMW', country: 'ZAMBIA', currency: 'Zambian Kwacha', number: "967" },
    { code: 'USD', country: 'ZIMBABWE', currency: 'US Dollar', number: "840" }
];
  
  module.exports = codes;
  