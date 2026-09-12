module.exports = {
  LoginPage: {
    titleAccept: "تسجيل الدخول لقبول الدعوة",
    titleWelcome: "مرحباً بعودتك",
    descAccept: "سجل الدخول وسنأخذك إلى صفحة قبول الدعوة للانضمام إلى الفريق.",
    descWelcome: "سجل الدخول إلى حسابك للوصول إلى لوحة تحكم CRM",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    passwordLabel: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    passwordPlaceholder: "أدخل كلمة المرور الخاصة بك",
    signingIn: "جارٍ تسجيل الدخول...",
    signIn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب جديد"
  },
  Sidebar: {
    title: "منصة إدارة علاقات العملاء لواتساب",
    dashboard: "لوحة التحكم",
    inbox: "صندوق الوارد",
    notifications: "الإشعارات",
    contacts: "جهات الاتصال",
    pipelines: "مسارات المبيعات",
    broadcasts: "الرسائل الجماعية",
    automations: "الأتمتة",
    flows: "تدفقات المحادثة",
    aiAgents: "وكلاء الذكاء الاصطناعي",
    settings: "الإعدادات",
    beta: "تجريبي",
    unreadConversations: "{count} {count, plural, =0 {محادثة غير مقروءة} =1 {محادثة واحدة غير مقروءة} =2 {محادثتان غير مقروءتين} few {محادثات غير مقروءة} many {محادثة غير مقروءة} other {محادثات غير مقروءة}}",
    unreadNotifications: "{count} {count, plural, =0 {إشعار غير مقروء} =1 {إشعار واحد غير مقروء} =2 {إشعاران غير مقروءين} few {إشعارات غير مقروءة} many {إشعار غير مقروء} other {إشعارات غير مقروءة}}",
    roleOwner: "المالك",
    roleAdmin: "مسؤول",
    roleAgent: "وكيل",
    roleViewer: "مشاهد",
    closeMenu: "إغلاق القائمة",
    defaultUser: "المستخدم",
    defaultAvatar: "الصورة الرمزية",
    menuProfile: "الملف الشخصي",
    menuSettings: "الإعدادات",
    menuSignOut: "تسجيل الخروج"
  },
  Header: {
    dashboard: "لوحة التحكم",
    inbox: "صندوق الوارد",
    notifications: "الإشعارات",
    contacts: "جهات الاتصال",
    pipelines: "مسارات المبيعات",
    broadcasts: "الرسائل الجماعية",
    automations: "الأتمتة",
    settings: "الإعدادات",
    openMenu: "فتح القائمة",
    openAccountMenu: "فتح قائمة الحساب",
    defaultUser: "المستخدم",
    defaultAvatar: "الصورة الرمزية",
    menuProfile: "الملف الشخصي",
    menuSettings: "الإعدادات",
    menuSignOut: "تسجيل الخروج"
  },
  ModeToggle: {
    switchMode: "التبديل إلى الوضع {mode, select, dark {الداكن} light {الفاتح} other {المحدد}}"
  },
  AccountAccess: {
    unlinkedTitle: "هذا المستخدم غير مرتبط بحساب",
    unlinkedBody: "لن يتم حفظ أي تغييرات تجريها أثناء عدم حل هذه المشكلة — ترفض قاعدة البيانات كل عمليات الكتابة من أي مستخدم بدون حساب أو دور محدد. إذا تمت دعوتك إلى فريق، فاطلب من المالك إعادة إرسال الدعوة. في التثبيت الذاتي، تأكد من تشغيل ترحيل تهيئة الحساب لهذا المستخدم.",
    errorTitle: "تعذر تحميل صلاحياتك",
    errorBody: "لم يتم تحميل دور حسابك، لذا تتم معاملة كل إجراء كقراءة فقط ولن يتم حفظ التغييرات. تحقق من اتصالك وحاول مرة أخرى.",
    retry: "إعادة المحاولة"
  },
  Dashboard: {
    page: {
      title: "لوحة التحكم",
      description: "تحليلات وإحصاءات مباشرة للمحادثات، جهات الاتصال، الصفقات، الحملات الجماعية، والأتمتة.",
      activeConversations: "المحادثات النشطة",
      newContactsToday: "جهات اتصال جديدة اليوم",
      openDealsValue: "قيمة الصفقات المفتوحة",
      messagesSentToday: "الرسائل المرسلة اليوم",
      newTodayVsYesterday: "جديد اليوم مقارنة بالأمس",
      vsYesterday: "مقارنة بالأمس",
      openDeals: "{count} {count, plural, =1 {صفقة مفتوحة} other {صفقات مفتوحة}}",
      noChange: "لا تغيير {suffix}"
    },
    quickActions: {
      newContact: "جهة اتصال جديدة",
      newDeal: "صفقة جديدة",
      newBroadcast: "حملة جماعية جديدة",
      newAutomation: "أتمتة جديدة"
    },
    activityFeed: {
      title: "النشاط الأخير",
      viewAll: "عرض الكل ←",
      noActivity: "لا يوجد نشاط حتى الآن",
      noActivityHint: "ستظهر هنا الأنشطة من الرسائل، الصفقات، الحملات الجماعية، والأتمتة فور حدوثها.",
      showingOf: "عرض {visible} من {totalLoaded}{plus}",
      show: "عرض",
      timeS: "منذ {sec} ث",
      timeM: "منذ {min} د",
      timeH: "منذ {hr} س",
      timeD: "منذ {day} ي"
    },
    conversationsChart: {
      title: "المحادثات عبر الوقت",
      description: "حجم الرسائل اليومية حسب الاتجاه (صادرة / واردة)",
      days: "{count} يوم",
      noActivity: "لا يوجد نشاط للرسائل في هذه الفترة",
      noActivityHint: "ابدأ بإرسال أو استقبال الرسائل لملء هذا الرسم البياني بالبيانات.",
      incoming: "واردة",
      outgoing: "صادرة",
      tooltipIncoming: "{count} واردة",
      tooltipOutgoing: "{count} صادرة",
      ariaLabel: "المحادثات يومياً"
    },
    pipelineDonut: {
      title: "قيمة مسار المبيعات",
      description: "الصفقات المفتوحة مصنفة حسب المرحلة",
      noOpenDeals: "لا توجد صفقات مفتوحة حالياً",
      noOpenDealsHint: "أنشئ صفقات في مسارات المبيعات لرؤية تفاصيل وتوزيع المراحل هنا.",
      dealCount: "{count} {count, plural, =1 {صفقة} other {صفقات}}",
      total: "الإجمالي",
      ariaLabel: "قيمة مسار المبيعات حسب المرحلة"
    },
    responseTimeChart: {
      title: "متوسط وقت الرد الأول",
      description: "الدقائق المستغرقة للرد على أول رسالة غير مجابة من العميل، حسب أيام الأسبوع",
      target: "الهدف {minutes} د",
      thisWeek: "هذا الأسبوع:",
      lastWeek: "الأسبوع الماضي:",
      noReplies: "لم يتم تسجيل ردود حتى الآن",
      noRepliesHint: "سيتم تحديث هذا الرسم البياني تلقائياً كلما قمت بالرد على رسائل العملاء."
    },
    emptyState: {
      title: "لا توجد بيانات كافية بعد"
    }
  }
};
