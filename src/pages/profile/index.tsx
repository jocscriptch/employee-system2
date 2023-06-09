import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import Prueba from "@/components/DataEmployee/prueba";
import TableEmployee from "@/components/DataEmployee/TableEmployee";
const Home = () => {
  return (
    <>
      <section className="mb-16">
        <p className={"text-gray-700 text-3xl font-bold"}>Dashboard</p>
        <ul className="flex items-center gap-2 text-gray-500 text-sm">
          <li>
            <HomeIcon className={"h-4 w-4"} />
          </li>
          <li>
            <ChevronRightIcon className={"h-3 w-3"} />
          </li>
          <li className={"font-medium"}>Dashboard</li>
        </ul>
      </section>

      <div className="grid lg:grid-cols-1 gap-5 mb-8">
          <TableEmployee
            Column1="Departament"
            Column2="Name"
            Column3="Email"
            Column4="Other"
          />
      </div>
    </>
  );
};

export default Home;
