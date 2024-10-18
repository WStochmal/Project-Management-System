export const data = [
  {
    id: "project-1",
    title: "Project",
    description: "This is a project",
    status: "ongoing",
    created_at: "2021-09-01",
    updated_at: "2021-09-01",
    statuses: [
      {
        id: "status-1",
        title: "status 1",
        description: "This is status 1",
        cards: [
          {
            id: "task-1",
            title: "task 1",
            description: "This is task 1",
          },
          {
            id: "task-2",
            title: "task 2",
            description: "This is task 2",
          },
        ],
      },
      {
        id: "status-2",
        title: "status 2",
        description: "This is status 2",
        cards: [
          {
            id: "task-3",
            title: "task 3",
            description: "This is task 3",
          },
          {
            id: "task-4",
            title: "task 4",
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
