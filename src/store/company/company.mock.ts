import { Company } from "./company.slice";

const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'ABC Corporation',
    employeeCount: 4,
    address: '123 Main Street',
    emoloyees: [
      {
        "id": 0,
        "firstName": "Margaret",
        "secondName": "Fulton",
        "position": "Developer"
      },
      {
        "id": 10,
        "firstName": "Daniels",
        "secondName": "Duke",
        "position": "Teacher"
      },
      {
        "id": 20,
        "firstName": "Coleman",
        "secondName": "Gutierrez",
        "position": "Developer"
      },
      {
        "id": 30,
        "firstName": "Catherine",
        "secondName": "Pollard",
        "position": "Top manager"
      },
    ]
  },
  {
    id: 2,
    name: 'XYZ Inc.',
    employeeCount: 5,
    address: '456 Elm Street',
    emoloyees: [
      {
        "id": 40,
        "firstName": "Hartman",
        "secondName": "Walton",
        "position": "Top manager"
      },
      {
        "id": 50,
        "firstName": "Irwin",
        "secondName": "Love",
        "position": "Analytic"
      },
      {
        "id": 60,
        "firstName": "Justine",
        "secondName": "Coffey",
        "position": "Teacher"
      },
      {
        "id": 70,
        "firstName": "Lina",
        "secondName": "Sandoval",
        "position": "Analytic"
      },
      {
        "id": 80,
        "firstName": "Paige",
        "secondName": "Carroll",
        "position": "Analytic"
      }
    ]
  },
  {
    id: 3,
    name: 'Smith & Co.',
    employeeCount: 14,
    address: '789 Oak Avenue',
    emoloyees: [
      {
        "id": 90,
        "firstName": "Mcleod",
        "secondName": "Ferrell",
        "position": "Tester"
      },
      {
        "id": 100,
        "firstName": "Suarez",
        "secondName": "Olson",
        "position": "Worker"
      },
      {
        "id": 110,
        "firstName": "Glenda",
        "secondName": "Ellison",
        "position": "Top manager"
      },
      {
        "id": 120,
        "firstName": "Melba",
        "secondName": "Sweet",
        "position": "Manager"
      },
      {
        "id": 130,
        "firstName": "Spears",
        "secondName": "Guerrero",
        "position": "Analytic"
      },
      {
        "id": 140,
        "firstName": "Pittman",
        "secondName": "Lawrence",
        "position": "Teacher"
      },
      {
        "id": 150,
        "firstName": "Farrell",
        "secondName": "Ratliff",
        "position": "Driver"
      },
      {
        "id": 160,
        "firstName": "Molina",
        "secondName": "Neal",
        "position": "Analytic"
      },
      {
        "id": 170,
        "firstName": "Wagner",
        "secondName": "James",
        "position": "Developer"
      },
      {
        "id": 180,
        "firstName": "Matthews",
        "secondName": "Deleon",
        "position": "Tester"
      },
      {
        "id": 190,
        "firstName": "Little",
        "secondName": "Christensen",
        "position": "Developer"
      },
      {
        "id": 200,
        "firstName": "Booth",
        "secondName": "Wise",
        "position": "Analytic"
      },
      {
        "id": 210,
        "firstName": "Helga",
        "secondName": "Gillespie",
        "position": "Worker"
      },
      {
        "id": 220,
        "firstName": "Lavonne",
        "secondName": "Talley",
        "position": "Manager"
      }
    ]
  },
  {
    id: 4,
    name: 'Johnson Enterprises',
    employeeCount: 1500,
    address: '101 Pine Street',
    emoloyees: []
  },
  {
    id: 5,
    name: 'Miller Industries',
    employeeCount: 300,
    address: '502 Cedar Lane',
    emoloyees: [],
  },
  {
    id: 6,
    name: 'Wilson and Sons',
    employeeCount: 700,
    address: '111 Maple Road',
    emoloyees: [],
  },
  {
    id: 7,
    name: 'Anderson Group',
    employeeCount: 2000,
    address: '777 Oak Street',
    emoloyees: [],
  },
  {
    id: 8,
    name: 'Taylor Corporation',
    employeeCount: 450,
    address: '909 Elm Avenue',
    emoloyees: [],
  },
  {
    id: 9,
    name: 'Clark Industries',
    employeeCount: 800,
    address: '210 Cedar Street',
    emoloyees: [],
  },
  {
    id: 10,
    name: 'Adams & Sons',
    employeeCount: 200,
    address: '415 Oak Lane',
    emoloyees: [],
  },
  {
    id: 11,
    name: 'Baker Enterprises',
    employeeCount: 1200,
    address: '303 Elm Road',
    emoloyees: [],
  },
  {
    id: 12,
    name: 'Parker Company',
    employeeCount: 350,
    address: '707 Pine Lane',
    emoloyees: [],
  },
  {
    id: 13,
    name: 'Hayes Group',
    employeeCount: 600,
    address: '505 Maple Avenue',
    emoloyees: [],
  },
  {
    id: 14,
    name: 'Russell Incorporated',
    employeeCount: 150,
    address: '111 Cedar Street',
    emoloyees: [],
  },
];

export { mockCompanies };