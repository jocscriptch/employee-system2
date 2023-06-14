import AddDepartmentForm from "./addEmployeeForm";
import UpdateDepartmentForm from "./updateEmployeeForm";

export default function FormDepartment() {

  const flag = true;

  return(
   <div className="container mx-auto py-5">
    {flag ? <AddDepartmentForm />:<UpdateDepartmentForm/>}
   </div>
  )
}
