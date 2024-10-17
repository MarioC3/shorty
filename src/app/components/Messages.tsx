import type { CreateShortUrlResponse } from '@/schemas'
import { OctagonX } from 'lucide-react'

interface Props {
	state: CreateShortUrlResponse
}
export default function Messages({ state }: Props) {
	const errorMessage = (
		<div className="flex items-center justify-center gap-2 font-semibold text-rose-600">
			<OctagonX size={20} />
			<span className="text-sm">{state.message}</span>
		</div>
	)

	const successMessage = (
		<div className="flex flex-col items-start gap-1">
			<span className="text-xs">Shorty:</span>
			<p className="font-semibold">{`${window.location.href}${state.message}`}</p>
		</div>
	)

	return <div className="flex items-center justify-center pt-4">{state.success ? successMessage : errorMessage}</div>
}
