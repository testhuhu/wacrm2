module.exports = {
  Automations: {
    list: {
      title: "Otomasyonlar",
      subtitle: "WhatsApp® olaylarına otomatik olarak yanıt veren iş akışları oluşturun.",
      create: "Otomasyon Oluştur",
      retry: "Tekrar Dene",
      templatesTitle: "Hızlı başlangıç şablonları",
      emptyTitle: "Henüz otomasyon yok",
      emptyDesc: "Yukarıdan bir şablon seçin veya sıfırdan bir tane oluşturun.",
      runs: "{count} çalıştırma",
      runsPlural: "{count} çalıştırma",
      lastRun: "son {time}",
      activate: "Etkinleştir",
      deactivate: "Devre Dışı Bırak",
      edit: "Düzenle",
      duplicate: "Çoğalt",
      viewLogs: "Kayıtları Gör",
      delete: "Sil",
      cancel: "İptal",
      deleteTitle: "Otomasyonu sil",
      deleteDesc: "Bu işlem {name} ve yürütme geçmişini kalıcı olarak kaldırır. Bu geri alınamaz.",
      toasts: {
        activated: "Otomasyon etkinleştirildi",
        paused: "Otomasyon duraklatıldı",
        duplicated: "Otomasyon çoğaltıldı",
        deleted: "Otomasyon silindi",
        updateError: "Güncelleme başarısız",
        duplicateError: "Çoğaltma başarısız",
        deleteError: "Silme başarısız"
      }
    },
    edit: {
      loading: "Yükleniyor...",
      loadError: "Yükleme başarısız ({status})",
      back: "Otomasyonlara Dön"
    },
    logs: {
      title: "Yürütme günlükleri",
      loadError: "Günlükler yüklenemedi",
      emptyTitle: "Henüz yürütme yok",
      emptyDesc: "Çalıştırmaları burada görmek için bu otomasyonu tetikleyin.",
      unknownContact: "Bilinmeyen kişi",
      step: "{count} adım",
      stepPlural: "{count} adım",
      noSteps: "Kaydedilmiş adım yok.",
      status: {
        success: "başarılı",
        partial: "kısmi",
        failed: "başarısız"
      },
      back: "Geri",
      backAria: "Geri"
    },
    builder: {
      steps: {
        send_message: "Mesaj Gönder",
        send_buttons: "Buton Gönder",
        send_list: "Liste Gönder",
        send_template: "Şablon Gönder",
        add_tag: "Etiket Ekle",
        remove_tag: "Etiketi Kaldır",
        assign_conversation: "Konuşmayı Ata",
        update_contact_field: "Kişi Alanını Güncelle",
        create_deal: "Anlaşma Oluştur",
        wait: "Bekle",
        condition: "Koşul (Eğer/Değilse)",
        send_webhook: "Webhook Gönder",
        close_conversation: "Konuşmayı Kapat"
      },
      triggers: {
        new_message_received: {
          label: "Yeni Mesaj Alındı",
          hint: "Herhangi bir gelen mesaj"
        },
        first_inbound_message: {
          label: "Kişiden İlk Mesaj",
          hint: "Bu kişinin size ilk kez mesaj göndermesi"
        },
        keyword_match: {
          label: "Anahtar Kelime Eşleşmesi",
          hint: "Mesaj belirli anahtar kelimeleri içeriyor"
        },
        interactive_reply: {
          label: "Buton / Liste Yanıtı",
          hint: "Müşteri kimliği eşleşen bir butona veya liste satırına dokunur"
        },
        new_contact_created: {
          label: "Yeni Kişi Oluşturuldu",
          hint: "Gelen bir mesajdan otomatik olarak bir kişi oluşturulduğunda"
        },
        conversation_assigned: {
          label: "Konuşma Atandı",
          hint: "Bir temsilciye atandığında"
        },
        tag_added: {
          label: "Etiket Eklendi",
          hint: "Bir kişiye etiket eklendiğinde"
        },
        time_based: {
          label: "Zamana Dayalı",
          hint: "Yinelenen bir programa göre"
        }
      },
      trigger: "Tetikleyici",
      triggerType: "Tetikleyici türü",
      keywords: "Anahtar Kelimeler",
      keywordsHint: "Virgülle ayrılmış liste (örn. merhaba, yardım, satın al)",
      replyIds: "Yanıt Kimlikleri",
      replyIdsHint: "evet, hayir, bilgi",
      replyIdsHelp: "Eşleşecek buton/liste satırı kimlikleri. Buton Gönder / Liste Gönder adımında ayarladığınız kimliklerin aynısını kullanın.",
      schedule: "Zamanlama",
      scheduleHint: "Cron ifadesi (örn. 0 9 * * 1-5)",
      active: "Aktif",
      activeAria: "Aktif",
      save: "Kaydet",
      saveDraft: "Taslağı Kaydet",
      untitled: "Başlıksız otomasyon",
      backToAutomations: "Otomasyonlara dön",
      toasts: {
        saved: "Otomasyon kaydedildi",
        created: "Otomasyon oluşturuldu",
        saveFailed: "Kaydetme başarısız"
      },
      tags: {
        select: "Bir etiket seçin…",
        placeholder: "Etiket kimliği",
        unknown: "{id} (bilinmeyen etiket)"
      },
      fields: {
        name: "İsim",
        email: "E-posta",
        company: "Şirket",
        customFields: "Özel alanlar",
        unknown: "{id} (bilinmeyen alan)"
      },
      agents: {
        select: "Bir temsilci seçin…",
        placeholder: "Temsilci kimliği",
        unknown: "{id} (bilinmeyen temsilci)"
      },
      pipelines: {
        pipelineLabel: "Satış Kanalı",
        pipelineIdLabel: "Kanal kimliği",
        stageLabel: "Aşama",
        stageIdLabel: "Aşama kimliği",
        selectPipeline: "Bir satış kanalı seçin…",
        selectStage: "Bir aşama seçin…",
        selectPipelineFirst: "Önce bir satış kanalı seçin…",
        unknownPipeline: "{id} (bilinmeyen satış kanalı)",
        unknownStage: "{id} (bilinmeyen aşama)"
      },
      templates: {
        templateLabel: "Şablon",
        templateNameLabel: "Şablon adı",
        languageLabel: "Dil",
        select: "Bir şablon seçin…",
        unknown: "{name} ({lang}) — onaylı listede değil",
        unknownLang: "bilinmeyen"
      },
      branches: {
        yes: "Evet",
        no: "Hayır"
      },
      addStep: "Adım ekle",
      delete: "Sil",
      config: {
        messageText: "Mesaj metni",
        placeholderMessageText: "Merhaba! Bizimle iletişime geçtiğiniz için teşekkürler…",
        tagLabel: "Etiket",
        modeLabel: "Mod",
        modes: {
          round_robin: "Sırayla dağıtım (Round-robin)",
          specific: "Belirli temsilci"
        },
        agentLabel: "Temsilci",
        fieldLabel: "Alan",
        valueLabel: "Değer",
        placeholderValue: "Metin veya {{ vars.x }} / {{ message.text }}",
        titleLabel: "Başlık",
        amountLabel: "Miktar",
        unitLabel: "Birim",
        units: {
          minutes: "Dakika",
          hours: "Saat",
          days: "Gün"
        },
        subjectLabel: "Konu",
        subjects: {
          tag_presence: "Etiket varlığı",
          contact_field: "Kişi alanı",
          message_content: "Mesaj içeriği",
          time_of_day: "Günün saati"
        },
        operandLabel: "İşlenen",
        placeholderTime: "SS:dd-SS:dd",
        placeholderContact: "isim / e-posta / şirket",
        placeholderTag: "etiket kimliği",
        urlLabel: "URL",
        headersLabel: "Başlıklar",
        placeholderHeaders: "{\"Authorization\": \"Bearer ...\"}",
        bodyTemplateLabel: "Gövde şablonu",
        placeholderBody: "{\"id\": \"{{ contact.id }}\"}",
        matchType: "Eşleşme türü",
        matchContains: "İçerir",
        matchWord: "Tam kelime",
        matchWordHint: "Anahtar kelimeyi yalnızca bağımsız bir kelime olarak eşleştirir.",
        matchExact: "Birebir aynı",
        closeConversationHint: "Konuşma durumunu \"kapalı\" olarak ayarlar. Yapılandırma gerekmez."
      }
    }
  }
};
