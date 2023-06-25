import { useReducer, useState } from "react";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { Toaster, toast } from "sonner";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";
import firebaseApp from "../firebase";
import TableDepartments from "./TableDepartments";

const db = getFirestore(firebaseApp);
interface State {
  [key: string]: string;
}

const formReducer = (
  state: State,
  event: React.ChangeEvent<HTMLInputElement>
): State => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddDepartmentForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [departmentData, setDepartmentData] = useState([]);
  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        departamento: formData["Departamento"],
        jefe: formData["Jefe"],
        empleados: formData["Empleados"],
        estado: formData["Estado"],
      });

      console.log("Document written with ID: ", docRef.id);
      setDepartmentData(prevData => ({
        ...prevData,
        [formData['Departamento']]: {
          departamento: formData['Departamento'],
          jefe: formData['Jefe'],
          empleados: formData['Empleados'],
          estado: formData['Estado'],
        },
      }));
      
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleAdd}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="Departamento"
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Departamento"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="Jefe"
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Jefe Departamento"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="Empleados"
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Cantidad Empleados"
        />
      </div>

      {/*
      <div className="input-type">
        <input type="date" name="Fecha" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Fecha" />
      </div>
      */}
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Activo"
            id="radioDefault1"
            name="Estado"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Activo
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Inactivo"
            id="radioDefault2"
            name="Estado"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactivo
          </label>
        </div>
      </div>

      <button
        className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
        type="submit"
      >
        Agregar{" "}
        <span className="px-1">
          <BiPlus size={24}></BiPlus>
        </span>
      </button>
    </form>
    
  );
}
