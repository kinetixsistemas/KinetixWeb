import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export default async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return response;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set({ name, value, ...options });
            response = NextResponse.next({ request });
            response.cookies.set({ name, value, ...options });
          });
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const url = request.nextUrl.clone();

  if (request.nextUrl.pathname.startsWith('/panel-user') && !session) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!session) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    if (session.user.user_metadata?.role !== 'admin') {
      url.pathname = '/panel-user/user';
      return NextResponse.redirect(url);
    }
  }

  if (request.nextUrl.pathname.startsWith('/login') && session) {
    url.pathname = '/panel-user/user';
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ['/panel-user/:path*', '/admin/:path*', '/login'],
};
