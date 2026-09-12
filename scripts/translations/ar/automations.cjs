module.exports = {
  Automations: {
    list: {
      title: "الأتمتة",
      subtitle: "بناء مسارات عمل تتفاعل مع أحداث واتساب® تلقائياً.",
      create: "إنشاء أتمتة",
      retry: "إعادة المحاولة",
      templatesTitle: "قوالب البدء السريع",
      emptyTitle: "لا توجد أتمتة بعد",
      emptyDesc: "اختر قالباً من القوالب أعلاه أو ابدأ بإنشاء أتمتة من الصفر.",
      runs: "{count} تشغيل",
      runsPlural: "{count} مرات تشغيل",
      lastRun: "آخر تشغيل {time}",
      activate: "تفعيل",
      deactivate: "إلغاء التفعيل",
      edit: "تعديل",
      duplicate: "تكرار",
      viewLogs: "عرض السجلات",
      delete: "حذف",
      cancel: "إلغاء",
      deleteTitle: "حذف الأتمتة",
      deleteDesc: "سيؤدي هذا إلى حذف {name} نهائياً مع سجلات تنفيذها. لا يمكن التراجع عن هذا الإجراء.",
      toasts: {
        activated: "تم تفعيل الأتمتة",
        paused: "تم إيقاف الأتمتة مؤقتاً",
        duplicated: "تم تكرار الأتمتة بنجاح",
        deleted: "تم حذف الأتمتة",
        updateError: "فشل تحديث الأتمتة",
        duplicateError: "فشل تكرار الأتمتة",
        deleteError: "فشل حذف الأتمتة"
      }
    },
    edit: {
      loading: "جارٍ التحميل...",
      loadError: "فشل التحميل ({status})",
      back: "العودة إلى الأتمتة"
    },
    logs: {
      title: "سجلات التنفيذ",
      loadError: "فشل تحميل السجلات",
      emptyTitle: "لا توجد عمليات تنفيذ بعد",
      emptyDesc: "قم بتشغيل هذه الأتمتة لرؤية سجلات التشغيل هنا.",
      unknownContact: "جهة اتصال غير معروفة",
      step: "{count} خطوة",
      stepPlural: "{count} خطوات",
      noSteps: "لم يتم تسجيل خطوات.",
      status: {
        success: "ناجح",
        partial: "جزئي",
        failed: "فاشل"
      },
      back: "رجوع",
      backAria: "رجوع"
    },
    builder: {
      steps: {
        send_message: "إرسال رسالة",
        send_buttons: "إرسال أزرار",
        send_list: "إرسال قائمة",
        send_template: "إرسال قالب",
        add_tag: "إضافة وسم",
        remove_tag: "إزالة وسم",
        assign_conversation: "تعيين المحادثة",
        update_contact_field: "تحديث حقل جهة الاتصال",
        create_deal: "إنشاء صفقة",
        wait: "انتظار",
        condition: "شرط (إذا / وإلا)",
        send_webhook: "إرسال Webhook",
        close_conversation: "إغلاق المحادثة"
      },
      triggers: {
        new_message_received: {
          label: "استلام رسالة جديدة",
          hint: "أي رسالة واردة جديدة"
        },
        first_inbound_message: {
          label: "أول رسالة من جهة الاتصال",
          hint: "المرة الأولى التي يراسلك فيها العميل"
        },
        keyword_match: {
          label: "مطابقة كلمة مفتاحية",
          hint: "تحتوي الرسالة على كلمات مفتاحية محددة"
        },
        interactive_reply: {
          label: "رد عبر زر أو قائمة",
          hint: "عندما يضغط العميل على خيار أو زر محدد"
        },
        new_contact_created: {
          label: "إنشاء جهة اتصال جديدة",
          hint: "عند إنشاء جهة اتصال تلقائياً من رسالة واردة"
        },
        conversation_assigned: {
          label: "تعيين المحادثة",
          hint: "عند تعيين المحادثة لوكيل محدد"
        },
        tag_added: {
          label: "إضافة وسم",
          hint: "عند إضافة وسم إلى جهة الاتصال"
        },
        time_based: {
          label: "مجدول بالوقت",
          hint: "بناءً على جدول زمني دوري"
        }
      },
      trigger: "المشغل (Trigger)",
      triggerType: "نوع المشغل",
      keywords: "الكلمات المفتاحية",
      keywordsHint: "قائمة مفصولة بفواصل (مثل: مرحبا، مساعدة، شراء)",
      replyIds: "معرفات الرد",
      replyIdsHint: "نعم، لا، مزيد_من_المعلومات",
      replyIdsHelp: "معرفات مطابقة للأزرار أو خيارات القوائم بدقة.",
      schedule: "الجدول الزمني",
      scheduleHint: "تعبير Cron (مثال: 0 9 * * 1-5)",
      active: "نشط",
      activeAria: "نشط",
      save: "حفظ",
      saveDraft: "حفظ كمسودة",
      untitled: "أتمتة بدون عنوان",
      backToAutomations: "العودة إلى الأتمتة",
      toasts: {
        saved: "تم حفظ الأتمتة",
        created: "تم إنشاء الأتمتة",
        saveFailed: "فشل حفظ الأتمتة"
      },
      tags: {
        select: "اختر وسماً…",
        placeholder: "معرف الوسم",
        unknown: "{id} (وسم غير معروف)"
      },
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        company: "الشركة",
        customFields: "الحقول المخصصة",
        unknown: "{id} (حقل غير معروف)"
      },
      agents: {
        select: "اختر وكيلاً…",
        placeholder: "معرف الوكيل",
        unknown: "{id} (وكيل غير معروف)"
      },
      pipelines: {
        pipelineLabel: "مسار المبيعات",
        pipelineIdLabel: "معرف المسار",
        stageLabel: "المرحلة",
        stageIdLabel: "معرف المرحلة",
        selectPipeline: "اختر مساراً…",
        selectStage: "اختر مرحلة…",
        selectPipelineFirst: "اختر مسار المبيعات أولاً…",
        unknownPipeline: "{id} (مسار غير معروف)",
        unknownStage: "{id} (مرحلة غير معروفة)"
      },
      templates: {
        templateLabel: "القالب",
        templateNameLabel: "اسم القالب",
        languageLabel: "اللغة",
        select: "اختر قالباً…",
        unknown: "{name} ({lang}) — ليس في القائمة المعتمدة",
        unknownLang: "غير معروف"
      },
      branches: {
        yes: "نعم (صحيح)",
        no: "لا (خطأ)"
      },
      addStep: "إضافة خطوة",
      delete: "حذف",
      config: {
        messageText: "نص الرسالة",
        placeholderMessageText: "مرحباً! شكراً لتواصلك معنا…",
        tagLabel: "الوسم",
        modeLabel: "الوضع",
        modes: {
          round_robin: "توزيع دوري (Round-robin)",
          specific: "وكيل محدد"
        },
        agentLabel: "الوكيل",
        fieldLabel: "الحقل",
        valueLabel: "القيمة",
        placeholderValue: "نص أو {{ vars.x }} / {{ message.text }}",
        titleLabel: "العنوان",
        amountLabel: "المبلغ",
        unitLabel: "الوحدة",
        units: {
          minutes: "دقائق",
          hours: "ساعات",
          days: "أيام"
        },
        subjectLabel: "الموضوع",
        subjects: {
          tag_presence: "وجود الوسم",
          contact_field: "حقل جهة الاتصال",
          message_content: "محتوى الرسالة",
          time_of_day: "الوقت من اليوم"
        },
        operandLabel: "المعامل",
        placeholderTime: "HH:mm-HH:mm",
        placeholderContact: "الاسم / البريد / الشركة",
        placeholderTag: "معرف الوسم",
        urlLabel: "رابط URL",
        headersLabel: "الترويسات (Headers)",
        placeholderHeaders: "{\"Authorization\": \"Bearer ...\"}",
        bodyTemplateLabel: "قالب المحتوى (Body)",
        placeholderBody: "{\"id\": \"{{ contact.id }}\"}",
        matchType: "نوع المطابقة",
        matchContains: "يحتوي على",
        matchWord: "كلمة كاملة",
        matchWordHint: "يطابق الكلمة ككلمة مستقلة فقط.",
        matchExact: "مطابقة تامة",
        closeConversationHint: "يغير حالة المحادثة إلى \"مغلقة\". لا يتطلب إعدادات إضافية."
      }
    }
  }
};
