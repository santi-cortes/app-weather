import Clouds from '@/components/Clouds';
import Footer from '@/components/Footer';
import MainCard from '@/components/MainCard';
import Modal from '@/components/Modal';
import OtherWheathers from '@/components/OtherWheathers';
import SearchZone from '@/components/SearchZone';
import SecondMainCard from '@/components/SecondMainCard';
import { useState } from 'react';

export default function Home() {
	const [activateFlip, setActivateFlip] = useState(false);

	return (
		<>
			<div className="bg-white overflow-y-scroll text-slate-950 dark:bg-slate-950 h-screen w-screen dark:text-white flex flex-col">
				<section className="h-fit p-1">
					<h1 className="text-center">
						Una app de clima diferente, más simple, mas amena.
					</h1>
					<div className="relative m-4 min-h-[350px] flip-card z-0">
						<div
							className={
								activateFlip ? 'flip-card-inner-activate' : 'flip-card-inner'
							}
						>
							<MainCard
								activateFlip={activateFlip}
								setActivateFlip={setActivateFlip}
							/>
							<SecondMainCard
								activateFlip={activateFlip}
								setActivateFlip={setActivateFlip}
							/>
						</div>
					</div>
					<div className="h-[45vh] border-4 m-4 p-4 relative flex overflow-hidden thunders">
						<Clouds />
					</div>
					<div>
						{true ? (
							<>
								<iframe
									title="Lista de reproducción de Spotify"
									src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYgToHlKhwA5?utm_source=generator"
									width="92%"
									height="120"
									frameBorder="0"
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
									className="m-4"
								></iframe>
								<h1 className="text-center -mt-[45px]">
									Escucha la lluvia y relajate
								</h1>
							</>
						) : (
							<></>
						)}
					</div>
					<SearchZone />
					<OtherWheathers />
					<OtherWheathers />
					<OtherWheathers />
					<Footer />
				</section>

				<Modal />
			</div>
		</>
	);
}
