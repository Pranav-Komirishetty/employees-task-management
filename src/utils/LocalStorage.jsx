const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@work.com",
    password: "123",
    tasks: [
      {
        taskId: 1,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve login API issue",
        taskDate: "2026-04-01",
        category: "Development",
        priority: "High",
        status: "active",
      },
      {
        taskId: 2,
        taskTitle: "Update UI",
        taskDescription: "Improve dashboard UI",
        taskDate: "2026-04-02",
        category: "Design",
        priority: "Medium",
        status: "completed",
      },
      {
        taskId: 3,
        taskTitle: "Write tests",
        taskDescription: "Unit tests for auth module",
        taskDate: "2026-04-03",
        category: "Testing",
        priority: "Low",
        status: "new",
      },
    ],
  },
  {
    id: 2,
    name: "Priya Reddy",
    email: "priya@work.com",
    password: "123",
    tasks: [
      {
        taskId: 1,
        taskTitle: "API integration",
        taskDescription: "Integrate payment API",
        taskDate: "2026-04-01",
        category: "Development",
        priority: "High",
        status: "active",
      },
      {
        taskId: 2,
        taskTitle: "Bug fixing",
        taskDescription: "Fix cart issues",
        taskDate: "2026-04-02",
        category: "Development",
        priority: "Medium",
        status: "completed",
      },
      {
        taskId: 3,
        taskTitle: "Code review",
        taskDescription: "Review team PRs",
        taskDate: "2026-04-03",
        category: "Management",
        priority: "Low",
        status: "completed",
      },
      {
        taskId: 4,
        taskTitle: "Deploy build",
        taskDescription: "Deploy staging build",
        taskDate: "2026-04-04",
        category: "DevOps",
        priority: "High",
        status: "failed",
      },
    ],
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@work.com",
    password: "123",
    tasks: [
      {
        taskId: 1,
        taskTitle: "Database optimization",
        taskDescription: "Improve query performance",
        taskDate: "2026-04-01",
        category: "Database",
        priority: "High",
        status: "active",
      },
      {
        taskId: 2,
        taskTitle: "Schema update",
        taskDescription: "Modify user schema",
        taskDate: "2026-04-02",
        category: "Database",
        priority: "Medium",
        status: "completed",
      },
      {
        taskId: 3,
        taskTitle: "Backup setup",
        taskDescription: "Automate backups",
        taskDate: "2026-04-03",
        category: "DevOps",
        priority: "Low",
        status: "new",
      },
    ],
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha@work.com",
    password: "123",
    tasks: [
      {
        taskId: 1,
        taskTitle: "Design homepage",
        taskDescription: "Create homepage layout",
        taskDate: "2026-04-01",
        category: "Design",
        priority: "High",
        status: "completed",
      },
      {
        taskId: 2,
        taskTitle: "Create icons",
        taskDescription: "Design icon set",
        taskDate: "2026-04-02",
        category: "Design",
        priority: "Low",
        status: "completed",
      },
      {
        taskId: 3,
        taskTitle: "Fix responsiveness",
        taskDescription: "Mobile UI fixes",
        taskDate: "2026-04-03",
        category: "Design",
        priority: "Medium",
        status: "active",
      },
      {
        taskId: 4,
        taskTitle: "Client feedback",
        taskDescription: "Incorporate feedback",
        taskDate: "2026-04-04",
        category: "Management",
        priority: "High",
        status: "failed",
      },
    ],
  },
  {
    id: 5,
    name: "Arjun Patel",
    email: "arjun@work.com",
    password: "123",
    tasks: [
      {
        taskId: 1,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure pipeline",
        taskDate: "2026-04-01",
        category: "DevOps",
        priority: "High",
        status: "active",
      },
      {
        taskId: 2,
        taskTitle: "Server monitoring",
        taskDescription: "Setup alerts",
        taskDate: "2026-04-02",
        category: "DevOps",
        priority: "Medium",
        status: "new",
      },
      {
        taskId: 3,
        taskTitle: "Optimize build",
        taskDescription: "Reduce build time",
        taskDate: "2026-04-03",
        category: "DevOps",
        priority: "Low",
        status: "completed",
      },
      {
        taskId: 4,
        taskTitle: "Security audit",
        taskDescription: "Check vulnerabilities",
        taskDate: "2026-04-04",
        category: "Security",
        priority: "High",
        status: "new",
      },
    ],
  },
];

const admins = {
  id: 100,
  email: "admin@team.com",
  password: "123",
  name: "Pranav",
};

export const updatedTaskStatus = (employees) => {
  const updatedEmployeesTS = employees.map((emp) => {
    const taskStatus = [
      {
        label: "Active",
        count: emp.tasks.filter((t) => t.status === "active").length,
      },
      {
        label: "Completed",
        count: emp.tasks.filter((t) => t.status === "completed").length,
      },
      {
        label: "New Tasks",
        count: emp.tasks.filter((t) => t.status === "new").length,
      },
      {
        label: "Failed",
        count: emp.tasks.filter((t) => t.status === "failed").length,
      },
    ];

    return {
      ...emp,
      taskStatus,
    }
  });

  return updatedEmployeesTS;
};

const updatedTSEmployees = updatedTaskStatus(employees);

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(updatedTSEmployees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));
  return { employees, admins };
};
