import React from "react";

type TableEmployee = {
  Column1: string;
  Column2: string;
  Column3: string;
  Column4: string;
};

export default function TableEmployee({
  Column1,
  Column2,
  Column3,
  Column4,
}: TableEmployee) {
  let StatusCivil = ["Casado", "Soltero"];
  return (
    <div>
      <div className="flex z-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {Column1}
              </th>
              <th scope="col" className="px-6 py-3">
                {Column2}
              </th>
              <th scope="col" className="px-6 py-3">
                {Column3}
              </th>
              <th scope="col" className="px-6 py-3">
                {Column4}
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                RRH
              </th>
              <td className="px-6 py-4">Jocsan</td>
              <td className="px-6 py-4">jocsan.com</td>
              <td className="px-6 py-4">{StatusCivil[1]}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Logistica
              </th>
              <td className="px-6 py-4">Sebastian</td>
              <td className="px-6 py-4">sebas.com</td>
              <td className="px-6 py-4">{StatusCivil[1]}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Informatica
              </th>
              <td className="px-6 py-4">Yeiko</td>
              <td className="px-6 py-4">yeiko.com</td>
              <td className="px-6 py-4">{StatusCivil[0]}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Gerencial
              </th>
              <td className="px-6 py-4">Julieta</td>
              <td className="px-6 py-4">julieta.com</td>
              <td className="px-6 py-4">{StatusCivil[0]}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
