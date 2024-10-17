import SubmitButton from './components/SubmitButton'

export default function Home() {
	return (
		<section className="space-y-8">
			<form className="flex w-full flex-col items-center justify-center gap-4">
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
				<div className="h-10">Messages will go here</div>
			</form>
		</section>
	)
}
