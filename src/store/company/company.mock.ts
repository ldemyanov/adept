import { Company } from "./company.slice";

const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'ABC Corporation',
    employeeCount: 250,
    address: '123 Main Street',
  },
  {
    id: 2,
    name: 'XYZ Inc.',
    employeeCount: 500,
    address: '456 Elm Street',
  },
  {
    id: 3,
    name: 'Smith & Co.',
    employeeCount: 100,
    address: '789 Oak Avenue',
  },
  {
    id: 4,
    name: 'Johnson Enterprises',
    employeeCount: 1500,
    address: '101 Pine Street',
  },
  {
    id: 5,
    name: 'Miller Industries',
    employeeCount: 300,
    address: '502 Cedar Lane',
  },
  {
    id: 6,
    name: 'Wilson and Sons',
    employeeCount: 700,
    address: '111 Maple Road',
  },
  {
    id: 7,
    name: 'Anderson Group',
    employeeCount: 2000,
    address: '777 Oak Street',
  },
  {
    id: 8,
    name: 'Taylor Corporation',
    employeeCount: 450,
    address: '909 Elm Avenue',
  },
  {
    id: 9,
    name: 'Clark Industries',
    employeeCount: 800,
    address: '210 Cedar Street',
  },
  {
    id: 10,
    name: 'Adams & Sons',
    employeeCount: 200,
    address: '415 Oak Lane',
  },
  {
    id: 11,
    name: 'Baker Enterprises',
    employeeCount: 1200,
    address: '303 Elm Road',
  },
  {
    id: 12,
    name: 'Parker Company',
    employeeCount: 350,
    address: '707 Pine Lane',
  },
  {
    id: 13,
    name: 'Hayes Group',
    employeeCount: 600,
    address: '505 Maple Avenue',
  },
  {
    id: 14,
    name: 'Russell Incorporated',
    employeeCount: 150,
    address: '111 Cedar Street',
  },
  {
    id: 15,
    name: 'Edwards Corporation',
    employeeCount: 900,
    address: '999 Elm Lane',
  },
  {
    id: 16,
    name: 'Collins Industries',
    employeeCount: 400,
    address: '777 Pine Road',
  },
  {
    id: 17,
    name: 'Stewart & Sons',
    employeeCount: 1100,
    address: '123 Maple Lane',
  },
  {
    id: 18,
    name: 'Ramirez Corporation',
    employeeCount: 750,
    address: '321 Oak Street',
  },
  {
    id: 19,
    name: 'Peterson Enterprises',
    employeeCount: 950,
    address: '567 Elm Avenue',
  },
  {
    id: 20,
    name: 'Butler Industries',
    employeeCount: 550,
    address: '890 Pine Lane',
  },
  {
    id: 21,
    name: 'Diaz & Sons',
    employeeCount: 1250,
    address: '280 Cedar Street',
  },
  {
    id: 22,
    name: 'Cruz Company',
    employeeCount: 180,
    address: '671 Elm Road',
  },
  {
    id: 23,
    name: 'Gomez Corporation',
    employeeCount: 975,
    address: '345 Maple Lane',
  },
  {
    id: 24,
    name: 'Murray Group',
    employeeCount: 300,
    address: '890 Oak Avenue',
  },
  {
    id: 25,
    name: 'Powell Incorporated',
    employeeCount: 800,
    address: '123 Pine Street',
  },
  {
    id: 26,
    name: 'Jordan & Co.',
    employeeCount: 275,
    address: '555 Maple Road',
  },
  {
    id: 27,
    name: 'Wagner Enterprises',
    employeeCount: 1100,
    address: '777 Cedar Lane',
  },
  {
    id: 28,
    name: 'Simpson Industries',
    employeeCount: 425,
    address: '333 Elm Avenue',
  },
  {
    id: 29,
    name: 'Porter Corporation',
    employeeCount: 700,
    address: '500 Pine Street',
  },
  {
    id: 30,
    name: 'Reid Group',
    employeeCount: 950,
    address: '777 Maple Lane',
  },
  {
    id: 31,
    name: 'Wells Incorporated',
    employeeCount: 375,
    address: '111 Oak Road',
  },
  {
    id: 32,
    name: 'Larson & Sons',
    employeeCount: 825,
    address: '999 Elm Lane',
  },
  {
    id: 33,
    name: 'Smith & Co. Bands',
    employeeCount: 200,
    address: '789 Oak Avenue',
  },
  {
    id: 34,
    name: 'Johnson Enterprises',
    employeeCount: 300,
    address: '101 Pine Street',
  },
  {
    id: 35,
    name: 'Williams Company',
    employeeCount: 350,
    address: '502 Cedar Lane',
  },
  {
    id: 36,
    name: 'Brown and Sons',
    employeeCount: 400,
    address: '111 Maple Road',
  },
  {
    id: 37,
    name: 'Jones Group',
    employeeCount: 250,
    address: '777 Oak Street',
  },
  {
    id: 38,
    name: 'Davis Corporation',
    employeeCount: 100,
    address: '808 Elm Street',
  },
  {
    id: 39,
    name: 'Garcia Holdings',
    employeeCount: 600,
    address: '303 Cedar Avenue',
  },
  {
    id: 40,
    name: 'Rodriguez Corporation',
    employeeCount: 450,
    address: '909 Pine Lane',
  },
  {
    id: 41,
    name: 'Wilson Group',
    employeeCount: 150,
    address: '234 Oak Road',
  },
  {
    id: 42,
    name: 'Martinez Solutions Redgars',
    employeeCount: 700,
    address: '678 Maple Avenue',
  },
  {
    id: 43,
    name: 'Martinez Solutions',
    employeeCount: 700,
    address: '690 Maple Avenue',
  },
  {
    id: 44,
    name: 'Clark and Sons',
    employeeCount: 250,
    address: '111 Elm Lane',
  },
  {
    id: 45,
    name: 'White Corporation',
    employeeCount: 200,
    address: '777 Cedar Street'
  },
  {
    id: 46,
    name: 'Lee Inc.',
    employeeCount: 350,
    address: '456 Pine Avenue'
  },
  {
    id: 47,
    name: 'Scott Holdings',
    employeeCount: 180,
    address: '909 Pine Lane'
  },
  {
    id: 48,
    name: 'King Industries',
    employeeCount: 300,
    address: '234 Oak Road'
  },
  {
    id: 49,
    name: 'Wright Company',
    employeeCount: 430,
    address: '678 Maple Avenue'
  },
  {
    id: 50,
    name: 'Lopez Group',
    employeeCount: 540,
    address: '111 Elm Lane'
  }
];

export { mockCompanies };