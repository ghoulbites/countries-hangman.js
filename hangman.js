const hangman = [`
<span>  +-------+  </span>
<span>  |          |  </span>
<span>             |  </span>
<span>             |  </span>
<span>             |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span>             |  </span>
<span>             |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span>  |          |  </span>
<span>             |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span> / |         |  </span>
<span>             |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span> / | \\       |  </span>
<span>             |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span> / | \\       |  </span>
<span> /           |  </span>
<span>             |  </span>
<span>============</span>
`, `
<span>  +-------+  </span>
<span>  |          |  </span>
<span>  0         |  </span>
<span> / | \\       |  </span>
<span> /   \\       |  </span>
<span>             |  </span>
<span>============</span>
`];


const categories = {
    "countries": {
        "len": 24,
        0: [
            // Country Names Starting in A
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria"
        ],
        1: [
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burundi"
        ],
        2: [
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Coute d'Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic"
        ],
        3: [
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic"
        ],
        4: [
            "East Timor",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia"
        ],
        5: [
            "Fiji",
            "Finland",
            "France"
        ],
        6: [
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Greenland",
            "Grenada",
            "Guam",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana"
        ],
        7: [
            "Haiti",
            "Honduras",
            "Hong Kong",
            "Hungary"
        ],
        8: [
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy"
        ],
        9: [
            "Jamaica",
            "Japan",
            "Jordan"
        ],
        10: [
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "North Korea",
            "South Korea",
            "Kuwait",
            "Kyrgyzstan"
        ],
        11: [
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg"
        ],
        12: [
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar"
        ],
        13: [
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway"
        ],
        14: [
            "Oman"
        ],
        15: [
            "Pakistan",
            "Palau",
            "Palestine",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Puerto Rico"
        ],
        16: [
            "Qatar"
        ],
        17: [
            "Romania",
            "Russia",
            "Rwanda"
        ],
        18: [
            "Samoa",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Montenegro",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Somalia",
            "South Africa",
            "Spain",
            "Sri Lanka",
            "North Sudan",
            "South Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria"
        ],
        19: [
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Tunisia",
            "Turkey",
            "Turkmenistan"
        ],
        20: [
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan"
        ],
        21: [
            "Vanuatu",
            'Vatican City',
            'Venezuela',
            'Vietnam'
        ],
        22: [
            "Yemen"
        ],
        23: [
            "Zambia",
            "Zimbabwe"
        ],
    },
    "animals": {

    }
};


