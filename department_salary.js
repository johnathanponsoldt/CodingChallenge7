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
   