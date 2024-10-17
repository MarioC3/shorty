import type { ComponentProps, PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'

export default function SubmitButton({ className, children, ...props }: PropsWithChildren<ComponentProps<'button'>>) {
	const { pending } = useFormStatus()

	return (
		<button
			{...props}
			className={`flex w-40 items-center justify-center rounded-md bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-900 aria-[disabled=true]:bg-slate-700 ${className}`}
			aria-disabled={pending}
		>
			{pending ? (
				<Loader
					className="animate-spin"
					size={20}
				/>
			) : (
				children
			)}
		</button>
	)
}
