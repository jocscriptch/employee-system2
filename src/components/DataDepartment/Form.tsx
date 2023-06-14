import AddDepartmentForm from "./addDepartmentForm";
import UpdateDepartmentForm from "./updateDepartmentForm";
import { Toaster } from 'sonner';

export default function FormDepartment() {

  const flag = true;

  return(
   <div className="container mx-auto py-5">
    <Toaster closeButton richColors position="top-center"/>
    {flag ? <AddDepartmentForm />:<UpdateDepartmentForm/>}
   </div>
  )
}
