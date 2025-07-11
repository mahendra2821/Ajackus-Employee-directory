// const employees = [
//   { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "HR", role: "Manager" },
//   { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "IT", role: "Developer" },
//   { id: 3, firstName: "David", lastName: "Lee", email: "david@example.com", department: "Finance", role: "Analyst" },
//   { id: 4, firstName: "Priya", lastName: "Reddy", email: "priya@example.com", department: "Marketing", role: "Designer" },
//   { id: 5, firstName: "Mahendra", lastName: "Babu", email: "mahendra@example.com", department: "Product", role: "Lead" }
// ];



const employees = [
  {
    id: 1,
    firstName: "Amy",
    lastName: "Thomas",
    email: "amy.thomas@company.com",
    department: "Sales",
    role: "Sales Manager"
  },
  {
    id: 2,
    firstName: "Chris",
    lastName: "Anderson",
    email: "chris.anderson@company.com",
    department: "Marketing",
    role: "Marketing Manager"
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@company.com",
    department: "Engineering",
    role: "Frontend Developer"
  },
  {
    id: 4,
    firstName: "Sophia",
    lastName: "Wilson",
    email: "sophia.wilson@company.com",
    department: "Engineering",
    role: "Backend Developer"
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@company.com",
    department: "Finance",
    role: "Financial Analyst"
  },
  {
    id: 6,
    firstName: "Liam",
    lastName: "Walker",
    email: "liam.walker@company.com",
    department: "HR",
    role: "HR Specialist"
  },
  {
    id: 7,
    firstName: "Olivia",
    lastName: "Martin",
    email: "olivia.martin@company.com",
    department: "Engineering",
    role: "DevOps Engineer"
  },
  {
    id: 8,
    firstName: "Noah",
    lastName: "Davis",
    email: "noah.davis@company.com",
    department: "Content",
    role: "Content Creator"
  },
  {
    id: 9,
    firstName: "Ava",
    lastName: "Taylor",
    email: "ava.taylor@company.com",
    department: "Recruitment",
    role: "Recruiter"
  },
  {
    id: 10,
    firstName: "William",
    lastName: "White",
    email: "william.white@company.com",
    department: "Sales",
    role: "Sales Executive"
  },
  {
    id: 11,
    firstName: "Mia",
    lastName: "Moore",
    email: "mia.moore@company.com",
    department: "Design",
    role: "UI/UX Designer"
  }

  , 
  // Add below to your employees array in data.js
{
  id: 12,
  firstName: "Ethan",
  lastName: "Clark",
  email: "ethan.clark@company.com",
  department: "Engineering",
  role: "Fullstack Developer"
},
{
  id: 13,
  firstName: "Charlotte",
  lastName: "Hall",
  email: "charlotte.hall@company.com",
  department: "Design",
  role: "Graphic Designer"
},
{
  id: 14,
  firstName: "Benjamin",
  lastName: "Young",
  email: "benjamin.young@company.com",
  department: "IT",
  role: "IT Support"
},
{
  id: 15,
  firstName: "Ella",
  lastName: "King",
  email: "ella.king@company.com",
  department: "Finance",
  role: "Accountant"
},
{
  id: 16,
  firstName: "Henry",
  lastName: "Wright",
  email: "henry.wright@company.com",
  department: "Marketing",
  role: "Content Strategist"
},
{
  id: 17,
  firstName: "Grace",
  lastName: "Green",
  email: "grace.green@company.com",
  department: "HR",
  role: "HR Manager"
},
{
  id: 18,
  firstName: "Lucas",
  lastName: "Baker",
  email: "lucas.baker@company.com",
  department: "Engineering",
  role: "Software Engineer"
},
{
  id: 19,
  firstName: "Harper",
  lastName: "Adams",
  email: "harper.adams@company.com",
  department: "Recruitment",
  role: "Recruitment Lead"
},
{
  id: 20,
  firstName: "Jack",
  lastName: "Nelson",
  email: "jack.nelson@company.com",
  department: "Sales",
  role: "Sales Associate"
},
{
  id: 21,
  firstName: "Avery",
  lastName: "Carter",
  email: "avery.carter@company.com",
  department: "Content",
  role: "Copywriter"
},
{
  id: 22,
  firstName: "Samuel",
  lastName: "Mitchell",
  email: "samuel.mitchell@company.com",
  department: "IT",
  role: "Network Engineer"
},
{
  id: 23,
  firstName: "Scarlett",
  lastName: "Perez",
  email: "scarlett.perez@company.com",
  department: "Design",
  role: "Product Designer"
},
{
  id: 24,
  firstName: "Mason",
  lastName: "Roberts",
  email: "mason.roberts@company.com",
  department: "Engineering",
  role: "QA Engineer"
},
{
  id: 25,
  firstName: "Emily",
  lastName: "Turner",
  email: "emily.turner@company.com",
  department: "Finance",
  role: "Finance Manager"
},
{
  id: 26,
  firstName: "Logan",
  lastName: "Phillips",
  email: "logan.phillips@company.com",
  department: "Marketing",
  role: "SEO Specialist"
}
];

