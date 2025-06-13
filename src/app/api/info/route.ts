import { NextResponse } from 'next/server';

const token = process.env.BOT_TOKEN_YUKINO;
const chatId = process.env.CHAT_ID;

export async function GET(request: Request) {
  try {
    const cookies = request.headers.get('cookie');
    const visited = cookies?.includes('visited=true');

    if (visited) {
      return new NextResponse(null, { status: 200 });
    }

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: 'Someone accessing your portfolio!',
      }),
    });

    const response = new NextResponse('OK', { status: 200 });
    const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000); // 1 hour in milliseconds
    response.cookies.set('visited', 'true', {
      httpOnly: true,
      path: '/',
      expires: oneHourFromNow,
    });

    console.log('terkirim');
    return response;
  } catch (error) {
    console.log(error);
    return new NextResponse(null, { status: 500 });
  }
}
