export default /* GraphQL */ `
  mutation {
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
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg"
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
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg"
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
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg/220px-2019_Formula_One_tests_Barcelona%2C_Gasly_%2847200027932%29.jpg"
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
  }
`;
