import { useReducer, useState, useEffect } from "react";
import React from "react";
import Select from "react-select";
import { BiPlus } from "react-icons/bi";
import Success from "./Success";
import Bug from "./Bug";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "../firebase";
import { TableEmployees } from "./TableEmployees";
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
  const [dataSelect, setDataSelect] = useState<any[]>([]);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "employees"), {
        nombre: formData["Nombre"],
        apellidos: formData["Apellidos"],
        estadoCivil: formData["Estado"],
        departamento: formData["Departamento"],
        entrada: formData["Hora1"],
        salida: formData["Hora2"],
      });

      console.log("Document written with ID: ", docRef.id);
      setDepartmentData((prevData) => ({
        ...prevData,
        [formData["Nombre"]]: {
          nombre: formData["Nombre"],
          apellidos: formData["Apellidos"],
          estadocivil: formData["Estado"],
          departamento: formData["Departamento"],
          entrada: formData["Hora1"],
          salida: formData["Hora2"],
        },
      }));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list: any[] = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setDataSelect(list);
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
  console.log(dataSelect);

  const handleSelectChange = (selectedOption: any, fieldName: string) => {
    setFormData({
      target: {
        name: fieldName,
        value: selectedOption.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSelectDepartament = (selectedOption: any) => {
    setFormData({
      target: {
        name: "Departamento",
        value: selectedOption.value, // Utiliza selectedOption.value en lugar de selectedOption.target.value
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSelectCivil = (selectedOption: any) => {
    setFormData({
      target: {
        name: "Estado",
        value: selectedOption.value, // Utiliza selectedOption.value en lugar de selectedOption.target.value
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <form className="grid lg:grid-cols-3 w-4/6 gap-4" onSubmit={handleAdd}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="Nombre"
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Nombre"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="Apellidos"
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Apellidos"
        />
      </div>

      <div className="input-type">
        <Select
          options={[
            { value: 'Soltero', label: 'Soltero' },
            { value: 'Viudo', label: 'Viudo' },
            { value: 'Casado', label: 'Casado' },
            { value: 'Divorciado', label: 'Divorciado' }
          ]}
          onChange={handleSelectCivil}
          name="estadoCivil"
          placeholder="Estado Civil"
        />
      </div>
      <div className="input-type py-3">
        <Select
          options={dataSelect.map((item) => ({
            value: item.departamento, // Utiliza la propiedad "departamento"
            label: item.departamento, // Utiliza la propiedad "departamento"
          }))}
          placeholder="Departamento"
          name="departamento"
          onChange={handleSelectDepartament}
        />
      </div>

      <div className="input-type flex items-center">
        <label htmlFor="timeInput" className="mr-2 text-gray-500">
          Entrada
        </label>
        <input
          type="time"
          id="timeInput"
          onChange={(e) => handleSelectChange(e, "Hora1")}
          name="Hora1"
          className="flex-grow border px-5 py-2 focus:outline-none rounded-md"
        />
      </div>

      <div className="input-type flex items-center">
        <label htmlFor="timeInput" className="mr-2 text-gray-500">
          Salida
        </label>
        <input
          type="time"
          id="timeInput"
          onChange={(e) => handleSelectChange(e, "Hora2")}
          name="Hora2"
          className="flex-grow border px-5 py-2 focus:outline-none rounded-md"
        />
      </div>

      <button
        className="flex justify-center text-md w-3/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
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
