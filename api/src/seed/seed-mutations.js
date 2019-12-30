export default /* GraphQL */ `
  mutation {
    s1: CreateSeason(year: 2019) {
      year
    }
    f1: CreateFormulaOne(name: "Formula 1", founded: 1950) {
      name
      founded
    }
    d1: CreateDriver(
      driverId: "hamilton"
      permanentNumber: "44"
      code: "HAM"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/220px-Lewis_Hamilton_2016_Malaysia_2.jpg"
      givenName: "Lewis"
      familyName: "Hamilton"
      dateOfBirth: "07-01-1985"
      nationality: "British"
      salary: "60mil"
      podiums: 151
      wins: 84
    ) {
      driverId
    }
    d2: CreateDriver(
      driverId: "bottas"
      permanentNumber: "77"
      code: "BOT"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2019_Formula_One_tests_Barcelona%2C_Bottas_%2847200028912%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Bottas_%2847200028912%29.jpg"
      givenName: "Valteri"
      familyName: "Bottas"
      dateOfBirth: "28-08-1989"
      nationality: "Finnish"
      salary: "7mil"
      podiums: 45
      wins: 7
    ) {
      driverId
    }
    d3: CreateDriver(
      driverId: "verstapen"
      permanentNumber: "33"
      code: "VER"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/220px-Max_Verstappen_2017_Malaysia_3.jpg"
      givenName: "Max"
      familyName: "Verstappen"
      dateOfBirth: "30-09-1997"
      nationality: "Dutch"
      salary: "12mil"
      podiums: 31
      wins: 8
    ) {
      driverId
    }
    d4: CreateDriver(
      driverId: "leclerc"
      permanentNumber: "16"
      code: "LEC"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/F12019_Schloss_Gabelhofen_%2825%29.jpg/220px-F12019_Schloss_Gabelhofen_%2825%29.jpg"
      givenName: "Charles"
      familyName: "Leclerc"
      dateOfBirth: "30-09-1997"
      nationality: "Monégasque"
      salary: "9mil"
      podiums: 10
      wins: 2
    ) {
      driverId
    }
    d5: CreateDriver(
      driverId: "vettel"
      permanentNumber: "5"
      code: "VET"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sebastian_Vettel_2017_Malaysia_2.jpg/220px-Sebastian_Vettel_2017_Malaysia_2.jpg"
      givenName: "Sebastian"
      familyName: "Vettel"
      dateOfBirth: "03-07-1987"
      nationality: "German"
      salary: "60mil"
      podiums: 120
      wins: 53
    ) {
      driverId
    }
    d6: CreateDriver(
      driverId: "sainz"
      permanentNumber: "55"
      code: "SAI"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2019_Formula_One_tests_Barcelona%2C_Sainz_%2847251966861%29.jpg/250px-2019_Formula_One_tests_Barcelona%2C_Sainz_%2847251966861%29.jpg"
      givenName: "Carlos"
      familyName: "Sainz"
      dateOfBirth: "01-09-1994"
      nationality: "Spanish"
      salary: "3mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d7: CreateDriver(
      driverId: "gasly"
      permanentNumber: "10"
      code: "GAS"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg"
      givenName: "Pierre"
      familyName: "Gasly"
      dateOfBirth: "07-02-1996"
      nationality: "French"
      salary: "1mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d8: CreateDriver(
      driverId: "albon"
      permanentNumber: "23"
      code: "ALB"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2019_Formula_One_tests_Barcelona%2C_Albon_%2847200030682%29.jpg/210px-2019_Formula_One_tests_Barcelona%2C_Albon_%2847200030682%29.jpg"
      givenName: "Alexander"
      familyName: "Albon"
      dateOfBirth: "23-03-1996"
      nationality: "Thai"
      salary: "500k"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d9: CreateDriver(
      driverId: "ricciardo"
      permanentNumber: "3"
      code: "RIC"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/F12019_Schloss_Gabelhofen_%2818%29.jpg/220px-F12019_Schloss_Gabelhofen_%2818%29.jpg"
      givenName: "Daniel"
      familyName: "Ricciardo"
      dateOfBirth: "01-07-1989"
      nationality: "Thai"
      salary: "7mil"
      podiums: 29
      wins: 7
    ) {
      driverId
    }
    d10: CreateDriver(
      driverId: "stroll"
      permanentNumber: "18"
      code: "STR"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2019_Formula_One_tests_Barcelona%2C_Stroll_%2833376133178%29.jpg/180px-2019_Formula_One_tests_Barcelona%2C_Stroll_%2833376133178%29.jpg"
      givenName: "Lance"
      familyName: "Stroll"
      dateOfBirth: "29-10-1998"
      nationality: "Canadian"
      salary: "4mil"
      podiums: 1
      wins: 0
    ) {
      driverId
    }

    d11: CreateDriver(
      driverId: "perez"
      permanentNumber: "11"
      code: "PER"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2019_Formula_One_tests_Barcelona%2C_P%C3%A9rez_%2847200017422%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_P%C3%A9rez_%2847200017422%29.jpg"
      givenName: "Sergio"
      familyName: "Perez"
      dateOfBirth: "26-01-1990"
      nationality: "Mexican"
      salary: "3mil"
      podiums: 8
      wins: 0
    ) {
      driverId
    }
    d12: CreateDriver(
      driverId: "norris"
      permanentNumber: "11"
      code: "NOR"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/F12019_Schloss_Gabelhofen_%2805%29.jpg/200px-F12019_Schloss_Gabelhofen_%2805%29.jpg"
      givenName: "Lando"
      familyName: "Norris"
      dateOfBirth: "13-11-1999"
      nationality: "British"
      salary: "2mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d13: CreateDriver(
      driverId: "raikonen"
      permanentNumber: "7"
      code: "PER"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg/220px-F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg"
      givenName: "Kimi"
      familyName: "Räikkönen"
      dateOfBirth: "17-10-1979"
      nationality: "Finnish"
      salary: "3mil"
      podiums: 103
      wins: 21
    ) {
      driverId
    }
    d14: CreateDriver(
      driverId: "kvyat"
      permanentNumber: "26"
      code: "KVY"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Daniil_Kvyat_USA_2017.jpg/240px-Daniil_Kvyat_USA_2017.jpg"
      givenName: "Danil"
      familyName: "Kvyat"
      dateOfBirth: "26-04-1994"
      nationality: "Russian"
      salary: "2mil"
      podiums: 3
      wins: 0
    ) {
      driverId
    }
    d15: CreateDriver(
      driverId: "hulkenberg"
      permanentNumber: "27"
      code: "HUL"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg"
      givenName: "Nico"
      familyName: "Hülkenberg"
      dateOfBirth: "19-08-1987"
      nationality: "German"
      salary: "4mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d16: CreateDriver(
      driverId: "magnusen"
      permanentNumber: "20"
      code: "MAG"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2017_United_States_Grand_Prix_Magnussen_2_%2824128155318%29.jpg/220px-2017_United_States_Grand_Prix_Magnussen_2_%2824128155318%29.jpg"
      givenName: "Kevin"
      familyName: "Magnusen"
      dateOfBirth: "05-10-1992"
      nationality: "Danish"
      salary: "3mil"
      podiums: 1
      wins: 0
    ) {
      driverId
    }
    d17: CreateDriver(
      driverId: "giovinazzi"
      permanentNumber: "99"
      code: "GIO"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2019_Formula_One_tests_Barcelona%2C_Giovinazzi_%2847200025952%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Giovinazzi_%2847200025952%29.jpg"
      givenName: "Antonio"
      familyName: "Giovinazzi"
      dateOfBirth: "14-12-1993"
      nationality: "Italian"
      salary: "1.5mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }
    d18: CreateDriver(
      driverId: "grosjean"
      permanentNumber: "11"
      code: "GRO"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/F12019_Schloss_Gabelhofen_%2813%29.jpg/220px-F12019_Schloss_Gabelhofen_%2813%29.jpg"
      givenName: "Romain"
      familyName: "Grosjean"
      dateOfBirth: "17-04-1986"
      nationality: "French"
      salary: "2.5mil"
      podiums: 10
      wins: 0
    ) {
      driverId
    }

    d19: CreateDriver(
      driverId: "kubica"
      permanentNumber: "11"
      code: "KUB"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg"
      givenName: "Robert"
      familyName: "Kubica"
      dateOfBirth: "07-12-1984"
      nationality: "Polish"
      salary: "1mil"
      podiums: 12
      wins: 1
    ) {
      driverId
    }

    d20: CreateDriver(
      driverId: "russel"
      permanentNumber: "63"
      code: "RUS"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2019_Formula_One_tests_Barcelona%2C_Russell_%2833376134568%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Russell_%2833376134568%29.jpg"
      givenName: "George"
      familyName: "Russel"
      dateOfBirth: "15-02-1998"
      nationality: "British"
      salary: "1mil"
      podiums: 0
      wins: 0
    ) {
      driverId
    }

    co1: CreateConstructor(
      constructorId: "mclaren"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/McLaren_logo.svg/1920px-McLaren_logo.svg.png"
      name: "McLaren"
      nationality: "British"
      chassis: "MCL34"
    ) {
      name
    }
    co2: CreateConstructor(
      constructorId: "alfa"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Alfa_Romeo_Racing_logo.jpg/220px-Alfa_Romeo_Racing_logo.jpg"
      name: "Alfa Romeo Racing"
      nationality: "Italian"
      chassis: "C38"
    ) {
      name
    }
    co3: CreateConstructor(
      constructorId: "ferrari"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Scuderia_Ferrari_Logo.svg/80px-Scuderia_Ferrari_Logo.svg.png"
      name: "Scuderia Ferrari"
      nationality: "Italian"
      chassis: "SF90"
    ) {
      name
    }
    co4: CreateConstructor(
      constructorId: "haas"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Official_Haas_F1_Team_2019_logo.png/220px-Official_Haas_F1_Team_2019_logo.png"
      name: "Haas F1 Team"
      nationality: "American"
      chassis: "VF-19"
    ) {
      name
    }
    co5: CreateConstructor(
      constructorId: "renault"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Renault_F1_Team_logo_2019.svg/220px-Renault_F1_Team_logo_2019.svg.png"
      name: "Renault"
      nationality: "French"
      chassis: "R.S.19"
    ) {
      name
    }
    co6: CreateConstructor(
      constructorId: "mercedes"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/220px-Mercedes-Benz_in_Formula_One_logo.svg.png"
      name: "Mercedes"
      nationality: "German"
      chassis: "F1 W10 EQ Power+"
    ) {
      name
    }
    co7: CreateConstructor(
      constructorId: "racing_point"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Racing_Point_F1_Team_logo_2019.png/255px-Racing_Point_F1_Team_logo_2019.png"
      name: "Racing Point"
      nationality: "British"
      chassis: "	RP19"
    ) {
      name
    }
    co8: CreateConstructor(
      constructorId: "red_bull"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Aston_Martin_Red_Bull_Racing_logo.svg/220px-Aston_Martin_Red_Bull_Racing_logo.svg.png"
      name: "Red Bull Racing"
      nationality: "Austrian"
      chassis: "RB15"
    ) {
      name
    }
    co9: CreateConstructor(
      constructorId: "toro_rosso"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Scuderia_Toro_Rosso_logo.svg/250px-Scuderia_Toro_Rosso_logo.svg.png"
      name: "Scuderia Toro Rosso"
      nationality: "Italian"
      chassis: "	Honda RA619H"
    ) {
      name
    }
    co10: CreateConstructor(
      constructorId: "williams"
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Williams_Racing_logo.svg/220px-Williams_Racing_logo.svg.png"
      name: "Williams"
      nationality: "British"
      chassis: "FW42"
    ) {
      name
    }
    ci1: CreateCircuit(
      circuitId: "albert_park"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Albert_Lake_Park_Street_Circuit_in_Melbourne%2C_Australia.svg/1920px-Albert_Lake_Park_Street_Circuit_in_Melbourne%2C_Australia.svg.png"
      circuitName: "Albert Park Grand Prix Circuit"
      length: "5.25km"
      country: "Australia"
    ) {
      circuitId
    }
    ci2: CreateCircuit(
      circuitId: "bahrain"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/250px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png"
      circuitName: "Bahrain International Circuit"
      length: "5.4km"
      country: "Bahrain"
    ) {
      circuitId
    }
    ci3: CreateCircuit(
      circuitId: "shangai"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Shanghai_International_Racing_Circuit_track_map.svg/250px-Shanghai_International_Racing_Circuit_track_map.svg.png"
      circuitName: "Shanghai International Circuit"
      length: "5.45km"
      country: "China"
    ) {
      circuitId
    }
    ci4: CreateCircuit(
      circuitId: "baku"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Baku-F1-Street-Circuit-rev1.png/300px-Baku-F1-Street-Circuit-rev1.png"
      circuitName: "Baku City Circuit"
      length: "6km"
      country: "Azerbaijan"
    ) {
      circuitId
    }
    ci5: CreateCircuit(
      circuitId: "catalunya"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Formula1_Circuit_Catalunya.svg/250px-Formula1_Circuit_Catalunya.svg.png"
      circuitName: "Circuit de Barcelona-Catalunya"
      length: "4.6km"
      country: "Spain"
    ) {
      circuitId
    }
    ci6: CreateCircuit(
      circuitId: "monaco"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Monte_Carlo_Formula_1_track_map.svg/250px-Monte_Carlo_Formula_1_track_map.svg.png"
      circuitName: "Circuit de Monaco"
      length: "3.3km"
      country: "Monaco"
    ) {
      circuitId
    }
    ci7: CreateCircuit(
      circuitId: "villeneuve"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Circuit_Gilles_Villeneuve.svg/280px-Circuit_Gilles_Villeneuve.svg.png"
      circuitName: "Circuit Gilles Villeneuve"
      length: "4.3km"
      country: "Canada"
    ) {
      circuitId
    }
    ci8: CreateCircuit(
      circuitId: "paul_ricard"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Circut_Paul_Ricard_2018_layout_map.png/250px-Circut_Paul_Ricard_2018_layout_map.png"
      circuitName: " Circuit Paul Ricard "
      length: "5.8km"
      country: "France"
    ) {
      circuitId
    }
    ci9: CreateCircuit(
      circuitId: "red_bull_ring"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Circuit_Red_Bull_Ring.svg/250px-Circuit_Red_Bull_Ring.svg.png"
      circuitName: "Red Bull Ring"
      length: "4.3km"
      country: "Austria"
    ) {
      circuitId
    }
    ci10: CreateCircuit(
      circuitId: "silverstone"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Silverstone_Circuit_2011.png/250px-Silverstone_Circuit_2011.png"
      circuitName: "Silverstone"
      length: "5.9km"
      country: "Great Britain"
    ) {
      circuitId
    }
    ci11: CreateCircuit(
      circuitId: "hockenheimring"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hockenheim2012.svg/250px-Hockenheim2012.svg.png"
      circuitName: "Hockenheimring"
      length: "4.57km"
      country: "Germany"
    ) {
      circuitId
    }
    ci12: CreateCircuit(
      circuitId: "hungaroring"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hungaroring.svg/260px-Hungaroring.svg.png"
      circuitName: "Hungaroring"
      length: "4.4km"
      country: "Hungary"
    ) {
      circuitId
    }
    ci13: CreateCircuit(
      circuitId: "spa"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spa-Francorchamps_of_Belgium.svg/260px-Spa-Francorchamps_of_Belgium.svg.png"
      circuitName: "Circuit de Spa-Francorchamps"
      length: "7km"
      country: "Belgium"
    ) {
      circuitId
    }
    ci14: CreateCircuit(
      circuitId: "monza"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Monza_track_map.svg/260px-Monza_track_map.svg.png"
      circuitName: "Autodromo Nazionale di Monza"
      length: "5.8km"
      country: "Italy"
    ) {
      circuitId
    }
    ci15: CreateCircuit(
      circuitId: "marina_bay"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Marina_bay_circuit.svg/240px-Marina_bay_circuit.svg.png"
      circuitName: "Marina Bay Street Circuit"
      length: "5km"
      country: "Singapore"
    ) {
      circuitId
    }
    ci16: CreateCircuit(
      circuitId: "sochi"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Circuit_Sochi.svg/250px-Circuit_Sochi.svg.png"
      circuitName: "Sochi Autodrom"
      length: "5.85km"
      country: "Russia"
    ) {
      circuitId
    }
    ci17: CreateCircuit(
      circuitId: "suzuka"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Suzuka_circuit_map--2005.svg/260px-Suzuka_circuit_map--2005.svg.png"
      circuitName: "Suzuka International Racing Course"
      length: "5.8km"
      country: "Japan"
    ) {
      circuitId
    }
    ci18: CreateCircuit(
      circuitId: "hermanos_rodriguez"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_2015.svg/250px-Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_2015.svg.png"
      circuitName: "Autódromo Hermanos Rodríguez"
      length: "5.25km"
      country: "Mexico"
    ) {
      circuitId
    }
    ci19: CreateCircuit(
      circuitId: "cota"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_circuit.svg/250px-Austin_circuit.svg.png"
      circuitName: "Circuit of the Americas"
      length: "5.5km"
      country: "USA"
    ) {
      circuitId
    }
    ci20: CreateCircuit(
      circuitId: "interlagos"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Circuit_Interlagos.svg/260px-Circuit_Interlagos.svg.png"
      circuitName: "Autódromo José Carlos Pace"
      length: "4.3km"
      country: "Brazil"
    ) {
      circuitId
    }
    ci21: CreateCircuit(
      circuitId: "yas_marina"
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Circuit_Yas-Island.svg/250px-Circuit_Yas-Island.svg.png"
      circuitName: "Yas Marina Circuit"
      length: "5.5km"
      country: "UAE"
    ) {
      circuitId
    }
    a1: AddFormulaOneSeasons(from: { name: "Formula 1" }, to: { year: 2019 }) {
      from {
        name
      }
      to {
        year
      }
    }
    b1: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "mclaren" }
      data: { points: "145" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b2: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "mercedes" }
      data: { points: "739" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b3: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "ferrari" }
      data: { points: "504" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b4: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "red_bull" }
      data: { points: "417" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b5: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "renault" }
      data: { points: "91" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b6: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "toro_rosso" }
      data: { points: "85" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b7: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "racing_point" }
      data: { points: "73" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b8: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "alfa" }
      data: { points: "57" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b9: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "haas" }
      data: { points: "28" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }
    b10: AddSeasonConstructors(
      from: { year: 2019 }
      to: { constructorId: "williams" }
      data: { points: "1" }
    ) {
      from {
        year
      }
      to {
        constructorId
      }
    }

    o1: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "albert_park" }
      data: { DNF: "3", DATE: "17-03-2019" }
    ) {
      from {
        year
      }
    }

    o2: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "bahrain" }
      data: { DNF: "2", DATE: "31-03-2019" }
    ) {
      from {
        year
      }
    }

    o3: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "shangai" }
      data: { DNF: "0", DATE: "14-04-2019" }
    ) {
      from {
        year
      }
    }

    o4: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "baku" }
      data: { DNF: "5", DATE: "28-04-2019" }
    ) {
      from {
        year
      }
    }

    o5: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "catalunya" }
      data: { DNF: "0", DATE: "12-05-2019" }
    ) {
      from {
        year
      }
    }

    o6: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "monaco" }
      data: { DNF: "3", DATE: "26-05-2019" }
    ) {
      from {
        year
      }
    }

    o7: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "villeneuve" }
      data: { DNF: "3", DATE: "09-06-2019" }
    ) {
      from {
        year
      }
    }

    o8: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "paul_ricard" }
      data: { DNF: "0", DATE: "23-06-2019" }
    ) {
      from {
        year
      }
    }

    o9: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "red_bull_ring" }
      data: { DNF: "0", DATE: "30-06-2019" }
    ) {
      from {
        year
      }
    }

    o10: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "silverstone" }
      data: { DNF: "0", DATE: "14-07-2019" }
    ) {
      from {
        year
      }
    }

    o11: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "hockenheimring" }
      data: { DNF: "0", DATE: "28-07-2019" }
    ) {
      from {
        year
      }
    }

    o12: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "hungaroring" }
      data: { DNF: "0", DATE: "04-08-2019" }
    ) {
      from {
        year
      }
    }

    o13: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "spa" }
      data: { DNF: "0", DATE: "01-09-2019" }
    ) {
      from {
        year
      }
    }

    o14: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "monza" }
      data: { DNF: "3", DATE: "08-09-2019" }
    ) {
      from {
        year
      }
    }

    o15: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "marina_bay" }
      data: { DNF: "3", DATE: "22-09-2019" }
    ) {
      from {
        year
      }
    }

    o16: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "sochi" }
      data: { DNF: "3", DATE: "29-09-2019" }
    ) {
      from {
        year
      }
    }

    o17: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "suzuka" }
      data: { DNF: "3", DATE: "13-10-2019" }
    ) {
      from {
        year
      }
    }

    o18: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "hermanos_rodriguez" }
      data: { DNF: "0", DATE: "27-10-2019" }
    ) {
      from {
        year
      }
    }

    o19: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "cota" }
      data: { DNF: "5", DATE: "03-11-2019" }
    ) {
      from {
        year
      }
    }

    o20: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "interlagos" }
      data: { DNF: "5", DATE: "17-11-2019" }
    ) {
      from {
        year
      }
    }

    o21: AddSeasonCircuits(
      from: { year: 2019 }
      to: { circuitId: "yas_marina" }
      data: { DNF: "3", DATE: "01-12-2019" }
    ) {
      from {
        year
      }
    }
    c1: AddConstructorDrivers(
      from: { constructorId: "ferrari" }
      to: { driverId: "vettel" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e1: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "vettel" }
      data: { points: "240" }
    ) {
      points
    }
    c2: AddConstructorDrivers(
      from: { constructorId: "ferrari" }
      to: { driverId: "leclerc" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e2: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "leclerc" }
      data: { points: "264" }
    ) {
      points
    }
    c3: AddConstructorDrivers(
      from: { constructorId: "mercedes" }
      to: { driverId: "hamilton" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e3: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "hamilton" }
      data: { points: "413" }
    ) {
      points
    }
    c4: AddConstructorDrivers(
      from: { constructorId: "mercedes" }
      to: { driverId: "bottas" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e4: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "bottas" }
      data: { points: "326" }
    ) {
      points
    }
    c5: AddConstructorDrivers(
      from: { constructorId: "mclaren" }
      to: { driverId: "norris" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e5: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "norris" }
      data: { points: "49" }
    ) {
      points
    }
    c6: AddConstructorDrivers(
      from: { constructorId: "mclaren" }
      to: { driverId: "sainz" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e6: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "sainz" }
      data: { points: "96" }
    ) {
      points
    }
    c7: AddConstructorDrivers(
      from: { constructorId: "red_bull" }
      to: { driverId: "verstapen" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e7: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "verstapen" }
      data: { points: "278" }
    ) {
      points
    }
    c8: AddConstructorDrivers(
      from: { constructorId: "red_bull" }
      to: { driverId: "albon" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e8: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "albon" }
      data: { points: "92" }
    ) {
      points
    }
    c9: AddConstructorDrivers(
      from: { constructorId: "renault" }
      to: { driverId: "ricciardo" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e9: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "ricciardo" }
      data: { points: "53" }
    ) {
      points
    }
    c10: AddConstructorDrivers(
      from: { constructorId: "renault" }
      to: { driverId: "hulkenberg" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e10: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "hulkenberg" }
      data: { points: "37" }
    ) {
      points
    }
    c11: AddConstructorDrivers(
      from: { constructorId: "toro_rosso" }
      to: { driverId: "gasly" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e11: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "gasly" }
      data: { points: "95" }
    ) {
      points
    }
    c12: AddConstructorDrivers(
      from: { constructorId: "toro_rosso" }
      to: { driverId: "kvyat" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e12: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "kvyat" }
      data: { points: "37" }
    ) {
      points
    }
    c13: AddConstructorDrivers(
      from: { constructorId: "racing_point" }
      to: { driverId: "stroll" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e13: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "stroll" }
      data: { points: "21" }
    ) {
      points
    }
    c14: AddConstructorDrivers(
      from: { constructorId: "racing_point" }
      to: { driverId: "perez" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e14: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "perez" }
      data: { points: "52" }
    ) {
      points
    }
    c15: AddConstructorDrivers(
      from: { constructorId: "alfa" }
      to: { driverId: "raikonen" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e15: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "raikonen" }
      data: { points: "43" }
    ) {
      points
    }
    c16: AddConstructorDrivers(
      from: { constructorId: "alfa" }
      to: { driverId: "giovinazzi" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e16: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "giovinazzi" }
      data: { points: "14" }
    ) {
      points
    }
    c17: AddConstructorDrivers(
      from: { constructorId: "haas" }
      to: { driverId: "grosjean" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e17: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "grosjean" }
      data: { points: "8" }
    ) {
      points
    }
    c18: AddConstructorDrivers(
      from: { constructorId: "haas" }
      to: { driverId: "magnusen" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e18: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "magnusen" }
      data: { points: "20" }
    ) {
      points
    }
    c19: AddConstructorDrivers(
      from: { constructorId: "williams" }
      to: { driverId: "kubica" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e19: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "kubica" }
      data: { points: "1" }
    ) {
      points
    }
    c20: AddConstructorDrivers(
      from: { constructorId: "williams" }
      to: { driverId: "russel" }
    ) {
      from {
        constructorId
      }
      to {
        driverId
      }
    }
    e20: AddSeasonDrivers(
      from: { year: 2019 }
      to: { driverId: "russel" }
      data: { points: "0" }
    ) {
      points
    }
    k1: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "vettel" }
      data: { position: "1" }
    ) {
      position
    }
    k2: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "leclerc" }
      data: { position: "2" }
    ) {
      position
    }
    k3: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "hamilton" }
      data: { position: "3" }
    ) {
      position
    }
    k4: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "bottas" }
      data: { position: "4" }
    ) {
      position
    }
    k5: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "verstapen" }
      data: { position: "5" }
    ) {
      position
    }
    k6: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "albon" }
      data: { position: "6" }
    ) {
      position
    }
    k7: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "sainz" }
      data: { position: "7" }
    ) {
      position
    }
    k8: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "gasly" }
      data: { position: "8" }
    ) {
      position
    }
    k9: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "ricciardo" }
      data: { position: "9" }
    ) {
      position
    }
    k10: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "stroll" }
      data: { position: "10" }
    ) {
      position
    }
    k11: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "perez" }
      data: { position: "11" }
    ) {
      position
    }
    k12: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "norris" }
      data: { position: "12" }
    ) {
      position
    }
    k13: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "raikonen" }
      data: { position: "13" }
    ) {
      position
    }
    k14: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "kvyat" }
      data: { position: "14" }
    ) {
      position
    }
    k15: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "hulkenberg" }
      data: { position: "15" }
    ) {
      position
    }
    k16: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "magnusen" }
      data: { position: "16" }
    ) {
      position
    }
    k17: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "giovinazzi" }
      data: { position: "17" }
    ) {
      position
    }
    k18: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "grosjean" }
      data: { position: "18" }
    ) {
      position
    }
    k19: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "kubica" }
      data: { position: "19" }
    ) {
      position
    }
    k20: AddDriverFinished_race(
      to: { circuitId: "albert_park" }
      from: { driverId: "russel" }
      data: { position: "20" }
    ) {
      position
    }
    v1: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "vettel" }
      data: { position: "1" }
    ) {
      position
    }
    v2: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "leclerc" }
      data: { position: "2" }
    ) {
      position
    }
    v3: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "hamilton" }
      data: { position: "3" }
    ) {
      position
    }
    v4: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "bottas" }
      data: { position: "4" }
    ) {
      position
    }
    v5: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "verstapen" }
      data: { position: "5" }
    ) {
      position
    }
    v6: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "albon" }
      data: { position: "6" }
    ) {
      position
    }
    v7: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "sainz" }
      data: { position: "7" }
    ) {
      position
    }
    v8: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "gasly" }
      data: { position: "8" }
    ) {
      position
    }
    v9: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "ricciardo" }
      data: { position: "9" }
    ) {
      position
    }
    v10: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "stroll" }
      data: { position: "10" }
    ) {
      position
    }
    v11: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "perez" }
      data: { position: "11" }
    ) {
      position
    }
    v12: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "norris" }
      data: { position: "12" }
    ) {
      position
    }
    v13: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "raikonen" }
      data: { position: "13" }
    ) {
      position
    }
    v14: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "kvyat" }
      data: { position: "14" }
    ) {
      position
    }
    v15: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "hulkenberg" }
      data: { position: "15" }
    ) {
      position
    }
    v16: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "magnusen" }
      data: { position: "16" }
    ) {
      position
    }
    v17: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "giovinazzi" }
      data: { position: "17" }
    ) {
      position
    }
    v18: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "grosjean" }
      data: { position: "18" }
    ) {
      position
    }
    v19: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "kubica" }
      data: { position: "19" }
    ) {
      position
    }
    v20: AddDriverFinished_race(
      to: { circuitId: "shangai" }
      from: { driverId: "russel" }
      data: { position: "20" }
    ) {
      position
    }
  }
`;
