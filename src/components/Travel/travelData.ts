export interface TravelLocation {
  city: string
  state?: string
  stateAbbreviation?: string
  country: string
  countryAbbreviation?: string
  countryFlagEmoji: string
  arrivalDateTime: string
}

export const travelData: TravelLocation[] = [
  {
    "city": "Calgary",
    "countryFlagEmoji": "🇨🇦",
    "country": "Canada",
    "countryAbbreviation": "CA",
    "arrivalDateTime": "2023-09-20T00:00:00.000Z"
  },
  {
    "city": "Banff",
    "countryFlagEmoji": "🇨🇦",
    "country": "Canada",
    "countryAbbreviation": "CA",
    "arrivalDateTime": "2023-09-11T00:00:00.000Z"
  },
  {
    "city": "Whistler",
    "countryFlagEmoji": "🇨🇦",
    "country": "Canada",
    "countryAbbreviation": "CA",
    "arrivalDateTime": "2023-09-09T00:00:00.000Z"
  },
  {
    "city": "Stockholm",
    "countryFlagEmoji": "🇸🇪",
    "country": "Sweden",
    "countryAbbreviation": "SW",
    "arrivalDateTime": "2023-08-05T00:00:00.000Z"
  },
  {
    "city": "Copenhagen",
    "countryFlagEmoji": "🇩🇰",
    "country": "Denmark",
    "countryAbbreviation": "DE",
    "arrivalDateTime": "2023-07-29T00:00:00.000Z"
  },
  {
    "city": "Berlin",
    "countryFlagEmoji": "🇩🇪",
    "country": "Germany",
    "countryAbbreviation": "GER",
    "arrivalDateTime": "2023-07-22T00:00:00.000Z"
  },
  {
    "city": "Rome",
    "countryFlagEmoji": "🇮🇹",
    "country": "Italy",
    "countryAbbreviation": "IT",
    "arrivalDateTime": "2023-07-17T00:00:00.000Z"
  },
  {
    "city": "Bergen",
    "countryFlagEmoji": "🇳🇴",
    "country": "Norway",
    "arrivalDateTime": "2023-07-07T00:00:00.000Z"
  },
  {
    "city": "Lofoten",
    "countryFlagEmoji": "🇳🇴",
    "country": "Norway",
    "arrivalDateTime": "2023-06-30T00:00:00.000Z"
  },
  {
    "city": "Oslo",
    "countryFlagEmoji": "🇳🇴",
    "country": "Norway",
    "arrivalDateTime": "2023-06-20T00:00:00.000Z"
  },
  {
    "city": "Ericeira",
    "countryFlagEmoji": "🇵🇹",
    "country": "Portugal",
    "arrivalDateTime": "2023-06-10T00:00:00.000Z"
  },
  {
    "city": "Cascais",
    "countryFlagEmoji": "🇵🇹",
    "country": "Portugal",
    "arrivalDateTime": "2023-06-06T00:00:00.000Z"
  },
  {
    "city": "Lisbon",
    "countryFlagEmoji": "🇵🇹",
    "country": "Portugal",
    "arrivalDateTime": "2023-06-06T00:00:00.000Z"
  },
  {
    "city": "Paris",
    "countryFlagEmoji": "🇫🇷",
    "country": "France",
    "countryAbbreviation": "FR",
    "arrivalDateTime": "2023-06-03T00:00:00.000Z"
  },
  {
    "city": "Bordeaux",
    "countryFlagEmoji": "🇫🇷",
    "country": "France",
    "countryAbbreviation": "FR",
    "arrivalDateTime": "2023-05-23T00:00:00.000Z"
  },
  {
    "city": "Istanbul",
    "countryFlagEmoji": "🇹🇷",
    "country": "Türkiye",
    "arrivalDateTime": "2023-05-16T00:00:00.000Z"
  },
  {
    "city": "Kruger National Park",
    "countryFlagEmoji": "🇿🇦",
    "country": "South Africa",
    "countryAbbreviation": "SA",
    "arrivalDateTime": "2023-05-05T00:00:00.000Z"
  },
  {
    "city": "Cape Town",
    "countryFlagEmoji": "🇿🇦",
    "country": "South Africa",
    "countryAbbreviation": "SA",
    "arrivalDateTime": "2023-03-04T00:00:00.000Z"
  },
  {
    "city": "Niseko",
    "state": "Hokkaido",
    "countryFlagEmoji": "🇯🇵",
    "country": "Japan",
    "countryAbbreviation": "JP",
    "arrivalDateTime": "2023-02-01T00:00:00.000Z"
  },
  {
    "city": "Sapporo",
    "state": "Hokkaido",
    "countryFlagEmoji": "🇯🇵",
    "country": "Japan",
    "countryAbbreviation": "JP",
    "arrivalDateTime": "2023-02-01T00:00:00.000Z"
  },
  {
    "city": "Tokyo",
    "countryFlagEmoji": "🇯🇵",
    "country": "Japan",
    "countryAbbreviation": "JP",
    "arrivalDateTime": "2023-01-27T00:00:00.000Z"
  },
  {
    "city": "Melbourne",
    "countryFlagEmoji": "🇦🇺",
    "country": "Australia",
    "countryAbbreviation": "AU",
    "arrivalDateTime": "2022-11-11T00:00:00.000Z"
  },
  {
    "city": "Queenstown",
    "countryFlagEmoji": "🇳🇿",
    "country": "New Zealand",
    "countryAbbreviation": "NZ",
    "arrivalDateTime": "2022-11-28T00:00:00.000Z"
  },
  {
    "city": "Auckland",
    "countryFlagEmoji": "🇳🇿",
    "country": "New Zealand",
    "countryAbbreviation": "NZ",
    "arrivalDateTime": "2022-11-23T00:00:00.000Z"
  },
  {
    "city": "Oaxaca",
    "countryFlagEmoji": "🇲🇽",
    "country": "Mexico",
    "countryAbbreviation": "MX",
    "arrivalDateTime": "2022-10-23T00:00:00.000Z"
  },
  {
    "city": "Boulder",
    "state": "",
    "stateAbbreviation": "CO",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-09-14T00:00:00.000Z"
  },
  {
    "city": "Vancouver",
    "state": "British Columbia",
    "stateAbbreviation": "BC",
    "country": "Canada",
    "countryFlagEmoji": "🇨🇦",
    "arrivalDateTime": "2022-09-11T00:00:00.000Z"
  },
  {
    "city": "Seattle",
    "state": "Washington",
    "stateAbbreviation": "WA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-07-03T00:00:00.000Z"
  },
  {
    "city": "Portland",
    "state": "Oregon",
    "stateAbbreviation": "OR",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-08-03T00:00:00.000Z"
  },
  {
    "city": "Bend",
    "state": "Oregon",
    "stateAbbreviation": "OR",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-07-02T00:00:00.000Z"
  },
  {
    "city": "Santa Barbara",
    "state": "California",
    "stateAbbreviation": "CA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-06-25T00:00:00.000Z"
  },
  {
    "city": "Santa Cruz",
    "state": "California",
    "stateAbbreviation": "CA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-06-25T00:00:00.000Z"
  },
  {
    "city": "CDMX",
    "countryFlagEmoji": "🇲🇽",
    "country": "Mexico",
    "countryAbbreviation": "MX",
    "arrivalDateTime": "2022-05-14T00:00:00.000Z"
  },
  {
    "city": "Williams & Flagstaff",
    "state": "Arizona",
    "stateAbbreviation": "AZ",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-04-01T00:00:00.000Z"
  },
  {
    "city": "Las Vegas",
    "state": "Nevada",
    "stateAbbreviation": "NV",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-04-29T00:00:00.000Z"
  },
  {
    "city": "Los Angeles",
    "state": "California",
    "stateAbbreviation": "CA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-02-23T00:00:00.000Z"
  },
  {
    "city": "San Diego",
    "state": "California",
    "stateAbbreviation": "CA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-02-01T00:00:00.000Z"
  },
  {
    "city": "Tucson",
    "state": "Arizona",
    "stateAbbreviation": "AZ",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2022-01-29T00:00:00.000Z"
  },
  {
    "city": "Tampa",
    "state": "Florida",
    "stateAbbreviation": "FL",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2021-11-25T00:00:00.000Z"
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2021-11-08T00:00:00.000Z"
  },
  {
    "city": "Austin",
    "state": "Texas",
    "stateAbbreviation": "TX",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2021-10-11T00:00:00.000Z"
  },
  {
    "city": "San Francisco",
    "state": "California",
    "stateAbbreviation": "CA",
    "country": "United States",
    "countryAbbreviation": "U.S.",
    "countryFlagEmoji": "🇺🇸",
    "arrivalDateTime": "2021-10-05T00:00:00.000Z"
  }
]
