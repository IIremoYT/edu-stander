export const mockStudentData = {
  profile: {
    id: 'STU-2026-9821',
    name: 'أحمد محمد',
    avatar: 'https://i.pravatar.cc/150?img=11',
    role: 'طالب',
    grade: 'الصف الثالث الثانوي',
    email: 'ahmed.m@example.com',
    phone: '01012345678',
    appLanguage: 'العربية',
    theme: 'System',
    walletBalance: 1250,
    parent: {
      status: 'linked',
      name: 'محمد سعيد'
    }
  },
  
  stats: {
    activeCourses: 3,
    averageProgress: 68,
  },

  enrolledCourses: [
    {
      id: 'c1',
      title: 'English for Real Life',
      shortDescription: 'كورس شامل لتطوير مهارات المحادثة والاستماع في مواقف الحياة اليومية',
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80',
      progressPercent: 68,
      completedLessons: 24,
      totalLessons: 35,
      currentLesson: {
        title: 'Daily Routines - Part 2',
        id: 'l1'
      },
      status: 'قيد التعلم', // IN_PROGRESS
      expiresIn: 'باقي 45 يوم'
    },
    {
      id: 'c2',
      title: 'Business English',
      shortDescription: 'احترف الإنجليزية للأعمال، المقابلات الشخصية، وكتابة الإيميلات الرسمية',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      progressPercent: 35,
      completedLessons: 12,
      totalLessons: 34,
      currentLesson: {
        title: 'Professional Introductions',
        id: 'l2'
      },
      status: 'قيد التعلم',
      expiresIn: 'باقي 80 يوم'
    },
    {
      id: 'c3',
      title: 'Exam Preparation - IELTS',
      shortDescription: 'التحضير الشامل لاختبار الايلتس مع التركيز على استراتيجيات الحل',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      progressPercent: 100,
      completedLessons: 40,
      totalLessons: 40,
      currentLesson: null,
      status: 'مكتمل', // COMPLETED
      expiresIn: 'متاح دائمًا'
    },
    {
      id: 'c4',
      title: 'Grammar Crash Course',
      shortDescription: 'مراجعة سريعة لأهم قواعد اللغة الإنجليزية في أسبوعين',
      thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
      progressPercent: 90,
      completedLessons: 18,
      totalLessons: 20,
      currentLesson: {
        title: 'Conditional Sentences',
        id: 'l3'
      },
      status: 'ينتهي قريبًا', // EXPIRING_SOON
      expiresIn: 'باقي 3 أيام'
    },
    {
      id: 'c5',
      title: 'Vocabulary Builder',
      shortDescription: 'حصيلة لغوية ضخمة مقسمة حسب المواضيع',
      thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
      progressPercent: 100,
      completedLessons: 30,
      totalLessons: 30,
      currentLesson: null,
      status: 'منتهي', // EXPIRED
      expiresIn: 'انتهت الصلاحية'
    }
  ],

  learningPath: {
    currentCourse: 'English for Real Life',
    currentLessonId: 'l1',
    progress: 68,
    nextSteps: [
      { id: 'ns1', title: 'واجب الكتابة: Daily Routines', type: 'HOMEWORK', isLocked: false },
      { id: 'ns2', title: 'Exam: Unit 3', type: 'EXAM', isLocked: true },
      { id: 'ns3', title: 'PDF: Grammar Notes', type: 'FILE', isLocked: true }
    ],
    sections: [
      {
        id: 'sec1',
        title: 'الوحدة الأولى: Grammar Basics',
        lessons: [
          {
            id: 'les1',
            title: 'Present Simple',
            status: 'COMPLETED',
            steps: [
              { id: 'step1', title: 'فيديو الشرح', type: 'VIDEO', status: 'COMPLETED' },
              { id: 'step2', title: 'تدريب', type: 'HOMEWORK', status: 'COMPLETED' },
              { id: 'step3', title: 'اختبار قصير', type: 'EXAM', status: 'COMPLETED' }
            ]
          },
          {
            id: 'les2',
            title: 'Present Continuous',
            status: 'COMPLETED',
            steps: [
              { id: 'step4', title: 'فيديو الشرح', type: 'VIDEO', status: 'COMPLETED' },
              { id: 'step5', title: 'ملخص الدرس', type: 'FILE', status: 'COMPLETED' }
            ]
          }
        ]
      },
      {
        id: 'sec2',
        title: 'الوحدة الثانية: Daily Routines',
        lessons: [
          {
            id: 'l1', // Current lesson
            title: 'Daily Routines - Part 2',
            status: 'IN_PROGRESS',
            steps: [
              { id: 'step6', title: 'فيديو الشرح', type: 'VIDEO', status: 'COMPLETED' },
              { id: 'ns1', title: 'واجب الكتابة', type: 'HOMEWORK', status: 'AVAILABLE' }
            ]
          },
          {
            id: 'les3',
            title: 'Review & Exam',
            status: 'LOCKED',
            steps: [
              { id: 'ns2', title: 'اختبار الوحدة', type: 'EXAM', status: 'LOCKED' }
            ]
          }
        ]
      }
    ]
  },

  exams: [
    {
      id: 'ex1',
      title: 'Unit 3 Exam',
      courseName: 'English for Real Life',
      sectionName: 'الوحدة الثالثة',
      questionsCount: 20,
      durationMinutes: 30,
      status: 'متاح', // AVAILABLE
      score: null,
      date: null
    },
    {
      id: 'ex2',
      title: 'Unit 2 Exam',
      courseName: 'English for Real Life',
      sectionName: 'الوحدة الثانية',
      questionsCount: 15,
      durationMinutes: 20,
      status: 'مكتمل', // COMPLETED
      score: 87,
      date: '2023-10-15'
    },
    {
      id: 'ex3',
      title: 'Writing Assessment',
      courseName: 'Business English',
      sectionName: 'الإيميلات الرسمية',
      questionsCount: 1,
      durationMinutes: 45,
      status: 'قيد التصحيح', // PENDING_GRADING
      score: null,
      date: '2023-10-25'
    },
    {
      id: 'ex4',
      title: 'Final Exam',
      courseName: 'Exam Preparation - IELTS',
      sectionName: 'Mock Test 1',
      questionsCount: 40,
      durationMinutes: 120,
      status: 'مكتمل',
      score: 92,
      date: '2023-09-10'
    }
  ],

  notifications: [
    {
      id: 'notif1',
      type: 'EXAM',
      title: 'امتحان جديد متاح',
      description: 'امتحان الوحدة الثالثة من كورس English for Real Life متاح الآن.',
      timestamp: 'منذ ساعتين',
      isUnread: true
    },
    {
      id: 'notif2',
      type: 'COURSE',
      title: 'الكورس هينتهي قريبًا',
      description: 'باقي 3 أيام على انتهاء كورس Grammar Crash Course.',
      timestamp: 'منذ 5 ساعات',
      isUnread: true
    },
    {
      id: 'notif3',
      type: 'EXAM',
      title: 'تم تصحيح الامتحان',
      description: 'حصلت على 87% في Unit 2 Exam. يمكنك مراجعة الإجابات الآن.',
      timestamp: 'منذ يوم واحد',
      isUnread: false
    },
    {
      id: 'notif4',
      type: 'PAYMENT',
      title: 'تم إضافة رصيد',
      description: '+500 ج.م تمت إضافتها إلى محفظتك بنجاح.',
      timestamp: 'منذ 3 أيام',
      isUnread: false
    }
  ],

  supportTickets: [
    {
      id: 'SUP-1024',
      category: 'مشكلة تقنية',
      subject: 'مشكلة في تشغيل الفيديو في الدرس الثاني',
      status: 'قيد المتابعة', // IN_PROGRESS
      lastUpdate: 'منذ 3 ساعات'
    },
    {
      id: 'SUP-1018',
      category: 'الامتحان',
      subject: 'استفسار عن سؤال في امتحان الوحدة الأولى',
      status: 'تم الحل', // RESOLVED
      lastUpdate: 'منذ يومين'
    },
    {
      id: 'SUP-0985',
      category: 'الدفع',
      subject: 'مشكلة في استخدام كوبون الخصم',
      status: 'مغلق', // CLOSED
      lastUpdate: 'منذ أسبوع'
    },
    {
      id: 'SUP-1050',
      category: 'الواجب',
      subject: 'خطأ في رفع ملف الواجب',
      status: 'في انتظار ردك', // WAITING_FOR_USER
      lastUpdate: 'منذ ساعة'
    }
  ]
};
