module.exports = {
  Flows: {
    list: {
      title: "Sohbet Akışları",
      beta: "Beta",
      description: "Dallanan, buton odaklı WhatsApp konuşmaları oluşturun. Menüler, SSS'ler ve temsilci devreye girmeden önceki yönlendirmeler için idealdir.",
      newFlow: "Yeni akış",
      statusDraft: "Taslak",
      statusActive: "Aktif",
      statusArchived: "Arşivlendi",
      loadError: "Akışlar yüklenemedi.",
      createError: "Akış oluşturulamadı.",
      cloneError: "Klonlama başarısız",
      deleteConfirm: "\"{name}\" akışını silmek istiyor musunuz? Aktif çalıştırmalar hemen sonlandırılacaktır.",
      deleteSuccess: "Akış silindi.",
      deleteError: "Akış silinemedi.",
      emptyTitle: "Henüz akış yok",
      emptyDesc: "İlk konuşmanızı oluşturun — bir karşılama menüsü, sipariş sorgulama veya SSS botu. Müşteriler butonlara dokunur; bot onları doğru cevaba (veya doğru temsilciye) yönlendirir.",
      createFirst: "İlk akışınızı oluşturun",
      createTitle: "Yeni bir akış oluşturun",
      createDesc: "Bir şablondan başlayın veya sıfırdan oluşturun.",
      startTemplate: "Şablondan başla",
      nodeCount: "{count} {count, plural, =1 {düğüm} other {düğüm}}",
      startBlank: "Veya boş başla",
      placeholderName: "örn. Karşılama menüsü",
      cancel: "İptal",
      createBlank: "Boş akış oluştur",
      runCount: "{count} {count, plural, =1 {çalıştırma} other {çalıştırma}}",
      edit: "Düzenle",
      delete: "Sil",
      triggerKeywordNone: "Anahtar kelimeyle tetiklenir (ayarlanmadı)",
      triggerKeyword: "Tetikleyiciler: {keywords}",
      triggerFirstInbound: "Bir kişinin ilk gelen mesajında tetiklenir",
      triggerManual: "Manuel tetikleyici"
    },
    edit: {
      notFound: "Akış bulunamadı.",
      backToFlows: "← Akışlara dön",
      loadError: "Akış yüklenemedi."
    },
    logs: {
      title: "Çalıştırmalar",
      description: "Bu akışın en son 50 çalıştırılması. Motorun adım adım günlüğünü görmek için bir satırı genişletin.",
      emptyState: "Henüz çalıştırma yok. Burada görmek için kişisel bir WhatsApp numarasından akışı tetikleyin.",
      loadError: "Çalıştırmalar yüklenemedi.",
      unknownContact: "Bilinmeyen kişi",
      atNode: "{node} düğümünde",
      started: "{time} başladı",
      reprompts: "{count} yeniden yönlendirme",
      ranFor: "{duration} sürdü",
      capturedVars: "Yakalanan değişkenler ({count})",
      noEvents: "Bu çalıştırma için kaydedilmiş olay yok.",
      statusActive: "Aktif",
      statusCompleted: "Tamamlandı",
      statusHandedOff: "Temsilciye devredildi",
      statusTimedOut: "Zaman aşımı",
      statusPaused: "Temsilci tarafından duraklatıldı",
      statusFailed: "Başarısız"
    },
    builder: {
      triggerTitle: "Tetikleyici",
      whenLabel: "Şu durumda…",
      triggerKeywordTitle: "Bir mesaj anahtar kelime içerdiğinde",
      triggerFirstInboundTitle: "Müşterinin ilk gelen mesajında",
      triggerManualTitle: "Yalnızca manuel (otomatik tetikleme yok)",
      keywordsLabel: "Anahtar Kelimeler (virgülle ayrılmış)",
      keywordsPlaceholder: "destek, yardım, merhaba",
      entryNodeTitle: "Giriş düğümü:",
      entryNodePlaceholder: "İlk düğümü seçin…",
      nodesTitle: "Düğümler ({count})",
      nodesEmpty: "Bir <strong>Başlangıç</strong> düğümü, ardından bir <strong>Buton Gönder</strong> düğümü ve ardından bir <strong>Temsilciye Devret</strong> düğümü ekleyin — bu standart karşılama menüsüdür.",
      addNode: "Düğüm ekle",
      setAsEntry: "Giriş olarak ayarla",
      removeNode: "Düğümü kaldır",
      showAdvanced: "Gelişmişi göster",
      hideAdvanced: "Gelişmişi gizle",
      nodeKeyLabel: "Düğüm anahtarı (dahili tanımlayıcı — analizler için sabit tutun)",
      replyIdsHint: "Her seçeneğin yanıt kimlikleri yukarıda gösterilmektedir. Müşteri dokunduğunda WhatsApp tarafından döndürülürler.",
      badgeEntry: "Giriş",
      noNodesYet: "Henüz düğüm yok.",
      deleteNode: "Düğümü sil",
      canvasView: "Tuval (Canvas)",
      listView: "Liste",
      noNodeSelected: "Düğüm seçilmedi",
      noNodeDesc: "Yapılandırmasını düzenlemek için tuval üzerinde bir düğüm seçin.",
      form: {
        advancesTo: "Şuna ilerler",
        textToCustomer: "Müşteriye gönderilen metin",
        promptToCustomer: "Müşteriye gönderilen soru",
        varKeyLabel: "Değişken anahtarı (harf, rakam ve alt çizgi)",
        varKeyPlaceholder: "örn. isim, eposta, sirket",
        varKeyHelp: "Sonraki mesajlarda ve devir notlarında şu şekilde kullanın:",
        advanceAfterCapture: "Bilgi alındıktan sonra şuna ilerle",
        internalNote: "Dahili not (sohbeti devralan temsilci için)",
        endNodeHelp: "Bitiş düğümü. Akış bu düğüme ulaştığında tamamlanır.",
        bodyText: "Mesaj metni",
        footerText: "Alt bilgi (isteğe bağlı, maks 60 karakter)",
        buttonsHelp: "Butonlar (1–3) — her biri farklı bir sonraki düğüme yönlendirir",
        optionTitlePlaceholder: "Görünen başlık (≤20 karakter)",
        nextNodePlaceholder: "Sonraki düğüm…",
        addButton: "Buton ekle",
        buttonLabel: "Dokunma butonu etiketi (≤20 karakter)",
        rowsHelp: "Satırlar (tüm bölümlerde toplam 1–10)",
        sectionTitlePlaceholder: "Bölüm {count} başlığı (isteğe bağlı)",
        rowTitlePlaceholder: "Satır başlığı (≤24)",
        addRow: "Satır ekle",
        addSection: "Bölüm ekle",
        ifLabel: "Eğer",
        capturedVariable: "Yakalanan değişken",
        contactHasTag: "Kişinin etiketi var",
        contactField: "Kişi alanı",
        varName: "değişken adı",
        tagLabel: "Etiket",
        fieldLabel: "Alan",
        pickTag: "Bir etiket seçin…",
        pickField: "Bir alan seçin…",
        operatorLabel: "İşleç",
        isPresent: "mevcut",
        isAbsent: "mevcut değil",
        equals: "eşittir",
        contains: "içerir",
        valueLabel: "Değer",
        ifTrueAdvance: "Doğruysa → şuna ilerle",
        ifFalseAdvance: "Yanlışsa → şuna ilerle",
        actionLabel: "Eylem",
        addTag: "Etiket ekle",
        removeTag: "Etiketi kaldır",
        tagUuidPlaceholder: "Etiket UUID",
        thenAdvanceTo: "Ardından şuna ilerle",
        mediaTypeLabel: "Medya türü",
        imageLabel: "Resim (PNG, JPEG, WebP)",
        videoLabel: "Video (MP4, 3GP)",
        documentLabel: "Belge (PDF, Word, Excel, PowerPoint, TXT)",
        fileLabel: "Dosya",
        removeFile: "Dosyayı kaldır",
        uploading: "Yükleniyor…",
        clickToUpload: "Yüklemek için tıklayın (maks 16 MB)",
        captionLabel: "Açıklama (isteğe bağlı, medyanın altında gösterilir)",
        filenameLabel: "Müşteriye gösterilen dosya adı (yalnızca belgeler)",
        filenamePlaceholder: "fatura.pdf",
        advanceAfterSending: "Gönderdikten sonra şuna ilerle",
        pickNextNode: "Sonraki düğümü seçin…",
        none: "— Yok —"
      },
      categories: {
        messaging: "Mesajlaşma",
        logic: "Mantık ve veriler",
        flow: "Akış kontrolü"
      },
      nodes: {
        start: {
          label: "Başlangıç",
          blurb: "Akışın giriş noktası"
        },
        send_message: {
          label: "Mesaj gönder",
          blurb: "WhatsApp metin mesajı gönderir"
        },
        send_buttons: {
          label: "Buton gönder",
          blurb: "Hızlı yanıt butonları gönderir"
        },
        send_list: {
          label: "Liste gönder",
          blurb: "Dokunulabilir seçenekler listesi gönderir"
        },
        send_media: {
          label: "Medya gönder",
          blurb: "Resim, video veya belge gönderir"
        },
        collect_input: {
          label: "Girdi topla",
          blurb: "Bir soru sorar, yanıtı kaydeder"
        },
        condition: {
          label: "Eğer / değilse",
          blurb: "Bir kurala göre dallanır"
        },
        set_tag: {
          label: "Kişiyi etiketle",
          blurb: "Kişi etiketi ekler veya kaldırır"
        },
        handoff: {
          label: "Temsilciye devret",
          blurb: "Konuşmayı bir insana devreder"
        },
        end: {
          label: "Son",
          blurb: "Akışı sonlandırır"
        }
      }
    },
    validation: {
      noIssues: "Sorun yok. Etkinleştirmeye hazır.",
      summary: "{errorCount} {errorCount, plural, =1 {hata} other {hata}}, {warningCount} {warningCount, plural, =1 {uyarı} other {uyarı}}",
      jumpToNode: "{key} düğümüne git"
    },
    editorState: {
      saved: "Kaydedildi.",
      fixIssues: "Etkinleştirmeden önce aşağıdaki sorunları düzeltin.",
      statusActivated: "Akış etkinleştirildi.",
      statusArchived: "Arşivlendi.",
      statusDraft: "Taslak olarak kaydedildi."
    },
    summary: {
      options: "{count} {count, plural, =1 {seçenek} other {seçenek}}",
      optionsAcrossSections: "{sectionCount} {sectionCount, plural, =1 {bölümde} other {bölümde}} toplam {rowCount} {rowCount, plural, =1 {seçenek} other {seçenek}}",
      noFile: "{label} (dosya yüklenmedi)",
      media: "Medya",
      image: "Resim",
      video: "Video",
      document: "Belge",
      audio: "Ses",
      hasTag: "{tag} etiketine sahip",
      opContains: "içerir",
      opExists: "mevcut",
      opMissing: "eksik",
      modeAdd: "Ekle",
      modeRemove: "Kaldır",
      tagPicked: "{mode} {tag} etiketi…",
      tagNone: "{mode} etiket (seçilmedi)"
    }
  }
};
