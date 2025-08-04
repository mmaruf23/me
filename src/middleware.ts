import { NextResponse } from 'next/server';

export const middleware = (req: Request) => {
  const cookies = req.headers.get('cookie');
  const isReported = cookies?.includes('isReported=true');

  if (!isReported) {
    fetch(
      `https://api.telegram.org/bot${process.env
        .BOT_TOKEN_YUKINO!}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID!,
          text: 'Someone accessing your portfolio!',
        }),
      }
    );

    const response = NextResponse.next();
    response.headers.set('Set-Cookie', 'isReported=true; Path=/; HttpOnly;');
    return response;
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
