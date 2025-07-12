// File: Ajackus-employee-directory/js/app.js



// 🌙 Add a floating button for dark/light mode toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.id = "darkModeToggle";
darkModeBtn.innerHTML = "🌙";
darkModeBtn.title = "Toggle dark/light mode";

// Style the dark mode toggle button
darkModeBtn.style.position = "fixed";
darkModeBtn.style.top = "16px";
darkModeBtn.style.right = "16px";
darkModeBtn.style.zIndex = "1000";
darkModeBtn.style.fontSize = "20px";
darkModeBtn.style.padding = "8px 12px";
darkModeBtn.style.borderRadius = "20px";
darkModeBtn.style.border = "none";
darkModeBtn.style.background = "#00c896";
darkModeBtn.style.color = "#fff";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
document.body.appendChild(darkModeBtn);

// Toggle dark mode class and icon
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 📄 Initial setup
let currentPage = 1;
let itemsPerPage = 10;
let filteredEmployees = [...employees]; // Copy of all employees for filtering

// 🔗 DOM element references
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

// 🔁 Render employee cards on the page
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

  // Update pagination status
  pageInfo.textContent = `Page ${currentPage}`;
  pageStatus.textContent = `Showing ${filteredEmployees.length} employees`;
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = end >= filteredEmployees.length;
}

// 🔍 Apply filters from inputs and dropdowns
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

  applySorting(); // Apply sort on filtered results
  currentPage = 1; // Reset to first page
  renderEmployees(); // Render new results
}

// ↕️ Sort the filtered employee data
function applySorting() {
  const sortBy = sortBySelect.value;
  const sortOrder = sortOrderSelect.value;

  filteredEmployees.sort((a, b) => {
    let comp = a[sortBy].localeCompare(b[sortBy]);
    return sortOrder === "desc" ? -comp : comp;
  });
}

// 📋 Populate department and role dropdown filters
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

// ✅ Show toast message
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2500);
}

// ➕ Open modal for adding employee
addBtn.addEventListener("click", () => {
  formTitle.textContent = "Add Employee";
  form.reset();
  idField.value = "";
  modal.classList.remove("hidden");
});

// ❌ Close modal on cancel
cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));

// 💾 Submit form (Add or Edit employee)
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

  if (!data.firstName || !data.lastName || !data.email || !data.department || !data.role) {
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

// ✏️ Edit existing employee
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

// 🗑 Delete employee from list
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

// 🔁 Event listeners for filters, search, sort, pagination
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

sortBySelect.addEventListener("change", applyFilters);
sortOrderSelect.addEventListener("change", applyFilters);
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

// 🚀 Initial function calls
populateDropdowns();
applyFilters();
