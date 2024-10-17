'use client'

import { useFormState } from 'react-dom'
import { createShortUrl } from '@/actions'
import SubmitButton from './components/SubmitButton'
import Messages from './components/Messages'

const initialState = {
	message: '',
	success: false,
	submitted: false,
}

export default function Home() {
	const [state, formAction] = useFormState(createShortUrl, initialState)

	return (
		<section className="space-y-8">
			<form
				action={formAction}
				className="flex w-full flex-col items-center justify-center gap-4"
			>
				<label
					htmlFor="urlInput"
					className="w-full"
				>
					<span className="text-sm text-gray-400">URL</span>
					<input
						required
						type="url"
						name="urlText"
						id="urlInput"
						className="w-full rounded-lg border border-slate-300"
					/>
				</label>
				<SubmitButton className="self-end">Shorten URL</SubmitButton>
				<div className="h-10">{state.submitted && <Messages state={state} />}</div>
			</form>
		</section>
	)
}
