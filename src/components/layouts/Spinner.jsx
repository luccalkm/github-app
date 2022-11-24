import spinner from './assets/Pulse-1s-200px.svg';

export default function Spinner() {
	return (
		<div className="w-100 mt-20">
			<img
				src={spinner}
				alt="Loading..."
				width={180}
				className="text-center rounded-full shadow mx-auto"
			/>
		</div>
	);
}
