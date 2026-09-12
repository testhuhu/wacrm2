module.exports = {
  Common: {
    loading: "Loading...",
    openMenu: "Open menu"
  },
  SignupPage: {
    titleWelcome: "Create account",
    titleAccept: "Create account & join",
    descWelcome: "Get started with CRM Template for WhatsApp",
    descAccept: "Verify your email, then accept the invitation to join your team.",
    checkEmailTitle: "Check your email",
    checkEmailDesc: "We've sent a confirmation link to {email}. Please check your inbox and click the link to verify your account.",
    backToSignIn: "Back to sign in",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "John Doe",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 6 characters",
    confirmPasswordLabel: "Confirm password",
    confirmPasswordPlaceholder: "Repeat your password",
    creatingAccount: "Creating account...",
    createAccount: "Create account",
    hasAccount: "Already have an account?",
    signIn: "Sign in",
    errorMismatch: "Passwords do not match",
    errorTooShort: "Password must be at least 6 characters"
  },
  ForgotPasswordPage: {
    title: "Reset password",
    description: "Enter your email and we'll send you a reset link",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    sendLink: "Send reset link",
    sending: "Sending...",
    backToSignIn: "Back to sign in",
    checkEmailTitle: "Check your email",
    checkEmailDesc: "We've sent a password reset link to {email}. Please check your inbox."
  },
  Notifications: {
    title: "Notifications",
    description: "Conversations other teammates assign to you show up here.",
    markAllRead: "Mark all as read",
    noNotifications: "No notifications yet",
    noNotificationsHint: "You'll see an alert here when someone assigns you a conversation.",
    toastMarkReadFailed: "Failed to mark notification as read",
    toastMarkAllFailed: "Failed to mark all as read",
    retry: "Retry",
    unreadAria: "Unread"
  },
  Agents: {
    title: "AI Agents",
    description: "Your bring-your-own-key AI agent — set it up, then test it in the playground before it replies to customers in the inbox.",
    tabs: {
      playground: "Playground",
      setup: "Setup",
      usage: "Usage"
    },
    playground: {
      title: "Playground",
      subtitle: "— test replies as if you were a customer",
      reset: "Reset",
      emptyTitle: "Send a message to see how your agent would reply.",
      emptyDesc: "It uses your knowledge base and behaves exactly like the auto-reply bot — including handoff.",
      goToSetup: "Not set up yet? Go to Setup",
      handoffNote: "Would hand off to a human here",
      thinking: "Thinking…",
      inputPlaceholder: "Type a customer message…",
      toastNotConfigured: "No agent configured yet — finish Setup first.",
      toastNoReply: "Couldn't get a reply.",
      toastUnreachable: "Couldn't reach the agent."
    },
    usage: {
      title: "Token usage",
      description: "Tokens spent on your provider key by drafts and the auto-reply bot. Counts only — no message content is stored here.",
      lastDays: "Last {days} days",
      noUsage: "No AI usage in the last {days} days yet.",
      noUsageHint: "This fills in as the assistant drafts and auto-replies.",
      totalTokens: "Total tokens",
      llmCalls: "LLM calls",
      autoReply: "Auto-reply",
      drafts: "Drafts",
      tokensPerDay: "Tokens per day",
      byModel: "By model",
      truncated: "Showing a partial window — usage is high enough that only the most recent records are summarized here.",
      callCount: "{count} {count, plural, =1 {call} other {calls}}",
      toastLoadFailed: "Failed to load usage"
    }
  },
  Join: {
    verifying: "Verifying invitation…",
    title: "You're invited to {accountName}",
    invitedAs: "You'll join as {role}. Link valid until {date}.",
    roleAdmin: "Admin",
    roleAgent: "Agent",
    roleViewer: "Viewer",
    accept: "Accept invitation",
    accepting: "Accepting…",
    acceptNotice: "Accepting moves your login into {accountName}. Your empty personal account from signup will be cleaned up.",
    createAndJoin: "Create account & join",
    haveAccount: "I already have an account",
    welcomeToast: "Welcome to the team",
    conflictTitle: "Can't join {accountName} with this account",
    conflictDefault: "You are already in another account. Sign in with a different email to join this one.",
    conflictHint: "To join {accountName}, sign out and sign up again with a different email address. The invite link stays valid as long as it hasn't expired.",
    staySignedIn: "Stay signed in",
    signOutDifferent: "Sign out & use a different email",
    signingOut: "Signing out…",
    tryAgain: "Try again",
    createAccountInstead: "Create a new account instead",
    signIn: "Sign in",
    toastRedeemFailed: "Failed to accept invitation",
    toastUnreachable: "Could not reach the server",
    toastSignOutFailed: "Could not sign out. Try refreshing the page.",
    errors: {
      notFoundTitle: "Invite not found",
      notFoundBody: "This link doesn't match a valid invitation. Double-check the URL or ask the person who invited you to send a new one.",
      usedTitle: "Invite already used",
      usedBody: "This invitation has already been accepted. If that wasn't you, ask the account admin to send a fresh link.",
      expiredTitle: "Invite expired",
      expiredBody: "This invitation has expired. Ask the account admin to send a new one — they take a few seconds to generate.",
      serverErrorTitle: "Something went wrong",
      serverErrorBody: "We couldn't verify this invitation right now. Try refreshing the page in a moment."
    }
  },
  QuickReplies: {
    title: "Quick replies",
    description: "Reusable snippets — plain text or a saved interactive message — that agents can insert from the inbox composer.",
    newBtn: "New quick reply",
    empty: "No quick replies yet. Create one to reuse it across conversations.",
    editTitle: "Edit quick reply",
    createTitle: "New quick reply",
    nameLabel: "Name",
    namePlaceholder: "e.g. Business hours",
    tabText: "Text",
    tabInteractive: "Interactive",
    textPlaceholder: "The message text to insert",
    cancel: "Cancel",
    save: "Save",
    deleteConfirm: "Delete this quick reply?",
    toastNameRequired: "Give the quick reply a name.",
    toastSaved: "Quick reply updated.",
    toastCreated: "Quick reply created.",
    toastSaveFailed: "Couldn't save the quick reply.",
    toastDeleted: "Quick reply deleted.",
    toastDeleteFailed: "Couldn't delete the quick reply."
  },
  Interactive: {
    preview: {
      messageBody: "Message body…",
      header: "Header",
      footer: "Footer",
      interactiveMessage: "Interactive message",
      button: "Button",
      menu: "Menu"
    },
    builder: {
      replyButtons: "Reply buttons",
      list: "List",
      body: "Body",
      bodyPlaceholder: "What the customer reads above the options",
      headerLabel: "Header (optional)",
      footerLabel: "Footer (optional)",
      showReplyIds: "Show reply IDs (advanced)",
      preview: "Preview",
      buttonsCount: "Buttons ({count}/{max})",
      btnTitlePlaceholder: "Button label",
      addButton: "Add button",
      listButtonLabel: "List button label",
      rowsCount: "Rows ({count}/{max})",
      sectionTitlePlaceholder: "Section title (optional)",
      rowTitlePlaceholder: "Row title",
      rowDescPlaceholder: "Description (optional)",
      addRow: "Add row",
      addSection: "Add section"
    }
  },
  Flows: {
    header: {
      backToFlows: "Back to Flows",
      flowNamePlaceholder: "Flow name",
      flowNameAria: "Flow name",
      edited: "Edited",
      unsavedTitle: "Unsaved changes — hit Save to persist",
      runs: "Runs",
      delete: "Delete",
      pause: "Pause",
      activate: "Activate",
      fixIssuesTitle: "Fix the issues below before activating",
      save: "Save",
      descPlaceholder: "Add a short description (internal — customers don't see this)",
      descAria: "Flow description",
      draftStatus: "Draft",
      activeStatus: "Active",
      archivedStatus: "Archived"
    },
    extra: {
      fileUploaded: "File uploaded.",
      removeSection: "Remove section"
    }
  },
  Inbox: {
    toasts: {
      aiNotConfigured: "AI isn't set up yet — enable it in Settings → AI Assistant.",
      aiNoReply: "The assistant didn't return a reply.",
      aiUnreachable: "Couldn't reach the AI assistant.",
      recordingTooLong: "Recording is too long (over 16 MB).",
      voiceNotSupported: "Voice recording isn't supported in this browser.",
      micAccessDenied: "Microphone access denied or unavailable.",
      sendFailed: "Failed to send: {reason}",
      sendTemplateFailed: "Failed to send template: {reason}",
      waitSending: "Wait for the message to finish sending",
      reactionFailed: "Reaction failed: {reason}",
      assignFailed: "Failed to update assignment"
    }
  },
  Settings: {
    whatsappToasts: {
      loadFailed: "Failed to load WhatsApp configuration",
      phoneIdRequired: "Phone Number ID is required",
      tokenRequired: "Access Token is required for initial setup",
      tokenReenter: "Please re-enter the Access Token to save changes",
      saveFailed: "Failed to save configuration",
      connTestFailed: "Connection test failed. Check network and try again.",
      numberWired: "Number is fully wired — Meta is delivering events.",
      verificationUnreachable: "Could not reach the verification endpoint.",
      configCleared: "Configuration cleared. You can now re-enter your credentials.",
      resetFailed: "Failed to reset configuration",
      webhookCopied: "Webhook URL copied to clipboard"
    },
    membersToasts: {
      serverUnreachable: "Could not reach the server. Try again?",
      loadInvitationsFailed: "Failed to load invitations",
      updateRoleFailed: "Failed to update role",
      removeMemberFailed: "Failed to remove member",
      revokeInviteFailed: "Failed to revoke invitation"
    }
  },
  Automations: {
    builderExtra: {
      schedulePlaceholder: "Cron expression or HH:mm",
      moveUp: "Move up",
      moveDown: "Move down"
    }
  },
  Broadcasts: {
    personalizeExtra: {
      enterValue: "Enter value..."
    }
  }
};
