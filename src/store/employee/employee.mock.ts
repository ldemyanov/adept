import { Employee } from "./employee.slice";

const mockEmployes: Employee[] = [
  {
    id: "1",
    firstName: "Margaret",
    lastName: "Fulton",
    position: "Developer",
    companyId: "1"
  },
  {
    id: "10",
    firstName: "Daniels",
    lastName: "Duke",
    position: "Teacher",
    companyId: "1"
  },
  {
    id: "20",
    firstName: "Coleman",
    lastName: "Gutierrez",
    position: "Developer",
    companyId: "1"
  },
  {
    id: "30z",
    firstName: "Catherine",
    lastName: "Pollard",
    position: "Top manager",
    companyId: "1"
  },
  {
    id: "40z",
    firstName: "Hartman",
    lastName: "Walton",
    position: "Top manager",
    companyId: "2"
  },
  {
    id: "50z",
    firstName: "Irwin",
    lastName: "Love",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "60z",
    firstName: "Justine",
    lastName: "Coffey",
    position: "Teacher",
    companyId: "2"
  },

  {
    id: "301h",
    firstName: "Catherine",
    lastName: "Pollardextra",
    position: "Top manager",
    companyId: "1"
  },
  {
    id: "401h",
    firstName: "Hartman",
    lastName: "Waltonextra",
    position: "Top manager",
    companyId: "2"
  },
  {
    id: "501h",
    firstName: "Irwin",
    lastName: "Loveextra",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "601h",
    firstName: "Justine",
    lastName: "Coffeyextra",
    position: "Teacher",
    companyId: "2"
  },
  {
    id: "301g",
    firstName: "Catherine",
    lastName: "Pollardextra",
    position: "Top manager",
    companyId: "1"
  },
  {
    id: "401g",
    firstName: "Hartman",
    lastName: "Waltonextra",
    position: "Top manager",
    companyId: "2"
  },
  {
    id: "501g",
    firstName: "Irwin",
    lastName: "Love",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "601g",
    firstName: "Justine",
    lastName: "Coffey",
    position: "Teacher",
    companyId: "2"
  },
  {
    id: "301а",
    firstName: "Catherine",
    lastName: "Pollard",
    position: "Top manager",
    companyId: "1"
  },
  {
    id: "401а",
    firstName: "Hartman",
    lastName: "Walton",
    position: "Top manager",
    companyId: "2"
  },
  {
    id: "501а",
    firstName: "Irwin",
    lastName: "Love",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "601а",
    firstName: "Justine",
    lastName: "Coffey",
    position: "Teacher",
    companyId: "2"
  },


  {
    id: "701",
    firstName: "Lina",
    lastName: "Sandoval",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "801",
    firstName: "Paige",
    lastName: "Carroll",
    position: "Analytic",
    companyId: "2"
  },
  {
    id: "90",
    firstName: "Mcleod",
    lastName: "Ferrell",
    position: "Tester",
    companyId: "3"
  },
  {
    id: "100",
    firstName: "Suarez",
    lastName: "Olson",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "110",
    firstName: "Glenda",
    lastName: "Ellison",
    position: "Top manager",
    companyId: "3"
  },
  {
    id: "120",
    firstName: "Melba",
    lastName: "Sweet",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "130",
    firstName: "Spears",
    lastName: "Guerrero",
    position: "Analytic",
    companyId: "3"
  },
  {
    id: "140",
    firstName: "Pittman",
    lastName: "Lawrence",
    position: "Teacher",
    companyId: "3"
  },
  {
    id: "150",
    firstName: "Farrell",
    lastName: "Ratliff",
    position: "Driver",
    companyId: "3"
  },
  {
    id: "160",
    firstName: "Molina",
    lastName: "Neal",
    position: "Analytic",
    companyId: "3"
  },
  {
    id: "170",
    firstName: "Wagner",
    lastName: "James",
    position: "Developer",
    companyId: "3"
  },
  {
    id: "180",
    firstName: "Matthews",
    lastName: "Deleon",
    position: "Tester",
    companyId: "3"
  },
  {
    id: "190",
    firstName: "Little",
    lastName: "Christensen",
    position: "Developer",
    companyId: "3"
  },
  {
    id: "200",
    firstName: "Booth",
    lastName: "Wise",
    position: "Analytic",
    companyId: "3"
  },
  {
    id: "210",
    firstName: "Helga",
    lastName: "Gillespie",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "220",
    firstName: "Lavonne",
    lastName: "Talley",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "230",
    firstName: "Klaus",
    lastName: "Schneider",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "240",
    firstName: "Marina",
    lastName: "Lopez",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "310",
    firstName: "Hans",
    lastName: "Mueller",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "320",
    firstName: "Elena",
    lastName: "Santos",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "330",
    firstName: "Victor",
    lastName: "Garcia",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "340",
    firstName: "Olga",
    lastName: "Kovalenko",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "350",
    firstName: "Mohammed",
    lastName: "Al-Farouk",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "360",
    firstName: "Lara",
    lastName: "Martinez",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "370",
    firstName: "Pavel",
    lastName: "Sokolov",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "380",
    firstName: "Natasha",
    lastName: "Ivanova",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "490",
    firstName: "Ivan",
    lastName: "Petrov",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "500",
    firstName: "Anastasia",
    lastName: "Smirnova",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "510",
    firstName: "Yuki",
    lastName: "Tanaka",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "520",
    firstName: "Ravi",
    lastName: "Gupta",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "530",
    firstName: "Ji-hyun",
    lastName: "Kim",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "540",
    firstName: "Elena",
    lastName: "Smirnova",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "550",
    firstName: "Abdullah",
    lastName: "Al-Mansour",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "560",
    firstName: "Zhang",
    lastName: "Wei",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "570",
    firstName: "Takuya",
    lastName: "Yamamoto",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "580",
    firstName: "Svetlana",
    lastName: "Kuznetsova",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "590",
    firstName: "Alexei",
    lastName: "Smirnov",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "600",
    firstName: "Sophia",
    lastName: "Papadopoulos",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "610",
    firstName: "Miguel",
    lastName: "Rodriguez",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "620",
    firstName: "Alessia",
    lastName: "Ricci",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "630",
    firstName: "Chen",
    lastName: "Li",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "640",
    firstName: "Hiroshi",
    lastName: "Sato",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "650",
    firstName: "Ingrid",
    lastName: "Andersson",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "660",
    firstName: "Raul",
    lastName: "Gonzalez",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "670",
    firstName: "Elena",
    lastName: "Ivanova",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "680",
    firstName: "Youssef",
    lastName: "Abdullah",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "690",
    firstName: "Marcel",
    lastName: "Dupont",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "700",
    firstName: "Celine",
    lastName: "Lefevre",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "710",
    firstName: "Pietro",
    lastName: "Rossi",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "720",
    firstName: "Chihiro",
    lastName: "Yamamoto",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "730",
    firstName: "Anastasios",
    lastName: "Papadopoulos",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "740",
    firstName: "Eun-ji",
    lastName: "Kim",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "750",
    firstName: "Gustavo",
    lastName: "Hernandez",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "760",
    firstName: "Natalia",
    lastName: "Volkova",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "770",
    firstName: "Jun",
    lastName: "Tanaka",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "780",
    firstName: "Elena",
    lastName: "Petrova",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "790",
    firstName: "Javier",
    lastName: "Garcia",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "800",
    firstName: "Eva",
    lastName: "Hernandez",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "810",
    firstName: "Mateo",
    lastName: "Moreno",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "820",
    firstName: "Isabella",
    lastName: "Romano",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "830",
    firstName: "Seung-hyun",
    lastName: "Park",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "840",
    firstName: "Viktor",
    lastName: "Ivanov",
    position: "Analyst",
    companyId: "3"
  },
  {
    id: "850",
    firstName: "Leila",
    lastName: "Abdullah",
    position: "Worker",
    companyId: "3"
  },
  {
    id: "860",
    firstName: "Yasmina",
    lastName: "Kadir",
    position: "Manager",
    companyId: "3"
  },
  {
    id: "870",
    firstName: "Makoto",
    lastName: "Yamamoto",
    position: "Engineer",
    companyId: "3"
  },
  {
    id: "880",
    firstName: "Sofia",
    lastName: "Kuznetsova",
    position: "Analyst",
    companyId: "3"
  },
];

export { mockEmployes };