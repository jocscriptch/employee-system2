import { ChevronDoubleRightIcon,ChevronRightIcon, HomeIcon} from "@heroicons/react/24/solid";
import {BiAddToQueue} from "react-icons/bi";
import TableEmployees from "@/components/DataEmployee/TableEmployees";
import FormEmployee from "@/components/DataEmployee/Form";
import {useState} from 'react';

export default function Home(){

  const [visible, setVisible] = useState(false);

  const handler = ()=>{
    setVisible(!visible)  
  }

  return (
    <>
      <section className="mb-8">
        <p className={"text-gray-700 text-3xl font-bold"}>Empleados</p>
        <ul className="flex items-center gap-2 text-gray-500 text-sm">
          <li>
            <HomeIcon className={"h-4 w-4"} />
          </li>
          <li>
            <ChevronRightIcon className={"h-3 w-3"} />
          </li>
          <li className={"font-medium"}>Employees</li>
        </ul>
      </section>

     <div className="container mx-auto flex justify-between py-2 border-b">
        <div className="left flex gap-3">
          <button onClick={handler} className="flex bg-third text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800">
            Agregar Nuevo <span className="px-1"><BiAddToQueue size={23}></BiAddToQueue></span>
          </button>
        </div>
      </div>

        {/*Form*/}
         {visible ?  <FormEmployee></FormEmployee>:<></>}
       
       
  
        {/*table*/}
        <div className="container mx-auto">
           <TableEmployees></TableEmployees>
        </div>
    </>
  );
};

