module.exports = {
  Common: {
    loading: "جاري التحميل...",
    openMenu: "فتح القائمة"
  },
  SignupPage: {
    titleWelcome: "إنشاء حساب جديد",
    titleAccept: "إنشاء حساب والانضمام",
    descWelcome: "ابدأ مع نظام إدارة علاقات العملاء عبر واتساب",
    descAccept: "تحقق من بريدك الإلكتروني، ثم اقبل الدعوة للانضمام إلى فريقك.",
    checkEmailTitle: "تحقق من بريدك الإلكتروني",
    checkEmailDesc: "لقد أرسلنا رابط تأكيد إلى {email}. يرجى التحقق من صندوق الوارد والنقر على الرابط لتفعيل حسابك.",
    backToSignIn: "العودة لتسجيل الدخول",
    fullNameLabel: "الاسم الكامل",
    fullNamePlaceholder: "محمد علي",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    passwordLabel: "كلمة المرور",
    passwordPlaceholder: "6 أحرف على الأقل",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "أعد كتابة كلمة المرور",
    creatingAccount: "جاري إنشاء الحساب...",
    createAccount: "إنشاء الحساب",
    hasAccount: "هل لديك حساب بالفعل؟",
    signIn: "تسجيل الدخول",
    errorMismatch: "كلمات المرور غير متطابقة",
    errorTooShort: "يجب ألا تقل كلمة المرور عن 6 أحرف"
  },
  ForgotPasswordPage: {
    title: "إعادة تعيين كلمة المرور",
    description: "أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    sendLink: "إرسال رابط التعيين",
    sending: "جاري الإرسال...",
    backToSignIn: "العودة لتسجيل الدخول",
    checkEmailTitle: "تحقق من بريدك الإلكتروني",
    checkEmailDesc: "لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى {email}. يرجى مراجعة بريدك."
  },
  Notifications: {
    title: "الإشعارات",
    description: "المحادثات التي يقوم أعضاء الفريق الآخرون بتعيينها لك تظهر هنا.",
    markAllRead: "تحديد الكل كمقروء",
    noNotifications: "لا توجد إشعارات حتى الآن",
    noNotificationsHint: "ستتلقى تنبيهاً هنا عندما يقوم أحد أعضاء الفريق بتعيين محادثة لك.",
    toastMarkReadFailed: "فشل تحديد الإشعار كمقروء",
    toastMarkAllFailed: "فشل تحديد كل الإشعارات كمقروءة",
    retry: "إعادة المحاولة",
    unreadAria: "غير مقروء"
  },
  Agents: {
    title: "الوكلاء الأذكياء",
    description: "وكيل الذكاء الاصطناعي الخاص بك بمفتاحك الخاص — قم بتهيئته واختباره في بيئة التجربة قبل أن يجيب على استفسارات العملاء في صندوق الوارد.",
    tabs: {
      playground: "بيئة التجربة",
      setup: "الإعداد",
      usage: "الاستهلاك"
    },
    playground: {
      title: "بيئة التجربة",
      subtitle: "— اختبر الردود كما لو كنت عميلاً",
      reset: "إعادة ضبط",
      emptyTitle: "أرسل رسالة لترى كيف سيجيب وكيلك الذكي.",
      emptyDesc: "يستخدم قاعدة معرفتك ويعمل تماماً مثل روبوت الرد التلقائي — بما في ذلك التسليم للموظف.",
      goToSetup: "لم تقم بالإعداد بعد؟ الانتقال إلى الإعداد",
      handoffNote: "سيتم تحويل المحادثة إلى موظف بشري هنا",
      thinking: "جاري التفكير…",
      inputPlaceholder: "اكتب رسالة كعميل…",
      toastNotConfigured: "لم يتم تكوين الوكيل بعد — أكمل الإعداد أولاً.",
      toastNoReply: "تعذر الحصول على رد.",
      toastUnreachable: "تعذر الاتصال بالوكيل الذكي."
    },
    usage: {
      title: "استهلاك الرموز (Tokens)",
      description: "الرموز المستهلكة على مفتاح مزود الخدمة من قِبل المسودات والرد التلقائي. إحصائيات عددية فقط — لا يتم تخزين محتوى الرسائل هنا.",
      lastDays: "آخر {days} يوماً",
      noUsage: "لا يوجد استهلاك للذكاء الاصطناعي في آخر {days} يوماً حتى الآن.",
      noUsageHint: "ستظهر البيانات هنا تدريجياً مع قيام المساعد بإنشاء المسودات والردود التلقائية.",
      totalTokens: "إجمالي الرموز",
      llmCalls: "استدعاءات النموذج",
      autoReply: "الرد التلقائي",
      drafts: "المسودات",
      tokensPerDay: "الرموز يومياً",
      byModel: "حسب النموذج",
      truncated: "عرض نافذة جزئية — الاستهلاك مرتفع لذا يتم تلخيص أحدث السجلات فقط.",
      callCount: "{count} {count, plural, =0 {استدعاء} =1 {استدعاء واحد} =2 {استدعاءان} few {استدعاءات} many {استدعاءً} other {استدعاء}}",
      toastLoadFailed: "فشل تحميل بيانات الاستهلاك"
    }
  },
  Join: {
    verifying: "جاري التحقق من الدعوة…",
    title: "أنت مدعو للانضمام إلى {accountName}",
    invitedAs: "ستنضم بدور {role}. الرابط صالح حتى {date}.",
    roleAdmin: "مدير",
    roleAgent: "وكيل",
    roleViewer: "مشاهد",
    accept: "قبول الدعوة",
    accepting: "جاري القبول…",
    acceptNotice: "القبول ينقل تسجيل دخولك إلى {accountName}. سيتم تنظيف حسابك الشخصي الفارغ من التسجيل.",
    createAndJoin: "إنشاء حساب والانضمام",
    haveAccount: "لدي حساب بالفعل",
    welcomeToast: "مرحباً بك في الفريق",
    conflictTitle: "لا يمكن الانضمام إلى {accountName} بهذا الحساب",
    conflictDefault: "أنت مسجل بالفعل في حساب آخر. يرجى تسجيل الدخول ببريد إلكتروني مختلف للانضمام.",
    conflictHint: "للانضمام إلى {accountName}، قم بتسجيل الخروج وسجل مجدداً ببريد مختلف. رابط الدعوة يظل صالحاً حتى ينتهي.",
    staySignedIn: "البقاء مسجلاً",
    signOutDifferent: "تسجيل الخروج واستخدام بريد مختلف",
    signingOut: "جاري تسجيل الخروج…",
    tryAgain: "إعادة المحاولة",
    createAccountInstead: "إنشاء حساب جديد بدلاً من ذلك",
    signIn: "تسجيل الدخول",
    toastRedeemFailed: "فشل قبول الدعوة",
    toastUnreachable: "تعذر الاتصال بالخادم",
    toastSignOutFailed: "تعذر تسجيل الخروج. حاول تحديث الصفحة.",
    errors: {
      notFoundTitle: "الدعوة غير موجودة",
      notFoundBody: "هذا الرابط لا يطابق دعوة صالحة. تأكد من صحة الرابط أو اطلب من الشخص الذي دعاك إرسال رابط جديد.",
      usedTitle: "تم استخدام الدعوة مسبقاً",
      usedBody: "تم قبول هذه الدعوة بالفعل. إذا لم تكن أنت، اطلب من مدير الحساب إرسال رابط جديد.",
      expiredTitle: "انتهت صلاحية الدعوة",
      expiredBody: "انتهت صلاحية هذه الدعوة. اطلب من مدير الحساب إرسال دعوة جديدة.",
      serverErrorTitle: "حدث خطأ ما",
      serverErrorBody: "تعذر التحقق من الدعوة حالياً. حاول تحديث الصفحة بعد قليل."
    }
  },
  QuickReplies: {
    title: "الردود السريعة",
    description: "نصوص وقوالب تفاعلية قابلة لإعادة الاستخدام يمكن للوكلاء إدراجها مباشرة من صندوق الوارد.",
    newBtn: "رد سريع جديد",
    empty: "لا توجد ردود سريعة حتى الآن. أنشئ رداً سريعاً لاستخدامه في المحادثات.",
    editTitle: "تعديل الرد السريع",
    createTitle: "رد سريع جديد",
    nameLabel: "الاسم",
    namePlaceholder: "مثال: ساعات العمل",
    tabText: "نص",
    tabInteractive: "تفاعلي",
    textPlaceholder: "نص الرسالة المراد إدراجه",
    cancel: "إلغاء",
    save: "حفظ",
    deleteConfirm: "هل أنت متأكد من حذف هذا الرد السريع؟",
    toastNameRequired: "يرجى إدخال اسم للرد السريع.",
    toastSaved: "تم تحديث الرد السريع.",
    toastCreated: "تم إنشاء الرد السريع.",
    toastSaveFailed: "تعذر حفظ الرد السريع.",
    toastDeleted: "تم حذف الرد السريع.",
    toastDeleteFailed: "تعذر حذف الرد السريع."
  },
  Interactive: {
    preview: {
      messageBody: "نص الرسالة…",
      header: "رأس الرسالة",
      footer: "تذييل الرسالة",
      interactiveMessage: "رسالة تفاعلية",
      button: "زر",
      menu: "القائمة"
    },
    builder: {
      replyButtons: "أزرار الرد",
      list: "قائمة",
      body: "نص الرسالة",
      bodyPlaceholder: "ما يقرأه العميل أعلى الخيارات",
      headerLabel: "رأس الرسالة (اختياري)",
      footerLabel: "تذييل الرسالة (اختياري)",
      showReplyIds: "إظهار معرفات الرد (متقدم)",
      preview: "معاينة",
      buttonsCount: "الأزرار ({count}/{max})",
      btnTitlePlaceholder: "تسمية الزر",
      addButton: "إضافة زر",
      listButtonLabel: "تسمية زر القائمة",
      rowsCount: "الخيارات ({count}/{max})",
      sectionTitlePlaceholder: "عنوان القسم (اختياري)",
      rowTitlePlaceholder: "عنوان الخيار",
      rowDescPlaceholder: "الوصف (اختياري)",
      addRow: "إضافة خيار",
      addSection: "إضافة قسم"
    }
  },
  Flows: {
    header: {
      backToFlows: "العودة إلى التدفقات",
      flowNamePlaceholder: "اسم التدفق",
      flowNameAria: "اسم التدفق",
      edited: "تم التعديل",
      unsavedTitle: "تغييرات غير محفوظة — اضغط حفظ لتطبيقها",
      runs: "التشغيلات",
      delete: "حذف",
      pause: "إيقاف مؤقت",
      activate: "تفعيل",
      fixIssuesTitle: "يرجى إصلاح المشكلات أدناه قبل التفعيل",
      save: "حفظ",
      descPlaceholder: "أضف وصفاً موجزاً (داخلي — لا يراه العملاء)",
      descAria: "وصف التدفق",
      draftStatus: "مسودة",
      activeStatus: "نشط",
      archivedStatus: "مؤرشف"
    },
    extra: {
      fileUploaded: "تم رفع الملف بنجاح.",
      removeSection: "إزالة القسم"
    }
  },
  Inbox: {
    toasts: {
      aiNotConfigured: "لم يتم إعداد الذكاء الاصطناعي بعد — قم بتمكينه من الإعدادات ← المساعد الذكي.",
      aiNoReply: "لم يرجع المساعد أي رد.",
      aiUnreachable: "تعذر الاتصال بالمساعد الذكي.",
      recordingTooLong: "التسجيل الصوتي طويل جداً (أكثر من 16 ميغابايت).",
      voiceNotSupported: "التسجيل الصوتي غير مدعوم في هذا المتصفح.",
      micAccessDenied: "تم رفض إذن الوصول إلى الميكروفون أو غير متاح.",
      sendFailed: "فشل الإرسال: {reason}",
      sendTemplateFailed: "فشل إرسال القالب: {reason}",
      waitSending: "يرجى الانتظار حتى يكتمل إرسال الرسالة",
      reactionFailed: "فشل التفاعل: {reason}",
      assignFailed: "فشل تحديث تعيين المحادثة"
    }
  },
  Settings: {
    whatsappToasts: {
      loadFailed: "فشل تحميل إعدادات واتساب",
      phoneIdRequired: "معرف رقم الهاتف مطلوب",
      tokenRequired: "رمز الوصول (Access Token) مطلوب للإعداد الأولي",
      tokenReenter: "يرجى إعادة إدخال رمز الوصول لحفظ التغييرات",
      saveFailed: "فشل حفظ الإعدادات",
      connTestFailed: "فشل اختبار الاتصال. تحقق من الشبكة وحاول مجدداً.",
      numberWired: "تم ربط الرقم بنجاح — ميتا تقوم بتوصيل الأحداث.",
      verificationUnreachable: "تعذر الوصول إلى نقطة التحقق.",
      configCleared: "تم مسح الإعدادات. يمكنك الآن إدخال بيانات الاعتماد من جديد.",
      resetFailed: "فشل إعادة تعيين الإعدادات",
      webhookCopied: "تم نسخ رابط الويب هوك إلى الحافظة"
    },
    membersToasts: {
      serverUnreachable: "تعذر الاتصال بالخادم. هل تريد المحاولة مجدداً؟",
      loadInvitationsFailed: "فشل تحميل الدعوات",
      updateRoleFailed: "فشل تحديث الدور",
      removeMemberFailed: "فشل إزالة العضو",
      revokeInviteFailed: "فشل إلغاء الدعوة"
    }
  },
  Automations: {
    builderExtra: {
      schedulePlaceholder: "تعبير Cron أو الساعات:الدقائق (HH:mm)",
      moveUp: "تحريك لأعلى",
      moveDown: "تحريك لأسفل"
    }
  },
  Broadcasts: {
    personalizeExtra: {
      enterValue: "أدخل القيمة..."
    }
  }
};
