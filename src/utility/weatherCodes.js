const weatherDescriptions = {
    0: "Cielo sereno",
    1: "Principalmente sereno",
    2: "Parzialmente nuvoloso",
    3: "Coperto",
    45: "Nebbia leggera",
    48: "Nebbia ghiacciata",
    51: "Pioviggine leggera",
    53: "Pioviggine moderata",
    55: "Pioviggine intensa",
    56: "Pioviggine ghiacciata leggera",
    57: "Pioviggine ghiacciata intensa",
    61: "Pioggia leggera",
    63: "Pioggia moderata",
    65: "Pioggia intensa",
    66: "Pioggia ghiacciata leggera",
    67: "Pioggia ghiacciata intensa",
    71: "Nevicata leggera",
    73: "Nevicata moderata",
    75: "Nevicata intensa",
    77: "Granelli di neve",
    80: "Rovesci leggeri di pioggia",
    81: "Rovesci moderati di pioggia",
    82: "Rovesci violenti di pioggia",
    85: "Rovesci leggeri di neve",
    86: "Rovesci intensi di neve",
    95: "Temporale leggero/moderato",
    96: "Temporale con grandine leggera",
    99: "Temporale con grandine intensa"
}

function getWeatherDescription(code) {
    return weatherDescriptions[code] || "Non disponibile";
}

export default getWeatherDescription