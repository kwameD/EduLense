export type AuthStackParamList = {
  AuthLanding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type TabParamList = {
  Home: undefined;
  Courses: undefined;
  Schedule: undefined;
  Progress: undefined;
  Profile: undefined;
};

export type AppStackParamList = {
  Tabs: undefined;
  CourseDetail: { courseId: string };
  LessonPlayer: { courseId: string; lessonId: string };
  Achievements: undefined;
  Settings: undefined;
  Notifications: undefined;
};
