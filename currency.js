document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "955e8dd13dfc44cf9b0729dd77ba451c";
    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    
    const countries = [
        { code: "AED", name: "United Arab Emirates Dirham" },
        { code: "AFN", name: "Afghan Afghani" },
        { code: "ALL", name: "Albanian Lek" },
        { code: "AMD", name: "Armenian Dram" },
        { code: "ANG", name: "Netherlands Antillean Guilder" },
        { code: "AOA", name: "Angolan Kwanza" },
        { code: "ARS", name: "Argentine Peso" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "AWG", name: "Aruban Florin" },
        { code: "AZN", name: "Azerbaijani Manat" },
        { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
        { code: "BBD", name: "Barbadian Dollar" },
        { code: "BDT", name: "Bangladeshi Taka" },
        { code: "BGN", name: "Bulgarian Lev" },
        { code: "BHD", name: "Bahraini Dinar" },
        { code: "BIF", name: "Burundian Franc" },
        { code: "BMD", name: "Bermudian Dollar" },
        { code: "BND", name: "Brunei Dollar" },
        { code: "BOB", name: "Bolivian Boliviano" },
        { code: "BRL", name: "Brazilian Real" },
        { code: "BSD", name: "Bahamian Dollar" },
        { code: "BTN", name: "Bhutanese Ngultrum" },
        { code: "BWP", name: "Botswana Pula" },
        { code: "BYN", name: "Belarusian Ruble" },
        { code: "BZD", name: "Belize Dollar" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "CDF", name: "Congolese Franc" },
        { code: "CHF", name: "Swiss Franc" },
        { code: "CLP", name: "Chilean Peso" },
        { code: "CNY", name: "Chinese Yuan" },
        { code: "COP", name: "Colombian Peso" },
        { code: "CRC", name: "Costa Rican Colón" },
        { code: "CUC", name: "Cuban Convertible Peso" },
        { code: "CUP", name: "Cuban Peso" },
        { code: "CVE", name: "Cape Verdean Escudo" },
        { code: "CZK", name: "Czech Republic Koruna" },
        { code: "DJF", name: "Djiboutian Franc" },
        { code: "DKK", name: "Danish Krone" },
        { code: "DOP", name: "Dominican Peso" },
        { code: "DZD", name: "Algerian Dinar" },
        { code: "EGP", name: "Egyptian Pound" },
        { code: "ERN", name: "Eritrean Nakfa" },
        { code: "ETB", name: "Ethiopian Birr" },
        { code: "EUR", name: "Euro" },
        { code: "FJD", name: "Fijian Dollar" },
        { code: "FKP", name: "Falkland Islands Pound" },
        { code: "FOK", name: "Faroese Króna" },
        { code: "GBP", name: "British Pound Sterling" },
        { code: "GEL", name: "Georgian Lari" },
        { code: "GGP", name: "Guernsey Pound" },
        { code: "GHS", name: "Ghanaian Cedi" },
        { code: "GIP", name: "Gibraltar Pound" },
        { code: "GMD", name: "Gambian Dalasi" },
        { code: "GNF", name: "Guinean Franc" },
        { code: "GTQ", name: "Guatemalan Quetzal" },
        { code: "GYD", name: "Guyanaese Dollar" },
        { code: "HKD", name: "Hong Kong Dollar" },
        { code: "HNL", name: "Honduran Lempira" },
        { code: "HRK", name: "Croatian Kuna" },
        { code: "HTG", name: "Haitian Gourde" },
        { code: "HUF", name: "Hungarian Forint" },
        { code: "IDR", name: "Indonesian Rupiah" },
        { code: "ILS", name: "Israeli New Shekel" },
        { code: "IMP", name: "Isle of Man Pound" },
        { code: "INR", name: "Indian Rupee" },
        { code: "IQD", name: "Iraqi Dinar" },
        { code: "IRR", name: "Iranian Rial" },
        { code: "ISK", name: "Icelandic Króna" },
        { code: "JEP", name: "Jersey Pound" },
        { code: "JMD", name: "Jamaican Dollar" },
        { code: "JOD", name: "Jordanian Dinar" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "KES", name: "Kenyan Shilling" },
        { code: "KGS", name: "Kyrgystani Som" },
        { code: "KHR", name: "Cambodian Riel" },
        { code: "KID", name: "Kiribati Dollar" },
        { code: "KMF", name: "Comorian Franc" },
        { code: "KRW", name: "South Korean Won" },
        { code: "KWD", name: "Kuwaiti Dinar" },
        { code: "KYD", name: "Cayman Islands Dollar" },
        { code: "KZT", name: "Kazakhstani Tenge" },
        { code: "LAK", name: "Laotian Kip" },
        { code: "LBP", name: "Lebanese Pound" },
        { code: "LKR", name: "Sri Lankan Rupee" },
        { code: "LRD", name: "Liberian Dollar" },
        { code: "LSL", name: "Lesotho Loti" },
        { code: "LYD", name: "Libyan Dinar" },
        { code: "MAD", name: "Moroccan Dirham" },
        { code: "MDL", name: "Moldovan Leu" },
        { code: "MGA", name: "Malagasy Ariary" },
        { code: "MKD", name: "Macedonian Denar" },
        { code: "MMK", name: "Myanmar Kyat" },
        { code: "MNT", name: "Mongolian Tugrik" },
        { code: "MOP", name: "Macanese Pataca" },
        { code: "MRU", name: "Mauritanian Ouguiya" },
        { code: "MUR", name: "Mauritian Rupee" },
        { code: "MVR", name: "Maldivian Rufiyaa" },
        { code: "MWK", name: "Malawian Kwacha" },
        { code: "MXN", name: "Mexican Peso" },
        { code: "MYR", name: "Malaysian Ringgit" },
        { code: "MZN", name: "Mozambican Metical" },
        { code: "NAD", name: "Namibian Dollar" },
        { code: "NGN", name: "Nigerian Naira" },
        { code: "NIO", name: "Nicaraguan Córdoba" },
        { code: "NOK", name: "Norwegian Krone" },
        { code: "NPR", name: "Nepalese Rupee" },
        { code: "NZD", name: "New Zealand Dollar" },
        { code: "OMR", name: "Omani Rial" },
        { code: "PAB", name: "Panamanian Balboa" },
        { code: "PEN", name: "Peruvian Sol" },
        { code: "PGK", name: "Papua New Guinean Kina" },
        { code: "PHP", name: "Philippine Peso" },
        { code: "PKR", name: "Pakistani Rupee" },
        { code: "PLN", name: "Polish Zloty" },
        { code: "PYG", name: "Paraguayan Guarani" },
        { code: "QAR", name: "Qatari Rial" },
        { code: "RON", name: "Romanian Leu" },
        { code: "RSD", name: "Serbian Dinar" },
        { code: "RUB", name: "Russian Ruble"},
        { code: "RWF", name: "Rwandan Franc" },
        { code: "SAR", name: "Saudi Riyal" },
        { code: "SBD", name: "Solomon Islands Dollar" },
        { code: "SCR", name: "Seychellois Rupee" },
        { code: "SDG", name: "Sudanese Pound" },
        { code: "SEK", name: "Swedish Krona" },
        { code: "SGD", name: "Singapore Dollar" },
        { code: "SHP", name: "Saint Helena Pound" },
        { code: "SLL", name: "Sierra Leonean Leone" },
        { code: "SOS", name: "Somali Shilling" },
        { code: "SRD", name: "Surinamese Dollar" },
        { code: "SSP", name: "South Sudanese Pound" },
        { code: "STN", name: "São Tomé and Príncipe Dobra" },
        { code: "SYP", name: "Syrian Pound" },
        { code: "SZL", name: "Eswatini Lilangeni" },
        { code: "THB", name: "Thai Baht" },
        { code: "TJS", name: "Tajikistani Somoni" },
        { code: "TMT", name: "Turkmenistani Manat" },
        { code: "TND", name: "Tunisian Dinar" },
        { code: "TOP", name: "Tongan Paʻanga" },
        { code: "TRY", name: "Turkish Lira" },
        { code: "TTD", name: "Trinidad and Tobago Dollar" },
        { code: "TVD", name: "Tuvaluan Dollar" },
        { code: "TWD", name: "New Taiwan Dollar" },
        { code: "TZS", name: "Tanzanian Shilling" },
        { code: "UAH", name: "Ukrainian Hryvnia" },
        { code: "UGX", name: "Ugandan Shilling" },
        { code: "USD", name: "United States Dollar" },
        { code: "UYU", name: "Uruguayan Peso" },
        { code: "UZS", name: "Uzbekistan Som" },
        { code: "VES", name: "Venezuelan Bolívar" },
        { code: "VND", name: "Vietnamese Dong" },
        { code: "VUV", name: "Vanuatu Vatu" },
        { code: "WST", name: "Samoan Tala" },
        { code: "XAF", name: "Central African CFA Franc" },
        { code: "XCD", name: "East Caribbean Dollar" },
        { code: "XDR", name: "Special Drawing Rights" },
        { code: "XOF", name: "West African CFA Franc" },
        { code: "XPF", name: "CFP Franc" },
        { code: "YER", name: "Yemeni Rial" },
        { code: "ZAR", name: "South African Rand" },
        { code: "ZMW", name: "Zambian Kwacha" },
        { code: "ZWL", name: "Zimbabwean Dollar"},
    ];

    const dropdown = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country.code;
        option.text = `${country.name} (${country.code})`;
        dropdown.appendChild(option);
    });

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country.code;
        option.text = `${country.name} (${country.code})`;
        dropdown2.appendChild(option);
    });

    document.getElementById('but').addEventListener('click', function() {
        document.getElementById('fin-res').style.color = "#388e3c";
        const selectedDropdown1 = dropdown.value;
        const selectedDropdown2 = dropdown2.value;
        const amountConvert = document.getElementById('amount').value;
        
        if((amountConvert && selectedDropdown1 && selectedDropdown2) || (selectedDropdown1==selectedDropdown2 && amountConvert)){
            axios.get(url)
                .then(response => {
                    const ratesData = response.data;
                    const fromRate = ratesData.rates[selectedDropdown1];
                    const toRate = ratesData.rates[selectedDropdown2];
                    const convertRate = (toRate/fromRate)*amountConvert;
                    document.getElementById('fin-res').innerHTML = `${convertRate.toFixed(2)}`;

                })
                .catch(error => {
                    document.getElementById('fin-res').innerHTML = "Please recheck your inputs";
                    document.getElementById('fin-res').style.color = "red"; 
                })
        }
        else{
            document.getElementById('fin-res').innerHTML = "Please enter amount";
            document.getElementById('fin-res').style.color = "red";
        }
        
    })

    
    


    
})