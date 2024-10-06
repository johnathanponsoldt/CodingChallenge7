// Task 1: Create a Department Structure
const company = {
    departments: [
      {
        departmentName: "Engineering",
        employees: [
          {
            name: "Johnny",
            salary: 140000,
            subordinates: [
              { 
                name: "Tori", 
                salary: 100000, 
                subordinates: [] 
              },
              { 
                name: "Dexter", 
                salary: 86000, 
                subordinates: [] 
              }
            ]
          },
          {
            name: "Lebron",
            salary: 130000,
            subordinates: []
          }
        ]
      },
      {
        departmentName: "Marketing",
        employees: [
          {
            name: "Ashley",
            salary: 100000,
            subordinates: [
              { 
                name: "Fred", 
                salary: 70000, 
                subordinates: [] 
              }
            ]
          }
        ]
      }
    ]
  };
   
  // Task 2: Create a Recursive Function to Calculate Total Salary for a Department
  function calculateDepartmentSalary(department) {
    let totalSalary = 0;
function calculateEmployeeSalary(employee){
    totalSalary += employee.salary;
    if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinate => calculateEmployeeSalary(subordinate));
    }
}
department.employees.forEach(employee => calculateEmployeeSalary(employee));
return totalSalary;
  }

  // Task 3: Create a Function to Calculate the Total Salary for All Departments
  function calculateCompanySalary(company) {
    let companyTotalSalary = 0;

    company.departments.forEach(department => {
        companyTotalSalary += calculateDepartmentSalary(department);
    });
    return companyTotalSalary;
  }
  