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

export const TableDepartments = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
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
  //console.log(data);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "users", id));
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
          {data.map((item) => (
            <tr key={item.id} className="bg-secondary text-center">
              <td className="px-16 py-2 flex flex-row items-center">
                {/*<Image src={"#"} alt=""/>*/}
                <span className="text-center ml-2 font-semibold">
                  {item.departamento}
                </span>
              </td>
              <td className="px-16 py-2">
                <span>{item.jefe}</span>
              </td>
              <td className="px-16 py-2">
                <span>{item.empleados}</span>
              </td>
              <td className="px-16 py-2">
                <button className="cursor">
                  <span
                    className={`bg-${
                      item.estado === "Activo" ? "green" : "red"
                    }-500 text-white px-5 py-1 rounded-full`}
                  >
                    {item.estado}
                  </span>
                </button>
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
