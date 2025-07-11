// let currentPage = 1;
// let itemsPerPage = 10;
// let filteredEmployees = [...employees];

// const employeeListEl = document.getElementById("employeeList");
// const searchInput = document.getElementById("searchInput");
// const sortSelect = document.getElementById("sortSelect");
// const itemsPerPageSelect = document.getElementById("itemsPerPage");
// const pageInfo = document.getElementById("pageInfo");
// const prevPage = document.getElementById("prevPage");
// const nextPage = document.getElementById("nextPage");

// const addBtn = document.getElementById("addEmployeeBtn");
// const modal = document.getElementById("employeeFormModal");
// const form = document.getElementById("employeeForm");
// const cancelBtn = document.getElementById("cancelBtn");
// const toast = document.getElementById("toast");

// const formTitle = document.getElementById("formTitle");
// const idField = document.getElementById("employeeId");
// const firstNameField = document.getElementById("firstName");
// const lastNameField = document.getElementById("lastName");
// const emailField = document.getElementById("email");
// const deptField = document.getElementById("department");
// const roleField = document.getElementById("role");

// // Render Employee Cards
// function renderEmployees() {
//   const start = (currentPage - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   const pageEmployees = filteredEmployees.slice(start, end);

//   employeeListEl.innerHTML = pageEmployees
//     .map(emp => `
//       <div class="employee-card">
//         <h3>${emp.firstName} ${emp.lastName}</h3>
//         <p>ID: ${emp.id}</p>
//         <p>Email: ${emp.email}</p>
//         <p>
//           <span class="badge dept">${emp.department}</span>
//           <span class="badge role">${emp.role}</span>
//         </p>
//         <button onclick="editEmployee(${emp.id})">✏️ Edit</button>
//         <button onclick="deleteEmployee(${emp.id})">🗑 Delete</button>
//       </div>
//     `).join("");

//   pageInfo.textContent = `Page ${currentPage}`;
//   prevPage.disabled = currentPage === 1;
//   nextPage.disabled = end >= filteredEmployees.length;
// }

// // Search
// searchInput.addEventListener("input", () => {
//   const keyword = searchInput.value.toLowerCase();
//   filteredEmployees = employees.filter(emp =>
//     `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(keyword) ||
//     emp.email.toLowerCase().includes(keyword)
//   );
//   currentPage = 1;
//   renderEmployees();
// });

// // Sort
// sortSelect.addEventListener("change", () => {
//   const sortBy = sortSelect.value;
//   if (sortBy) {
//     filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//   }
//   renderEmployees();
// });

// // Pagination
// itemsPerPageSelect.addEventListener("change", () => {
//   itemsPerPage = parseInt(itemsPerPageSelect.value);
//   currentPage = 1;
//   renderEmployees();
// });
// prevPage.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderEmployees();
//   }
// });
// nextPage.addEventListener("click", () => {
//   if ((currentPage * itemsPerPage) < filteredEmployees.length) {
//     currentPage++;
//     renderEmployees();
//   }
// });

// // Toast
// function showToast(msg) {
//   toast.textContent = msg;
//   toast.classList.remove("hidden");
//   setTimeout(() => toast.classList.add("hidden"), 2900);
// }

// // Modal Show/Hide
// addBtn.addEventListener("click", () => {
//   formTitle.textContent = "Add Employee";
//   form.reset();
//   idField.value = "";
//   modal.classList.remove("hidden");
// });
// cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));

// // Add/Edit Submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const id = idField.value;
//   const data = {
//     id: id ? parseInt(id) : Date.now(),
//     firstName: firstNameField.value.trim(),
//     lastName: lastNameField.value.trim(),
//     email: emailField.value.trim(),
//     department: deptField.value.trim(),
//     role: roleField.value.trim()
//   };

//   if (!data.firstName || !data.lastName || !data.email || !data.department || !data.role) {
//     alert("Please fill all fields");
//     return;
//   }

//   if (id) {
//     const index = employees.findIndex(emp => emp.id === data.id);
//     employees[index] = data;
//     showToast("Employee updated");
//   } else {
//     employees.push(data);
//     showToast("Employee added");
//   }

//   filteredEmployees = [...employees];
//   renderEmployees();
//   modal.classList.add("hidden");
// });

// // Edit Employee
// window.editEmployee = function(id) {
//   const emp = employees.find(emp => emp.id === id);
//   if (!emp) return;

//   formTitle.textContent = "Edit Employee";
//   idField.value = emp.id;
//   firstNameField.value = emp.firstName;
//   lastNameField.value = emp.lastName;
//   emailField.value = emp.email;
//   deptField.value = emp.department;
//   roleField.value = emp.role;

//   modal.classList.remove("hidden");
// };

// // Delete Employee
// window.deleteEmployee = function(id) {
//   if (confirm("Are you sure you want to delete this employee?")) {
//     const index = employees.findIndex(emp => emp.id === id);
//     if (index > -1) {
//       employees.splice(index, 1);
//       filteredEmployees = [...employees];
//       showToast("Employee deleted");
//       renderEmployees();
//     }
//   }
// };

// // Init
// renderEmployees();



// app.js
let currentPage = 1;
let itemsPerPage = 10;
let filteredEmployees = [...employees];

// DOM Elements
const employeeListEl = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const sortBySelect = document.getElementById("sortBy");
const sortOrderSelect = document.getElementById("sortOrder");
const itemsPerPageSelect = document.getElementById("itemsPerPage");
const pageInfo = document.getElementById("pageInfo");
const pageStatus = document.getElementById("pageStatus");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

