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


const words = {
    "A": [
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
    "B": [
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
    "C": [
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
    "D": [
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic"
    ],
    "E": [
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia"
    ],
    "F": [
        "Fiji",
        "Finland",
        "France"
    ],
    "G": [
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
    "H": [
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary"
    ],
    "I": [
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy"
    ],
    "J": [
        "Jamaica",
        "Japan",
        "Jordan"
    ],
    "K": [
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "North Korea",
        "South Korea",
        "Kuwait",
        "Kyrgyzstan"
    ],
    "L": [
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
    "M": [
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
    "N": [
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
    "O": [
        "Oman"
    ],
    "P": [
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
    "Q": [
        "Qatar"
    ],
    "R": [
        "Romania",
        "Russia",
        "Rwanda"
    ],
    "S": [
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
    "T": [
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tunisia",
        "Turkey",
        "Turkmenistan"
    ],
    "U": [
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan"
    ],
    "V": [
        "Vanuatu",
        'Vatican City',
        'Venezuela',
        'Vietnam'
    ],
    "Y": [
        "Yemen"
    ],
    "Z": [
        "Zambia",
        "Zimbabwe"
    ],
};


