import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN_YUKINO!}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID!,
        text: `${req.headers['user-agent']} has opened your portfolio!`,
      }),
    }
  );

  return res.status(200).send(null);
};

export default handler;
