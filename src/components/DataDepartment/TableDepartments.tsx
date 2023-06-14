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
                            <span className="text-gray-200">Jefe</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Empleados</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Estado</span>
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
                            <span className="text-center ml-2 font-semibold">Informatica</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Sebastian</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>50</span>
                        </td>
                        <td className="px-16 py-2">
                            <button className="cursor"><span className="bg-green-500 text-white px-5 py-1 rounded-full">Activo</span></button>
                        </td>
                        <td className="px-16 py-2 flex justify-around gap-5">
                            <button className="cursor"><BiEdit size={25} color={"rgb(35,197,94)"} /></button>
                            <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"} /></button>
                        </td>
                    </tr>

                    <tr className="bg-secondary text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            {/*<Image src={"#"} alt=""/>*/}
                            <span className="text-center ml-2 font-semibold">Seguridad</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>Abdias</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>0</span>
                        </td>
                        <td className="px-16 py-2">
                            <button className="cursor"><span className="bg-red-500 text-white px-5 py-1 rounded-full">Inactivo</span></button>
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
