export async function getUserNotificationSettings(userId) {
  // Implement the logic to fetch user notification settings from Firestore
  console.log("Fetching notification settings for user:", userId);
  // Return mock data for now
  return {
    istelegram: true,
    isActive: true,
    reddit: true,
    telegramUserId: 'mockTelegramUserId'
  };
}

export async function sendTelegramMessage(telegramUserId, message) {
  // Implement the logic to send a Telegram message
  console.log("Sending Telegram message to:", telegramUserId);
  console.log("Message:", message);
}