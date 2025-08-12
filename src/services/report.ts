export const doReport = () => {
  fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN_YUKINO!}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID!,
        text: 'Someone has accessed your portfolio!',
      }),
    }
  );
};
