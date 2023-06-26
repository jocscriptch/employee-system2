import { table } from "console";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "../firebase";
const db = getFirestore(firebaseApp);

export const TableEmployees = () => {
  const [data, setData] = useState<any[]>([]);
  
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "employees"),
      (snapShot) => {
        let list: any[] = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);


  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "employees", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

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
          {data.map((item) => (
            <tr key={item.id} className="bg-secondary text-center">
              <td className="px-16 py-2 flex flex-row items-center">
                {/*<Image src={"#"} alt=""/>*/}
                <span className="text-center ml-2 font-semibold">
                  {item.nombre}
                </span>
              </td>
              <td className="px-16 py-2">
                <span>{item.apellidos}</span>
              </td>
              <td className="px-16 py-2">
                <span>{item.estadoCivil}</span>
              </td>
              <td className="px-16 py-2">
                <span>{item.departamento}</span>
              </td>
              <td className="px-16 py-2">
                <span>{item.entrada}</span>
              </td>
              <td className="px-16 py-2">
                <span>{item.salida}</span>
              </td>
              <td className="px-16 py-2 flex justify-around gap-5">
                <button className="cursor">
                  <BiEdit size={25} color={"rgb(35,197,94)"} />
                </button>
                <button
                  className="cursor"
                  onClick={() => handleDelete(item.id)}
                >
                  <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
