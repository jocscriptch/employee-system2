import {useReducer } from 'react'
import React from 'react'
import {BiPlus} from 'react-icons/bi'
import { Toaster, toast } from 'sonner';

interface State {
  [key: string]: string;
}

const formReducer = (state: State, event: React.ChangeEvent<HTMLInputElement>): State => {
  return {
    ...state,
    [event.target.name]: event.target.value
  };
};

export default function AddDepartmentForm() {

  const [formData, setFormData] = useReducer(formReducer,{})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.keys(formData).length==0) return console.log("Don't have Form Data")
    console.log(formData);
  }

  {/*if(Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug>*/}
  
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input type="text" onChange={setFormData} name="Departamento" className="border w-full px-5 py-2 focus:outline-none rounded-md" placeholder="Departamento" />
      </div>

      <div className="input-type">
        <input type="text" onChange={setFormData} name="Jefe" className="border w-full px-5 py-2 focus:outline-none rounded-md" placeholder="Jefe Departamento" />
      </div>

      <div className="input-type">
        <input type="text" onChange={setFormData} name="Empleados" className="border w-full px-5 py-2 focus:outline-none rounded-md" placeholder="Cantidad Empleados" />
      </div>

      {/*
      <div className="input-type">
        <input type="date" name="Fecha" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Fecha" />
      </div>
      */}
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input type="radio" onChange={setFormData} value="Activo" id="radioDefault1" name="Estado" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Activo
          </label>
        </div>

        <div className="form-check">
          <input type="radio" onChange={setFormData} value="Inactivo" id="radioDefault2" name="Estado" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactivo
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500" onClick={() => toast.error('Error Missing data in the form, please fill in the form.')}>
        Agregar <span className="px-1"><BiPlus size={24}></BiPlus></span>
      </button>
    </form>
  )
}
