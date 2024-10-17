import type { ComponentProps, PropsWithChildren } from 'react'

export default function SubmitButton({ className, children, ...props }: PropsWithChildren<ComponentProps<'button'>>) {
	return (
		<button
			{...props}
			className={`flex w-40 items-center justify-center rounded-md bg-slate-800 px-4 py-3 text-white transition hover:bg-slate-900 aria-[disabled=true]:bg-slate-700 ${className}`}
		>
			{children}
		</button>
	)
}
