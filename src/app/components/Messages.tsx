import type { CreateShortUrlResponse } from '@/schemas'
import { OctagonX, Copy, Check } from 'lucide-react'
import { useRef, useState } from 'react'

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

	const [copiedIsVisible, setCopiedIsVisible] = useState(false)
	const ref = useRef<HTMLParagraphElement>(null)
	const handleCopy = async () => {
		const text = ref.current?.innerText
		if (text) {
			await navigator.clipboard.writeText(text).then(
				() => {
					setCopiedIsVisible(true)
				},
				(e) => {
					console.log(e)
					console.log('Unable to copy')
				}
			)
		}
	}

	const successMessage = (
		<div className="flex flex-col items-start gap-1">
			<span className="text-xs">Shorty:</span>
			<div className="flex items-center justify-center gap-3">
				<p
					className="font-semibold"
					ref={ref}
				>{`${window.location.href}${state.message}`}</p>
				<div>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation()
							handleCopy()
						}}
						className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white"
					>
						{copiedIsVisible ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>
			</div>
		</div>
	)

	return <div className="flex items-center justify-center pt-4">{state.success ? successMessage : errorMessage}</div>
}
