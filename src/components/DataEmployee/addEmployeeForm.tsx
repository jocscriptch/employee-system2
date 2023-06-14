import { useReducer } from 'react'
import React from 'react'
import Select from 'react-select';
import { BiPlus } from 'react-icons/bi'
import Success from './Success';
import Bug from './Bug';

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

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSelectChange = (selectedOption: any) => {
    setFormData({
      target: {
        name: 'Estado Civil',
        value: selectedOption.value
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };
  const handleDepartmentChange = (selectedOption: any) => {
    setFormData({
      target: {
        name: 'Departamento',
        value: selectedOption.value
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return console.log("Don't have Form Data")
    console.log(formData);
  }

  {/*if(Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug>*/ }

  return (
    <form className="grid lg:grid-cols-3 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input type="text" onChange={setFormData} name="Nombre" className="border w-full px-5 py-2 focus:outline-none rounded-md" placeholder="Nombre" />
      </div>

      <div className="input-type">
        <input type="text" onChange={setFormData} name="Apellidos" className="border w-full px-5 py-2 focus:outline-none rounded-md" placeholder="Apellidos" />
      </div>

      <div className="input-type">
        <Select
          options={[
            { value: 'Soltero', label: 'Soltero' },
            { value: 'Viudo', label: 'Viudo' },
            { value: 'Casado', label: 'Casado' },
            { value: 'Divorciado', label: 'Divorciado' }
          ]}
          onChange={handleSelectChange}
          placeholder="Estado Civil"
        />
      </div>

      <div className="input-type py-3">
        <Select
          options={[
            { value: 'Informática', label: 'Informática' },
            { value: 'Seguridad', label: 'Seguridad' },
            { value: 'Recursos Humanos', label: 'Recursos Humanos' },
          ]}
          onChange={handleDepartmentChange}
          placeholder="Departamento"
        />
      </div>

      <div className="input-type flex items-center">
        <label htmlFor="timeInput" className="mr-2 text-gray-500">Entrada</label>
        <input type="time" id="timeInput" name="Hora" className="flex-grow border px-5 py-2 focus:outline-none rounded-md" />
      </div>

      <div className="input-type flex items-center">
        <label htmlFor="timeInput" className="mr-2 text-gray-500">Salida</label>
        <input type="time" id="timeInput" name="Hora" className="flex-grow border px-5 py-2 focus:outline-none rounded-md" />
      </div>

      <button className="flex justify-center text-md w-3/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Agregar <span className="px-1"><BiPlus size={24}></BiPlus></span>
      </button>
    </form>
  )
}