const filterFirstName = document.getElementById("filterFirstName");
const filterDepartment = document.getElementById("filterDepartment");
const filterRole = document.getElementById("filterRole");
const clearFilters = document.getElementById("clearFilters");

const addBtn = document.getElementById("addEmployeeBtn");
const modal = document.getElementById("employeeFormModal");
const form = document.getElementById("employeeForm");
const cancelBtn = document.getElementById("cancelBtn");
const toast = document.getElementById("toast");

const formTitle = document.getElementById("formTitle");
const idField = document.getElementById("employeeId");
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const emailField = document.getElementById("email");
const deptField = document.getElementById("department");
const roleField = document.getElementById("role");




// Render Employees
function renderEmployees() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageEmployees = filteredEmployees.slice(start, end);

  employeeListEl.innerHTML = pageEmployees
    .map(
      (emp) => `
    <div class="employee-card">
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>ID: ${emp.id}</p>
      <p>Email: ${emp.email}</p>
      <p>
        <span class="badge dept">${emp.department}</span>
        <span class="badge role">${emp.role}</span>
      </p>
      <button onclick="editEmployee(${emp.id})">✏️ Edit</button>
      <button onclick="deleteEmployee(${emp.id})">🗑 Delete</button>
    </div>
  `
    )
    .join("");

  pageInfo.textContent = `Page ${currentPage}`;
  pageStatus.textContent = `Showing ${filteredEmployees.length} employees`;
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = end >= filteredEmployees.length;
}

// Filters
function applyFilters() {
  const keyword = searchInput.value.toLowerCase();
  const nameFilter = filterFirstName.value.toLowerCase();
  const deptFilter = filterDepartment.value;
  const roleFilter = filterRole.value;

  filteredEmployees = employees.filter((emp) => {
    const matchKeyword =
      `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(keyword) ||
      emp.email.toLowerCase().includes(keyword);
    const matchName = emp.firstName.toLowerCase().includes(nameFilter);
    const matchDept = deptFilter ? emp.department === deptFilter : true;
    const matchRole = roleFilter ? emp.role === roleFilter : true;
    return matchKeyword && matchName && matchDept && matchRole;
  });

  applySorting();
  currentPage = 1;
  renderEmployees();
}

// Sort
function applySorting() {
  const sortBy = sortBySelect.value;
  const sortOrder = sortOrderSelect.value;

  filteredEmployees.sort((a, b) => {
    let comp = a[sortBy].localeCompare(b[sortBy]);
    return sortOrder === "desc" ? -comp : comp;
  });
}

// Populate dropdowns dynamically
function populateDropdowns() {
  const departments = [...new Set(employees.map((e) => e.department))];
  const roles = [...new Set(employees.map((e) => e.role))];

  filterDepartment.innerHTML =
    '<option value="">All departments</option>' +
    departments.map((d) => `<option value="${d}">${d}</option>`).join("");

  filterRole.innerHTML =
    '<option value="">All roles</option>' +
    roles.map((r) => `<option value="${r}">${r}</option>`).join("");
}

// Toast
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2500);
}

// Modal
addBtn.addEventListener("click", () => {
  formTitle.textContent = "Add Employee";
  form.reset();
  idField.value = "";
  modal.classList.remove("hidden");
});
cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));

// Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = idField.value;
  const data = {
    id: id ? parseInt(id) : Date.now(),
    firstName: firstNameField.value.trim(),
    lastName: lastNameField.value.trim(),
    email: emailField.value.trim(),
    department: deptField.value.trim(),
    role: roleField.value.trim(),
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.department ||
    !data.role
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (id) {
    const index = employees.findIndex((emp) => emp.id === data.id);
    employees[index] = data;
    showToast("Employee updated");
  } else {
    employees.push(data);
    showToast("Employee added");
  }

  filteredEmployees = [...employees];
  populateDropdowns();
  applyFilters();
  modal.classList.add("hidden");
});

// Edit Employee
window.editEmployee = function (id) {
  const emp = employees.find((emp) => emp.id === id);
  if (!emp) return;

  formTitle.textContent = "Edit Employee";
  idField.value = emp.id;
  firstNameField.value = emp.firstName;
  lastNameField.value = emp.lastName;
  emailField.value = emp.email;
  deptField.value = emp.department;
  roleField.value = emp.role;

  modal.classList.remove("hidden");
};

// Delete Employee
window.deleteEmployee = function (id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index > -1) {
      employees.splice(index, 1);
      filteredEmployees = [...employees];
      showToast("Employee deleted");
      populateDropdowns();
      applyFilters();
    }
  }
};

// Event Listeners
searchInput.addEventListener("input", applyFilters);
filterFirstName.addEventListener("input", applyFilters);
filterDepartment.addEventListener("change", applyFilters);
filterRole.addEventListener("change", applyFilters);
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  filterFirstName.value = "";
  filterDepartment.value = "";
  filterRole.value = "";
  applyFilters();
});

sortBySelect.addEventListener("change", () => {
  applyFilters();
});
sortOrderSelect.addEventListener("change", () => {
  applyFilters();
});
itemsPerPageSelect.addEventListener("change", () => {
  itemsPerPage = parseInt(itemsPerPageSelect.value);
  currentPage = 1;
  renderEmployees();
});

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderEmployees();
  }
});
nextPage.addEventListener("click", () => {
  if (currentPage * itemsPerPage < filteredEmployees.length) {
    currentPage++;
    renderEmployees();
  }
});







// INIT
populateDropdowns();
applyFilters();