const departments = [
  { id: 1, name: "Sales" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Engineering" },
  { id: 4, name: "Finance" },
  { id: 5, name: "HR" },
  { id: 6, name: "Content" },
  { id: 7, name: "Recruitment" },
  { id: 8, name: "Design" }
];
const roles = [
  { id: 1, name: "Sales Manager" },
  { id: 2, name: "Marketing Manager" },
  { id: 3, name: "Frontend Developer" },
  { id: 4, name: "Backend Developer" },
  { id: 5, name: "Financial Analyst" },
  { id: 6, name: "HR Specialist" },
  { id: 7, name: "DevOps Engineer" },
  { id: 8, name: "Content Creator" },
  { id: 9, name: "Recruiter" },
  { id: 10, name: "Sales Executive" },
  { id: 11, name: "UI/UX Designer" }
];
// Functions to manipulate the mock data
// This file contains mock data for an employee directory application.
// It includes arrays of employees, departments, and roles, along with functions to manipulate this data        


// such as adding, updating, deleting, and retrieving employees, departments, and roles.
// The data is structured to allow for easy access and manipulation, making it suitable for use in
// a frontend application or for testing purposes in a backend application.
// The functions provided allow for operations like getting an employee by ID, filtering employees by department or role,
// and managing the lists of departments and roles.
// This mock data can be used in development to simulate a real database without needing to set up a backend server.


// The data structure is designed to be easily extensible, allowing for the addition of new employees, departments, or roles
// without significant changes to the existing code.        
// The functions are implemented in a way that they can be easily tested and integrated into a larger application.
// This mock data can be used in conjunction with a frontend framework like React or Vue.js to build a user interface
// that interacts with the employee directory, providing features like searching, filtering, and displaying employee details
// in a user-friendly manner.
// The mock data can also be used in unit tests to verify the functionality of the application without relying on a real database.
// This allows for faster development cycles and easier debugging, as developers can focus on the frontend logic
// without needing to set up a backend server or database.
// The structure of the data is kept simple to ensure that it is easy to understand and modify,
// making it suitable for both beginners and experienced developers.
// The mock data can be easily replaced with real data from a database or API in a production environment,
// allowing for a smooth transition from development to production. 
// Overall, this mock data serves as a foundation for building an employee directory application,
// providing a clear and organized way to manage employee information, departments, and roles.
// It can be used as a starting point for building more complex features like employee search,
// department management, and role assignments, making it a versatile tool for developers working on employee directory
// applications.
// The mock data can also be used to demonstrate various frontend features,
// such as displaying employee lists, filtering by department or role, and showing detailed employee profiles.
// This makes it a valuable resource for learning and experimenting with frontend development techniques.
// The functions provided can be easily adapted to work with real data sources,
// such as fetching data from a REST API or GraphQL endpoint, allowing for a seamless integration
// with backend services in a full-stack application.
// The mock data can also be used to create a prototype of the employee directory application,
// allowing stakeholders to visualize the application before it is fully developed.
// This can help in gathering feedback and making necessary adjustments to the design and functionality

// before investing significant time in development.
// The simplicity of the data structure makes it easy to understand and modify,
// making it suitable for educational purposes as well.
// It can be used in tutorials or workshops to teach concepts related to data management,   