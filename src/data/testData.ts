export const data = [
  {
    id: 1,
    title: "Project",
    description: "This is a project",
    status: "ongoing",
    created_at: "2021-09-01",
    updated_at: "2021-09-01",
    statuses: [
      {
        id: "status-1",
        name: "status 1",
        tasks: [
          {
            id: "task-1",
            name: "task 1",
            description: "This is task 1",
          },
          {
            id: "task-2",
            name: "task 2",
            description: "This is task 2",
          },
        ],
      },
      {
        id: "status-2",
        name: "status 2",
        tasks: [
          {
            id: "task-3",
            name: "task 3",
            description: "This is task 3",
          },
          {
            id: "task-4",
            name: "task 4",
            description: "This is task 4",
          },
        ],
      },
    ],
    members: [
      {
        name: "John Doe",
      },
    ],
  },
];
