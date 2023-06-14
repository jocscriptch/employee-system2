import { table } from 'console';
import React from 'react';
import Image from 'next/image';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

export default function TableDepartments() {
    return (
        <div className="table-container">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-dark">
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Nombre</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Apellidos</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Estado Civil</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Departamento</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Entrada</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Salida</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Acción</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    <tr className="bg-secondary text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            {/*<Image src={"#"} alt=""/>*/}
                            <span className="text-center ml-2 font-semibold">Jocsan</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Ramirez Chaves</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Soltero</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Informática</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>7:00</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>14:30</span>
                        </td>
                        <td className="px-16 py-2 flex justify-around gap-5">
                            <button className="cursor"><BiEdit size={25} color={"rgb(35,197,94)"} /></button>
                            <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"} /></button>
                        </td>
                    </tr>

                    <tr className="bg-secondary text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            {/*<Image src={"#"} alt=""/>*/}
                            <span className="text-center ml-2 font-semibold">Abdias</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Ureña</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Soltero</span>
                        </td>

                        <td className="px-16 py-2">
                            <span>Informática</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>7:00</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>15:30</span>
                        </td>
                        <td className="px-16 py-2 flex justify-around gap-5">
                            <button className="cursor"><BiEdit size={25} color={"rgb(35,197,94)"} /></button>
                            <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"} /></button>
                        </td>
                    </tr>

                    <tr className="bg-secondary text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            {/*<Image src={"#"} alt=""/>*/}
                            <span className="text-center ml-2 font-semibold">Sebastián</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Arias Aviles</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Soltero</span>
                        </td>

                        <td className="px-16 py-2">
                            <span>Informática</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>8:0</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>15:30</span>
                        </td>
                        <td className="px-16 py-2 flex justify-around gap-5">
                            <button className="cursor"><BiEdit size={25} color={"rgb(35,197,94)"} /></button>
                            <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"} /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
