import Sqids from 'sqids'
import { shuffle } from 'lodash-es'

export const ID_LENGTH = 6

export const genUniqueId = () => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	// Per Sqids, we need to shuffle the alphabet to generate unique random ids: https://sqids.org/faq#unique
	const shuffledAlphabet = shuffle(alphabet).join('')

	const sqids = new Sqids({
		alphabet: shuffledAlphabet,
		minLength: ID_LENGTH,
	})

	return sqids.encode([1, 100])
}
