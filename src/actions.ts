'use server'

import type { CreateShortUrlResponse } from './schemas'
import { z } from 'zod'
import { ID_LENGTH, genUniqueId } from './utils'
import { redis } from './data'

export const createShortUrl = async (initialData: CreateShortUrlResponse, formData: FormData) => {
	const schema = z.object({
		id: z.string().length(ID_LENGTH),
		url: z.string().url(),
	})

	try {
		// const id = 'error' // -> Uncomment to trigger error
		const id = genUniqueId()
		const url = formData.get('urlText') as string

		const data = schema.parse({
			id,
			url,
		})

		await redis.set(data.id, data.url)
		return { success: true, message: data.id, submitted: true }
	} catch (e) {
		console.log(e)
		return { success: false, message: 'An error happened, please try again!', submitted: true }
	}
}
