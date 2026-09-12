module.exports = {
  Flows: {
    list: {
      title: "تدفقات المحادثة",
      beta: "تجريبي",
      description: "بناء محادثات واتساب تفاعلية تعتمد على الأزرار والتفرعات. مفيدة للقوائم التفاعلية والأسئلة الشائعة وتوجيه العملاء قبل تدخل الموظف.",
      newFlow: "تدفق جديد",
      statusDraft: "مسودة",
      statusActive: "نشط",
      statusArchived: "مؤرشف",
      loadError: "تعذر تحميل التدفقات.",
      createError: "تعذر إنشاء التدفق.",
      cloneError: "فشل تكرار التدفق",
      deleteConfirm: "هل تريد حذف \"{name}\"؟ ستتوقف أي عمليات تشغيل نشطة فوراً.",
      deleteSuccess: "تم حذف التدفق بنجاح.",
      deleteError: "تعذر حذف التدفق.",
      emptyTitle: "لا توجد تدفقات محادثة بعد",
      emptyDesc: "أنشئ أول محادثة تفاعلية — قائمة ترحيب، استعلام عن الطلبات، أو روبوت أسئلة شائعة. ينقر العملاء على الأزرار ليوجههم الروبوت للإجابة الصحيحة أو للموظف المناسب.",
      createFirst: "أنشئ أول تدفق محادثة لك",
      createTitle: "إنشاء تدفق جديد",
      createDesc: "ابدأ من قالب جاهز أو قم بالبناء من الصفر.",
      startTemplate: "البدء من قالب",
      nodeCount: "{count} {count, plural, =1 {عقدة} other {عقد}}",
      startBlank: "أو ابدأ بمخطط فارغ",
      placeholderName: "مثال: قائمة الترحيب الرئيسية",
      cancel: "إلغاء",
      createBlank: "إنشاء تدفق فارغ",
      runCount: "{count} {count, plural, =1 {تشغيل} other {مرات تشغيل}}",
      edit: "تعديل",
      delete: "حذف",
      triggerKeywordNone: "يعمل عند كلمة مفتاحية (لم يتم تعيين أي كلمة)",
      triggerKeyword: "يعمل عند: {keywords}",
      triggerFirstInbound: "يعمل عند أول رسالة واردة يرسلها العميل على الإطلاق",
      triggerManual: "تشغيل يدوي"
    },
    edit: {
      notFound: "التدفق غير موجود.",
      backToFlows: "← العودة إلى التدفقات",
      loadError: "تعذر تحميل التدفق."
    },
    logs: {
      title: "سجلات التشغيل",
      description: "آخر 50 عملية تشغيل لهذا التدفق. وسّع أي صف لرؤية سجل الخطوات التفصيلي.",
      emptyState: "لا توجد عمليات تشغيل بعد. قم بتشغيل التدفق من رقم واتساب لرؤيته هنا.",
      loadError: "تعذر تحميل السجلات.",
      unknownContact: "جهة اتصال غير معروفة",
      atNode: "عند العقدة {node}",
      started: "بدأ في {time}",
      reprompts: "{count} عمليات إعادة توجيه",
      ranFor: "استغرق {duration}",
      capturedVars: "المتغيرات الملتقطة ({count})",
      noEvents: "لا توجد أحداث مسجلة لعملية التشغيل هذه.",
      statusActive: "نشط",
      statusCompleted: "مكتمل",
      statusHandedOff: "تم التحويل لموظف",
      statusTimedOut: "انتهت المهلة",
      statusPaused: "متوقف بواسطة الوكيل",
      statusFailed: "فشل"
    },
    builder: {
      triggerTitle: "المشغل (Trigger)",
      whenLabel: "عندما…",
      triggerKeywordTitle: "تحتوي الرسالة على كلمة مفتاحية",
      triggerFirstInboundTitle: "أول رسالة واردة من العميل على الإطلاق",
      triggerManualTitle: "يدوي فقط (بدون تشغيل تلقائي)",
      keywordsLabel: "الكلمات المفتاحية (مفصولة بفواصل)",
      keywordsPlaceholder: "مرحبا، مساعدة، دعم",
      entryNodeTitle: "عقدة البداية:",
      entryNodePlaceholder: "اختر العقدة الأولى…",
      nodesTitle: "العقد ({count})",
      nodesEmpty: "أضف عقدة <strong>بداية</strong>، ثم عقدة <strong>إرسال أزرار</strong>، ثم عقدة <strong>تحويل للوكيل</strong> — هذا هو الشكل القياسي لقائمة الترحيب.",
      addNode: "إضافة عقدة",
      setAsEntry: "تعيين كعقدة بداية",
      removeNode: "إزالة العقدة",
      showAdvanced: "إظهار الخيارات المتقدمة",
      hideAdvanced: "إخفاء الخيارات المتقدمة",
      nodeKeyLabel: "مفتاح العقدة (معرف داخلي للتحليلات)",
      replyIdsHint: "تظهر معرفات الرد لكل خيار أعلاه. يعيدها واتساب عند نقر العميل.",
      badgeEntry: "البداية",
      noNodesYet: "لا توجد عقد حتى الآن.",
      deleteNode: "حذف العقدة",
      canvasView: "المخطط المرئي (Canvas)",
      listView: "عرض القائمة",
      noNodeSelected: "لم يتم تحديد عقدة",
      noNodeDesc: "حدد عقدة على لوحة المخطط لتعديل إعداداتها.",
      form: {
        advancesTo: "ينتقل بعد ذلك إلى",
        textToCustomer: "النص المرسل إلى العميل",
        promptToCustomer: "سؤال الاستفسار المرسل للعميل",
        varKeyLabel: "اسم المتغير (يخزن في بيانات التدفق؛ أحرف وأرقام و _)",
        varKeyPlaceholder: "مثال: name, email, company",
        varKeyHelp: "يمكنك استخدام المتغير في النصوص اللاحقة وملاحظات التحويل عبر",
        advanceAfterCapture: "بعد التقاط القيمة، انتقل إلى",
        internalNote: "ملاحظة داخلية (للموظف المستلم للمحادثة)",
        endNodeHelp: "عقدة نهاية. عند وصول التدفق إليها تكتمل المحادثة تلقائياً.",
        bodyText: "نص الرسالة",
        footerText: "التذييل (اختياري، حتى 60 حرفاً)",
        buttonsHelp: "الأزرار (1–3) — كل زر يوجه إلى عقدة تالية مختلفة",
        optionTitlePlaceholder: "عنوان الزر الظاهر (≤20 حرفاً)",
        nextNodePlaceholder: "العقدة التالية…",
        addButton: "إضافة زر",
        buttonLabel: "تسمية زر القائمة (≤20 حرفاً)",
        rowsHelp: "الصفوف (1–10 عبر جميع الأقسام)",
        sectionTitlePlaceholder: "عنوان القسم {count} (اختياري)",
        rowTitlePlaceholder: "عنوان الصف (≤24)",
        addRow: "إضافة صف",
        addSection: "إضافة قسم",
        ifLabel: "إذا كان",
        capturedVariable: "المتغير الملتقط",
        contactHasTag: "جهة الاتصال تحتوي على الوسم",
        contactField: "حقل جهة الاتصال",
        varName: "اسم المتغير",
        tagLabel: "الوسم",
        fieldLabel: "الحقل",
        pickTag: "اختر وسماً…",
        pickField: "اختر حقلاً…",
        operatorLabel: "المعامل",
        isPresent: "موجود",
        isAbsent: "غير موجود",
        equals: "يساوي",
        contains: "يحتوي على",
        valueLabel: "القيمة",
        ifTrueAdvance: "إذا كان الشرط صحيحاً → انتقل إلى",
        ifFalseAdvance: "إذا كان الشرط خاطئاً → انتقل إلى",
        actionLabel: "الإجراء",
        addTag: "إضافة وسم",
        removeTag: "إزالة وسم",
        tagUuidPlaceholder: "معرف الوسم UUID",
        thenAdvanceTo: "ثم انتقل إلى",
        mediaTypeLabel: "نوع الوسائط",
        imageLabel: "صورة (PNG, JPEG, WebP)",
        videoLabel: "فيديو (MP4, 3GP)",
        documentLabel: "مستند (PDF, Word, Excel, PowerPoint, TXT)",
        fileLabel: "الملف",
        removeFile: "إزالة الملف",
        uploading: "جارٍ الرفع…",
        clickToUpload: "انقر للرفع (حد أقصى 16 ميجابايت)",
        captionLabel: "شرح توضيحي (اختياري، يظهر أسفل الوسائط)",
        filenameLabel: "اسم الملف الظاهر للعميل (للمستندات فقط)",
        filenamePlaceholder: "invoice.pdf",
        advanceAfterSending: "بعد الإرسال، انتقل إلى",
        pickNextNode: "اختر العقدة التالية…",
        none: "— لا شيء —"
      },
      categories: {
        messaging: "المراسلة",
        logic: "المنطق والبيانات",
        flow: "التحكم في المسار"
      },
      nodes: {
        start: {
          label: "بداية",
          blurb: "نقطة الدخول للتدفق"
        },
        send_message: {
          label: "إرسال رسالة",
          blurb: "إرسال رسالة نصية عبر واتساب"
        },
        send_buttons: {
          label: "إرسال أزرار",
          blurb: "إرسال أزرار ردود سريعة"
        },
        send_list: {
          label: "إرسال قائمة",
          blurb: "إرسال قائمة خيارات قابلة للنقر"
        },
        send_media: {
          label: "إرسال وسائط",
          blurb: "إرسال صورة، فيديو، أو مستند"
        },
        collect_input: {
          label: "جمع بيانات",
          blurb: "طرح سؤال وحفظ إجابة العميل"
        },
        condition: {
          label: "إذا / وإلا",
          blurb: "تفرع بناءً على شرط"
        },
        set_tag: {
          label: "تعديل وسم",
          blurb: "إضافة أو إزالة وسم لجهة الاتصال"
        },
        handoff: {
          label: "تحويل للوكيل",
          blurb: "تحويل المحادثة إلى موظف خدمة بشري"
        },
        end: {
          label: "نهاية",
          blurb: "إنهاء مسار المحادثة"
        }
      }
    },
    validation: {
      noIssues: "لا توجد مشاكل. التدفق جاهز للتفعيل.",
      summary: "{errorCount} {errorCount, plural, =1 {خطأ} other {أخطاء}}، {warningCount} {warningCount, plural, =1 {تحذير} other {تحذيرات}}",
      jumpToNode: "الانتقال إلى العقدة {key}"
    },
    editorState: {
      saved: "تم الحفظ.",
      fixIssues: "يرجى حل المشكلات أدناه قبل التفعيل.",
      statusActivated: "تم تفعيل التدفق.",
      statusArchived: "تمت الأرشفة.",
      statusDraft: "تم الحفظ كمسودة."
    },
    summary: {
      options: "{count} {count, plural, =1 {خيار} other {خيارات}}",
      optionsAcrossSections: "{rowCount} {rowCount, plural, =1 {خيار} other {خيارات}} عبر {sectionCount} {sectionCount, plural, =1 {قسم} other {أقسام}}",
      noFile: "{label} (لم يتم رفع ملف)",
      media: "وسائط",
      image: "صورة",
      video: "فيديو",
      document: "مستند",
      audio: "صوت",
      hasTag: "يحتوي على الوسم {tag}",
      opContains: "يحتوي على",
      opExists: "موجود",
      opMissing: "مفقود",
      modeAdd: "إضافة",
      modeRemove: "إزالة",
      tagPicked: "{mode} الوسم {tag}…",
      tagNone: "{mode} وسم (لم يتم اختيار وسم)"
    }
  }
};
