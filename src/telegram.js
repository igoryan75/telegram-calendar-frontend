export const tg = window.Telegram.WebApp;

export function initTelegram() {
  tg.ready();
  tg.expand();

  return {
    userId: tg.initDataUnsafe?.user?.id,
    username: tg.initDataUnsafe?.user?.username,
    firstName: tg.initDataUnsafe?.user?.first_name
  };
}
