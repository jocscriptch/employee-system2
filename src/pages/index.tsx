import { ChevronDoubleRightIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';
import {BiUserPlus} from "react-icons/bi";

const Home = () => {
	return (
		<>
			<section className="mb-16">
				<p className={'text-gray-700 text-3xl font-bold'}>Dashboard</p>
				<ul className="flex items-center gap-2 text-gray-500 text-sm">
					<li>
						<BiUserPlus className={'h-4 w-4'} />
					</li>
					<li>
						<ChevronRightIcon className={'h-3 w-3'} />
					</li>
					<li className={'font-medium'}>Empleados</li>
				</ul>
			</section>

		</>
	);
};

export default Home;
