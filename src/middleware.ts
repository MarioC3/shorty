import { type NextRequest, NextResponse } from 'next/server'
import { redis } from './data'

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export const middleware = async (request: NextRequest) => {
	const id = request.nextUrl.pathname.slice(1)
	// Only query redis if it's not the root.
	if (id) {
		const redirectUrl = await redis.get<string>(id)
		if (redirectUrl) return NextResponse.redirect(redirectUrl, 308)
	}

	return NextResponse.next()
}
