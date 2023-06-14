import AddDepartmentForm from "./addDepartmentForm";
import UpdateDepartmentForm from "./updateDepartmentForm";

export default function FormDepartment() {

  const flag = true;

  return(
   <div className="container mx-auto py-5">
    {flag ? <AddDepartmentForm />:<UpdateDepartmentForm/>}
   </div>
  )
}
