export type Lesson = { id: string; title: string; durationMin: number; completed?: boolean };
export type Course = { id: string; title: string; instructor: string; progressPct: number; lessons: Lesson[] };

export const COURSES: Course[] = [
  {
    id: "c1",
    title: "Intro to Data Structures",
    instructor: "Dr. Patel",
    progressPct: 45,
    lessons: [
      { id: "l1", title: "Arrays & Big-O", durationMin: 12, completed: true },
      { id: "l2", title: "Stacks & Queues", durationMin: 14, completed: true },
      { id: "l3", title: "Linked Lists", durationMin: 16 },
    ],
  },
  {
    id: "c2",
    title: "Software Testing Basics",
    instructor: "Prof. Lin",
    progressPct: 20,
    lessons: [
      { id: "l1", title: "Test Pyramid", durationMin: 11, completed: true },
      { id: "l2", title: "Unit Testing", durationMin: 15 },
      { id: "l3", title: "UI Testing", durationMin: 17 },
    ],
  },
  {
    id: "c3",
    title: "Secure Coding Foundations",
    instructor: "Ms. Rivera",
    progressPct: 70,
    lessons: [
      { id: "l1", title: "Threat Modeling", durationMin: 13, completed: true },
      { id: "l2", title: "Input Validation", durationMin: 12, completed: true },
      { id: "l3", title: "Auth & Storage", durationMin: 18 },
    ],
  },
];
