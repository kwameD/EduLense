export type ScheduleItem = { id: string; title: string; date: string; time: string; location?: string };

export const SCHEDULE: ScheduleItem[] = [
  { id: "s1", title: "Quiz: Linked Lists", date: "2026-02-14", time: "19:00", location: "Online" },
  { id: "s2", title: "Office Hours", date: "2026-02-16", time: "17:30", location: "Teams" },
  { id: "s3", title: "Project Check-in", date: "2026-02-18", time: "20:00", location: "Zoom" },
];
