import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// con này CHỈ export ra cái thằng auth và KHÔNG CẦN DÙNG tới phần provider, thế nên mới tách ra 1 đoạn auth.config
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs'
};