module.exports = {
  LoginPage: {
    titleAccept: "Daveti Kabul Et",
    titleWelcome: "Tekrar Hoş Geldiniz",
    descAccept: "Giriş yapın, sizi davet sayfasına yönlendirelim.",
    descWelcome: "WhatsApp CRM hesabınıza erişmek için giriş yapın",
    emailLabel: "E-posta",
    emailPlaceholder: "adiniz@sirketiniz.com",
    passwordLabel: "Şifre",
    forgotPassword: "Şifrenizi mi unuttunuz?",
    passwordPlaceholder: "Şifrenizi girin",
    signingIn: "Giriş yapılıyor...",
    signIn: "Giriş Yap",
    noAccount: "Hesabınız yok mu?",
    createAccount: "Hesap Oluştur"
  },
  Sidebar: {
    title: "WhatsApp için CRM Şablonu",
    dashboard: "Gösterge Paneli",
    inbox: "Gelen Kutusu",
    notifications: "Bildirimler",
    contacts: "Kişiler",
    pipelines: "Satış Kanalları",
    broadcasts: "Toplu Mesajlar",
    automations: "Otomasyonlar",
    flows: "Sohbet Akışları",
    aiAgents: "Yapay Zeka Ajanları",
    settings: "Ayarlar",
    beta: "Beta",
    unreadConversations: "{count} okunmamış {count, plural, =1 {konuşma} other {konuşma}}",
    unreadNotifications: "{count} okunmamış {count, plural, =1 {bildirim} other {bildirim}}",
    roleOwner: "Sahip",
    roleAdmin: "Yönetici",
    roleAgent: "Temsilci",
    roleViewer: "Gözlemci",
    closeMenu: "Menüyü kapat",
    defaultUser: "Kullanıcı",
    defaultAvatar: "Avatar",
    menuProfile: "Profil",
    menuSettings: "Ayarlar",
    menuSignOut: "Çıkış Yap"
  },
  Header: {
    dashboard: "Gösterge Paneli",
    inbox: "Gelen Kutusu",
    notifications: "Bildirimler",
    contacts: "Kişiler",
    pipelines: "Satış Kanalları",
    broadcasts: "Toplu Mesajlar",
    automations: "Otomasyonlar",
    settings: "Ayarlar",
    openMenu: "Menüyü Aç",
    openAccountMenu: "Hesap Menüsünü Aç",
    defaultUser: "Kullanıcı",
    defaultAvatar: "Avatar",
    menuProfile: "Profil",
    menuSettings: "Ayarlar",
    menuSignOut: "Çıkış Yap"
  },
  ModeToggle: {
    switchMode: "{mode, select, dark {Koyu} light {Açık} other {Seçili}} moda geç"
  },
  AccountAccess: {
    unlinkedTitle: "Bu kullanıcı bir hesapla ilişkilendirilmemiş",
    unlinkedBody: "Bu durum çözülene kadar yaptığınız değişiklikler kaydedilmeyecektir — veritabanı, bir hesabı veya rolü olmayan kullanıcılardan gelen yazma işlemlerini reddeder. Bir ekibe davet edildiyseniz, sahibinden daveti yeniden göndermesini isteyin. Kendi sunucunuzdaysanız, bu kullanıcı için account-bootstrap geçişinin çalıştığını doğrulayın.",
    errorTitle: "İzinleriniz yüklenemedi",
    errorBody: "Hesap rolünüz yüklenemedi, bu nedenle her eylem salt okunur olarak değerlendirilir ve değişiklikler kaydedilmez. Bağlantınızı kontrol edin ve tekrar deneyin.",
    retry: "Tekrar Dene"
  },
  Dashboard: {
    page: {
      title: "Gösterge Paneli",
      description: "Konuşmalar, kişiler, anlaşmalar, toplu mesajlar ve otomasyonlar genelinde canlı analizler.",
      activeConversations: "Aktif Konuşmalar",
      newContactsToday: "Bugün Eklenen Kişiler",
      openDealsValue: "Açık Anlaşma Değeri",
      messagesSentToday: "Bugün Gönderilen Mesajlar",
      newTodayVsYesterday: "düne kıyasla bugün yeni",
      vsYesterday: "düne göre",
      openDeals: "{count} açık {count, plural, =1 {anlaşma} other {anlaşma}}",
      noChange: "Değişiklik yok {suffix}"
    },
    quickActions: {
      newContact: "Yeni Kişi",
      newDeal: "Yeni Anlaşma",
      newBroadcast: "Yeni Toplu Mesaj",
      newAutomation: "Yeni Otomasyon"
    },
    activityFeed: {
      title: "Son Aktiviteler",
      viewAll: "Tümünü Gör →",
      noActivity: "Henüz bir aktivite yok",
      noActivityHint: "Mesajlar, anlaşmalar, toplu mesajlar ve otomasyon aktiviteleri burada görünecektir.",
      showingOf: "{totalLoaded}{plus} kayıttan {visible} tanesi gösteriliyor",
      show: "Göster",
      timeS: "{sec} sn önce",
      timeM: "{min} dk önce",
      timeH: "{hr} sa önce",
      timeD: "{day} gün önce"
    },
    conversationsChart: {
      title: "Zaman İçindeki Konuşmalar",
      description: "Yöne göre günlük mesaj hacmi (gelen / giden)",
      days: "{count} gün",
      noActivity: "Bu aralıkta mesaj aktivitesi yok",
      noActivityHint: "Bu grafiği doldurmak için mesaj göndermeye veya almaya başlayın.",
      incoming: "Gelen",
      outgoing: "Giden",
      tooltipIncoming: "{count} gelen",
      tooltipOutgoing: "{count} giden",
      ariaLabel: "Günlük konuşmalar"
    },
    pipelineDonut: {
      title: "Satış Kanalı Değeri",
      description: "Aşamaya göre açık anlaşmalar",
      noOpenDeals: "Henüz açık anlaşma yok",
      noOpenDealsHint: "Aşama dağılımlarını burada görmek için Satış Kanalları'nda anlaşmalar oluşturun.",
      dealCount: "{count} {count, plural, =1 {anlaşma} other {anlaşma}}",
      total: "Toplam",
      ariaLabel: "Aşamaya göre satış kanalı değeri"
    },
    responseTimeChart: {
      title: "Ortalama İlk Yanıt Süresi",
      description: "Haftanın günlerine göre, müşterinin ilk yanıtlanmamış mesajına yanıt verme süresi (dakika)",
      target: "hedef {minutes} dk",
      thisWeek: "Bu hafta:",
      lastWeek: "Geçen hafta:",
      noReplies: "Henüz kaydedilmiş yanıt yok",
      noRepliesHint: "Müşteri mesajlarına yanıt verdikçe bu grafik dolacaktır."
    },
    emptyState: {
      title: "Henüz yeterli veri yok"
    }
  }
};
