export const mockStudent = {
  name: "أحمد",
  grade: "طالب منهج ثانوي",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // Placeholder avatar
  walletBalance: 750,
  notificationsCount: 3,
};

export const mockOverallProgress = {
  percentage: 62,
  message: "أنت بتعمل شغل رائع، استمر على نفس المستوى!",
};

export const mockContinueLearning = {
  id: "c-101",
  courseName: "English for Real Life",
  lastLesson: "Daily Routines - Part 2",
  progress: 68,
  thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
};

export const mockUpcomingTasks = [
  {
    id: "t-1",
    type: "exam", // 'exam', 'homework', 'expiration'
    title: "امتحان الوحدة الثالثة",
    date: "15 سبتمبر",
    iconType: "FileText", 
  },
  {
    id: "t-2",
    type: "homework",
    title: "Writing Practice",
    date: "غدًا",
    iconType: "Edit3",
  },
  {
    id: "t-3",
    type: "expiration",
    title: "انتهاء صلاحية كورس English for Business",
    date: "20 سبتمبر",
    iconType: "Clock",
  },
];

export const mockMyCourses = [
  {
    id: "c-101",
    title: "English for Real Life",
    progress: 68,
    status: "active", // active, starts_soon, expiring_soon
    statusText: "كورس نشط",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "c-102",
    title: "Business English",
    progress: 35,
    status: "starts_soon",
    statusText: "يبدأ قريبًا",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "c-103",
    title: "Exam Preparation",
    progress: 12,
    status: "expiring_soon",
    statusText: "ينتهي قريبًا",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
];

export const mockStatistics = [
  {
    id: "s-1",
    label: "كورسات مشتركة",
    value: "3",
    iconType: "BookOpen",
  },
  {
    id: "s-2",
    label: "درس مكتمل",
    value: "48",
    iconType: "CheckCircle",
  },
  {
    id: "s-3",
    label: "امتحانات منجزة",
    value: "5",
    iconType: "Award",
  },
  {
    id: "s-4",
    label: "متوسط الدرجات",
    value: "87%",
    iconType: "TrendingUp",
  },
];

export const mockRecentActivity = [
  {
    id: "a-1",
    action: "أكملت درس",
    target: "Daily Routines - Part 1",
    time: "منذ يومين",
    iconType: "CheckCircle",
  },
  {
    id: "a-2",
    action: "بدأت امتحان",
    target: "الوحدة الثانية",
    time: "منذ 3 أيام",
    iconType: "Edit",
  },
  {
    id: "a-3",
    action: "اشتركت في كورس",
    target: "Business English",
    time: "منذ 5 أيام",
    iconType: "PlusCircle",
  },
  {
    id: "a-4",
    action: "أضفت رصيد للمحفظة",
    target: "+500 ج.م",
    time: "منذ أسبوع",
    iconType: "Wallet",
  },
];
