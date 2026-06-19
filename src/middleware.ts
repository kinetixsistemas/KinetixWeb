import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Inicializamos una respuesta base modificable
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Validamos que existan las variables de entorno para evitar caídas
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return response
  }

  // Configuración oficial y segura del cliente de Supabase SSR para Middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Para que el Middleware refresque los tokens de sesión correctamente,
          // debemos actualizar tanto la petición como la respuesta simultáneamente.
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set({ name, value, ...options })
            response = NextResponse.next({ request })
            response.cookies.set({ name, value, ...options })
          })
        },
      },
    }
  )

  // Recuperamos la sesión actual de Supabase de manera segura
  const { data: { session } } = await supabase.auth.getSession()

  const url = request.nextUrl.clone()

  // 1. Proteger Panel de Clientes (Si no hay sesión, va al login)
  if (request.nextUrl.pathname.startsWith('/panel-user') && !session) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // 2. Proteger Panel de Admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!session) {
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }

    // Validación estricta del rol del usuario administrador
    const esAdmin = session.user.user_metadata?.role === 'admin'
    if (!esAdmin) {
      // Si está autenticado pero no es admin, lo redirigimos a su panel de cliente común
      url.pathname = '/panel-user/user'
      return NextResponse.redirect(url)
    }
  }

  // Si el usuario ya está autenticado e intenta ir al login, lo mandamos al dashboard
  if (request.nextUrl.pathname.startsWith('/login') && session) {
    url.pathname = '/panel-user/user'
    return NextResponse.redirect(url)
  }

  return response
}

// CONFIGURACIÓN CRUCIAL: El Matcher evita que el middleware se ejecute en archivos estáticos,
// imágenes, fuentes o en el framework interno, ahorrando recursos de procesamiento en el VPS.
export const config = {
  matcher: [
    '/panel-user/:path*',
    '/admin/:path*',
    '/login'
  ],
}