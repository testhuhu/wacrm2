const fs = require('fs');
const path = require('path');
const { validateKeys } = require('./translation_helpers.cjs');

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}

// Load base English and clean any old additions keys
const enBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/en.json'), 'utf8'));
delete enBase.SignupPage;
delete enBase.ForgotPasswordPage;
delete enBase.Notifications;
delete enBase.Agents;
delete enBase.Join;
delete enBase.QuickReplies;
delete enBase.Interactive;
if (enBase.Flows) delete enBase.Flows.header;
if (enBase.Flows) delete enBase.Flows.extra;
if (enBase.Inbox) delete enBase.Inbox.toasts;
if (enBase.Settings) {
  delete enBase.Settings.whatsappToasts;
  delete enBase.Settings.membersToasts;
}

const enAdditions = require('./translations/en_additions.cjs');

// Deep merge additions into en
const en = deepMerge({}, enBase, enAdditions, {
  Broadcasts: {
    wizard: {
      selectAudience: {
        audienceSummary: "Audience Summary",
        calculating: "Calculating…",
        estimatedRecipients: "estimated recipients"
      },
      scheduleSend: {
        estimatedReach: "Estimated Reach",
        language: "Language",
        confirmTitle: "Confirm Broadcast",
        confirmDesc: "You are about to send this broadcast to {count} contacts using the {template} template. This action cannot be undone."
      }
    }
  }
});

// Arabic
const arCore = require('./translations/ar/core.cjs');
const arInbox = require('./translations/ar/inbox.cjs');
const arContacts = require('./translations/ar/contacts.cjs');
const arPipelines = require('./translations/ar/pipelines.cjs');
const arBroadcasts = require('./translations/ar/broadcasts.cjs');
const arAutomations = require('./translations/ar/automations.cjs');
const arFlows = require('./translations/ar/flows.cjs');
const arSettings = require('./translations/ar/settings.cjs');
const arAdditions = require('./translations/ar_additions.cjs');

const ar = deepMerge(
  {},
  arCore,
  arInbox,
  arContacts,
  arPipelines,
  arBroadcasts,
  arAutomations,
  arFlows,
  arSettings,
  arAdditions,
  {
    Broadcasts: {
      wizard: {
        selectAudience: {
          audienceSummary: "ملخص الجمهور المستهدف",
          calculating: "جارٍ الحساب…",
          estimatedRecipients: "مستلم متوقع"
        },
        scheduleSend: {
          estimatedReach: "الوصول المتوقع",
          language: "اللغة",
          confirmTitle: "تأكيد إرسال الحملة",
          confirmDesc: "أنت على وشك إرسال هذه الرسالة الجماعية إلى {count} من جهات الاتصال باستخدام قالب {template}. لا يمكن التراجع عن هذا الإجراء."
        }
      }
    }
  }
);

// Turkish
const trCore = require('./translations/tr/core.cjs');
const trInbox = require('./translations/tr/inbox.cjs');
const trContacts = require('./translations/tr/contacts.cjs');
const trPipelines = require('./translations/tr/pipelines.cjs');
const trBroadcasts = require('./translations/tr/broadcasts.cjs');
const trAutomations = require('./translations/tr/automations.cjs');
const trFlows = require('./translations/tr/flows.cjs');
const trSettings = require('./translations/tr/settings.cjs');
const trAdditions = require('./translations/tr_additions.cjs');

const tr = deepMerge(
  {},
  trCore,
  trInbox,
  trContacts,
  trPipelines,
  trBroadcasts,
  trAutomations,
  trFlows,
  trSettings,
  trAdditions,
  {
    Broadcasts: {
      wizard: {
        selectAudience: {
          audienceSummary: "Hedef Kitle Özeti",
          calculating: "Hesaplanıyor…",
          estimatedRecipients: "tahmini alıcı"
        },
        scheduleSend: {
          estimatedReach: "Tahmini Erişim",
          language: "Dil",
          confirmTitle: "Toplu Mesajı Onayla",
          confirmDesc: "Bu toplu mesajı {template} şablonunu kullanarak {count} kişiye göndermek üzeresiniz. Bu işlem geri alınamaz."
        }
      }
    }
  }
);

// Korean (update with fallback to preserve parity)
const koBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/ko.json'), 'utf8'));
delete koBase.SignupPage;
delete koBase.ForgotPasswordPage;
delete koBase.Notifications;
delete koBase.Agents;
delete koBase.Join;
delete koBase.QuickReplies;
delete koBase.Interactive;
if (koBase.Flows) delete koBase.Flows.header;
if (koBase.Flows) delete koBase.Flows.extra;
if (koBase.Inbox) delete koBase.Inbox.toasts;
if (koBase.Settings) {
  delete koBase.Settings.whatsappToasts;
  delete koBase.Settings.membersToasts;
}

const ko = deepMerge({}, koBase, enAdditions, {
  Broadcasts: {
    wizard: {
      selectAudience: {
        audienceSummary: "대상 요약",
        calculating: "계산 중…",
        estimatedRecipients: "예상 수신자"
      },
      scheduleSend: {
        estimatedReach: "예상 도달 범위",
        language: "언어",
        confirmTitle: "브로드캐스트 확인",
        confirmDesc: "{template} 템플릿을 사용하여 {count}명의 연락처에 브로드캐스트를 전송합니다. 이 작업은 취소할 수 없습니다."
      }
    }
  }
});

// Write all
fs.writeFileSync(path.join(__dirname, '../messages/en.json'), JSON.stringify(en, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(__dirname, '../messages/ar.json'), JSON.stringify(ar, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(__dirname, '../messages/tr.json'), JSON.stringify(tr, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(__dirname, '../messages/ko.json'), JSON.stringify(ko, null, 2) + '\n', 'utf8');

console.log('Validating AR:');
validateKeys(en, ar, 'ar');
console.log('Validating TR:');
validateKeys(en, tr, 'tr');
console.log('Validating KO:');
validateKeys(en, ko, 'ko');
console.log('All message files successfully updated and validated!');
