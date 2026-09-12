module.exports = {
  Common: {
    loading: "Yükleniyor...",
    openMenu: "Menüyü aç"
  },
  SignupPage: {
    titleWelcome: "Hesap oluştur",
    titleAccept: "Hesap oluştur ve katıl",
    descWelcome: "WhatsApp CRM Şablonu ile başlayın",
    descAccept: "E-postanızı doğrulayın, ardından ekibinize katılmak için daveti kabul edin.",
    checkEmailTitle: "E-postanızı kontrol edin",
    checkEmailDesc: "{email} adresine bir onay bağlantısı gönderdik. Hesabınızı doğrulamak için gelen kutunuzu kontrol edip bağlantıya tıklayın.",
    backToSignIn: "Giriş yapmaya dön",
    fullNameLabel: "Ad Soyad",
    fullNamePlaceholder: "Ahmet Yılmaz",
    emailLabel: "E-posta",
    emailPlaceholder: "ornek@sirket.com",
    passwordLabel: "Şifre",
    passwordPlaceholder: "En az 6 karakter",
    confirmPasswordLabel: "Şifreyi onayla",
    confirmPasswordPlaceholder: "Şifrenizi tekrar girin",
    creatingAccount: "Hesap oluşturuluyor...",
    createAccount: "Hesap oluştur",
    hasAccount: "Zaten bir hesabınız var mı?",
    signIn: "Giriş yap",
    errorMismatch: "Şifreler eşleşmiyor",
    errorTooShort: "Şifre en az 6 karakter olmalıdır"
  },
  ForgotPasswordPage: {
    title: "Şifreyi sıfırla",
    description: "E-posta adresinizi girin, sıfırlama bağlantısı gönderelim",
    emailLabel: "E-posta",
    emailPlaceholder: "ornek@sirket.com",
    sendLink: "Sıfırlama bağlantısı gönder",
    sending: "Gönderiliyor...",
    backToSignIn: "Giriş yapmaya dön",
    checkEmailTitle: "E-postanızı kontrol edin",
    checkEmailDesc: "{email} adresine bir şifre sıfırlama bağlantısı gönderdik. Lütfen gelen kutunuzu kontrol edin."
  },
  Notifications: {
    title: "Bildirimler",
    description: "Diğer ekip üyelerinin size atadığı konuşmalar burada görünür.",
    markAllRead: "Tümünü okundu olarak işaretle",
    noNotifications: "Henüz bildirim yok",
    noNotificationsHint: "Birisi size bir konuşma atadığında burada bir uyarı göreceksiniz.",
    toastMarkReadFailed: "Bildirim okundu olarak işaretlenemedi",
    toastMarkAllFailed: "Tüm bildirimler okundu olarak işaretlenemedi",
    retry: "Yeniden dene",
    unreadAria: "Okunmamış"
  },
  Agents: {
    title: "Yapay Zeka Ajanları",
    description: "Kendi API anahtarınızla çalışan yapay zeka ajanınız — gelen kutusunda müşterileri yanıtlamadan önce kurun ve test alanında deneyin.",
    tabs: {
      playground: "Test Alanı",
      setup: "Kurulum",
      usage: "Kullanım"
    },
    playground: {
      title: "Test Alanı",
      subtitle: "— müşteriymiş gibi yanıtları test edin",
      reset: "Sıfırla",
      emptyTitle: "Ajanınızın nasıl yanıt vereceğini görmek için bir mesaj gönderin.",
      emptyDesc: "Bilgi tabanınızı kullanır ve temsilciye devretme dahil otomatik yanıt botu gibi davranır.",
      goToSetup: "Henüz kurulmadı mı? Kuruluma Git",
      handoffNote: "Burada bir insan temsilciye devredilecek",
      thinking: "Düşünüyor…",
      inputPlaceholder: "Müşteri mesajı yazın…",
      toastNotConfigured: "Henüz bir ajan yapılandırılmadı — önce Kurulumu tamamlayın.",
      toastNoReply: "Yanıt alınamadı.",
      toastUnreachable: "Ajana ulaşılamadı."
    },
    usage: {
      title: "Token Kullanımı",
      description: "Taslaklar ve otomatik yanıt botu tarafından sağlayıcı anahtarınızda harcanan token'lar. Yalnızca sayımlar — burada mesaj içeriği saklanmaz.",
      lastDays: "Son {days} gün",
      noUsage: "Son {days} günde henüz yapay zeka kullanımı yok.",
      noUsageHint: "Asistan taslak oluşturdukça ve otomatik yanıt verdikçe burası dolar.",
      totalTokens: "Toplam token",
      llmCalls: "LLM çağrıları",
      autoReply: "Otomatik yanıt",
      drafts: "Taslaklar",
      tokensPerDay: "Günlük token",
      byModel: "Modele göre",
      truncated: "Kısmi pencere gösteriliyor — kullanım yüksek olduğu için yalnızca en son kayıtlar özetlenmektedir.",
      callCount: "{count} {count, plural, =1 {çağrı} other {çağrı}}",
      toastLoadFailed: "Kullanım verileri yüklenemedi"
    }
  },
  Join: {
    verifying: "Davet doğrulanıyor…",
    title: "{accountName} hesabına davet edildiniz",
    invitedAs: "{role} rolüyle katılacaksınız. Bağlantı {date} tarihine kadar geçerlidir.",
    roleAdmin: "Yönetici",
    roleAgent: "Temsilci",
    roleViewer: "Görüntüleyici",
    accept: "Daveti kabul et",
    accepting: "Kabul ediliyor…",
    acceptNotice: "Kabul etmek girişinizi {accountName} hesabına taşır. Kayıttan kalan boş kişisel hesabınız temizlenecektir.",
    createAndJoin: "Hesap oluştur ve katıl",
    haveAccount: "Zaten bir hesabım var",
    welcomeToast: "Ekibe hoş geldiniz",
    conflictTitle: "Bu hesapla {accountName} hesabına katılınamıyor",
    conflictDefault: "Zaten başka bir hesaptasınız. Bu hesaba katılmak için farklı bir e-posta ile giriş yapın.",
    conflictHint: "{accountName} hesabına katılmak için oturumu kapatın ve farklı bir e-posta adresiyle tekrar kaydolun. Davet bağlantısı süresi dolmadığı sürece geçerli kalır.",
    staySignedIn: "Oturumu açık tut",
    signOutDifferent: "Oturumu kapat ve farklı bir e-posta kullan",
    signingOut: "Çıkış yapılıyor…",
    tryAgain: "Tekrar dene",
    createAccountInstead: "Bunun yerine yeni bir hesap oluştur",
    signIn: "Giriş yap",
    toastRedeemFailed: "Davet kabul edilemedi",
    toastUnreachable: "Sunucuya ulaşılamadı",
    toastSignOutFailed: "Oturum kapatılamadı. Sayfayı yenilemeyi deneyin.",
    errors: {
      notFoundTitle: "Davet bulunamadı",
      notFoundBody: "Bu bağlantı geçerli bir davetle eşleşmiyor. URL'yi kontrol edin veya sizi davet eden kişiden yeni bir bağlantı isteyin.",
      usedTitle: "Davet zaten kullanılmış",
      usedBody: "Bu davet zaten kabul edilmiş. Bu siz değilseniz, hesap yöneticisinden yeni bir bağlantı göndermesini isteyin.",
      expiredTitle: "Davet süresi dolmuş",
      expiredBody: "Bu davetin süresi dolmuş. Hesap yöneticisinden yenisini göndermesini isteyin.",
      serverErrorTitle: "Bir şeyler ters gitti",
      serverErrorBody: "Bu davet şu anda doğrulanamadı. Sayfayı birazdan yenilemeyi deneyin."
    }
  },
  QuickReplies: {
    title: "Hızlı yanıtlar",
    description: "Temsilcilerin gelen kutusu düzenleyicisinden ekleyebileceği yeniden kullanılabilir metin veya kayıtlı etkileşimli mesajlar.",
    newBtn: "Yeni hızlı yanıt",
    empty: "Henüz hızlı yanıt yok. Konuşmalarda yeniden kullanmak için bir tane oluşturun.",
    editTitle: "Hızlı yanıtı düzenle",
    createTitle: "Yeni hızlı yanıt",
    nameLabel: "İsim",
    namePlaceholder: "ör. Çalışma saatleri",
    tabText: "Metin",
    tabInteractive: "İnteraktif",
    textPlaceholder: "Eklenecek mesaj metni",
    cancel: "İptal",
    save: "Kaydet",
    deleteConfirm: "Bu hızlı yanıt silinsin mi?",
    toastNameRequired: "Hızlı yanıta bir isim verin.",
    toastSaved: "Hızlı yanıt güncellendi.",
    toastCreated: "Hızlı yanıt oluşturuldu.",
    toastSaveFailed: "Hızlı yanıt kaydedilemedi.",
    toastDeleted: "Hızlı yanıt silindi.",
    toastDeleteFailed: "Hızlı yanıt silinemedi."
  },
  Interactive: {
    preview: {
      messageBody: "Mesaj gövdesi…",
      header: "Başlık",
      footer: "Altbilgi",
      interactiveMessage: "İnteraktif mesaj",
      button: "Buton",
      menu: "Menü"
    },
    builder: {
      replyButtons: "Yanıt butonları",
      list: "Liste",
      body: "Gövde",
      bodyPlaceholder: "Müşterinin seçeneklerin üzerinde okuyacağı metin",
      headerLabel: "Başlık (isteğe bağlı)",
      footerLabel: "Altbilgi (isteğe bağlı)",
      showReplyIds: "Yanıt ID'lerini göster (gelişmiş)",
      preview: "Önizleme",
      buttonsCount: "Butonlar ({count}/{max})",
      btnTitlePlaceholder: "Buton etiketi",
      addButton: "Buton ekle",
      listButtonLabel: "Liste butonu etiketi",
      rowsCount: "Satırlar ({count}/{max})",
      sectionTitlePlaceholder: "Bölüm başlığı (isteğe bağlı)",
      rowTitlePlaceholder: "Satır başlığı",
      rowDescPlaceholder: "Açıklama (isteğe bağlı)",
      addRow: "Satır ekle",
      addSection: "Bölüm ekle"
    }
  },
  Flows: {
    header: {
      backToFlows: "Akışlara Dön",
      flowNamePlaceholder: "Akış adı",
      flowNameAria: "Akış adı",
      edited: "Düzenlendi",
      unsavedTitle: "Kaydedilmemiş değişiklikler — kalıcı hale getirmek için Kaydet'e basın",
      runs: "Çalıştırmalar",
      delete: "Sil",
      pause: "Duraklat",
      activate: "Etkinleştir",
      fixIssuesTitle: "Etkinleştirmeden önce aşağıdaki sorunları düzeltin",
      save: "Kaydet",
      descPlaceholder: "Kısa bir açıklama ekleyin (dahili — müşteriler bunu görmez)",
      descAria: "Akış açıklaması",
      draftStatus: "Taslak",
      activeStatus: "Aktif",
      archivedStatus: "Arşivlendi"
    },
    extra: {
      fileUploaded: "Dosya yüklendi.",
      removeSection: "Bölümü kaldır"
    }
  },
  Inbox: {
    toasts: {
      aiNotConfigured: "Yapay zeka henüz yapılandırılmadı — Ayarlar → Yapay Zeka Asistanı bölümünden etkinleştirin.",
      aiNoReply: "Asistan bir yanıt döndürmedi.",
      aiUnreachable: "Yapay zeka asistanına ulaşılamadı.",
      recordingTooLong: "Ses kaydı çok uzun (16 MB'den fazla).",
      voiceNotSupported: "Bu tarayıcıda ses kaydı desteklenmiyor.",
      micAccessDenied: "Mikrofon erişimi reddedildi veya kullanılamıyor.",
      sendFailed: "Gönderilemedi: {reason}",
      sendTemplateFailed: "Şablon gönderilemedi: {reason}",
      waitSending: "Mesajın gönderilmesinin tamamlanmasını bekleyin",
      reactionFailed: "Tepki başarısız oldu: {reason}",
      assignFailed: "Atama güncellenemedi"
    }
  },
  Settings: {
    whatsappToasts: {
      loadFailed: "WhatsApp yapılandırması yüklenemedi",
      phoneIdRequired: "Telefon Numarası Kimliği gereklidir",
      tokenRequired: "İlk kurulum için Erişim Belirteci gereklidir",
      tokenReenter: "Değişiklikleri kaydetmek için lütfen Erişim Belirtecini yeniden girin",
      saveFailed: "Yapılandırma kaydedilemedi",
      connTestFailed: "Bağlantı testi başarısız oldu. Ağı kontrol edip tekrar deneyin.",
      numberWired: "Numara tamamen bağlandı — Meta etkinlikleri iletiyor.",
      verificationUnreachable: "Doğrulama uç noktasına ulaşılamadı.",
      configCleared: "Yapılandırma temizlendi. Şimdi kimlik bilgilerinizi yeniden girebilirsiniz.",
      resetFailed: "Yapılandırma sıfırlanamadı",
      webhookCopied: "Webhook URL'si panoya kopyalandı"
    },
    membersToasts: {
      serverUnreachable: "Sunucuya ulaşılamadı. Tekrar denensin mi?",
      loadInvitationsFailed: "Davetler yüklenemedi",
      updateRoleFailed: "Rol güncellenemedi",
      removeMemberFailed: "Üye kaldırılamadı",
      revokeInviteFailed: "Davet iptal edilemedi"
    }
  },
  Automations: {
    builderExtra: {
      schedulePlaceholder: "Cron ifadesi veya SS:dd",
      moveUp: "Yukarı taşı",
      moveDown: "Aşağı taşı"
    }
  },
  Broadcasts: {
    personalizeExtra: {
      enterValue: "Değer girin..."
    }
  }
};
