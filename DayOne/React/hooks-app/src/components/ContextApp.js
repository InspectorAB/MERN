
import React,{useContext, useState} from 'react';
import { createContext } from 'react';
const appContext = createContext();


const udata = {
    uname:"admin",email:"admin@admin.com",salary:"1231",
        
}

function ContextApp(props) {
    const [user,setUsers] = useState(udata);
  return (
    <div>
        <appContext.Provider value={user}>
        <Employee/>
        </appContext.Provider>
    </div>
  )
}

function Employee(props) {
    const empContext = useContext(appContext);
    return (
      <div>
        Employee : {empContext.uname}
        <Salary/>
      </div>
    )
  }

  function Salary(props) {
    const salContext = useContext(appContext);
    return (
      <div>
        Salary : {salContext.salary}
        <SubSalary/>
     </div>
    )
  }

  function SubSalary(props) {
    const subSalContext = useContext(appContext);
    return (
      <div>
        Sub-Salary : {subSalContext.salary}
     </div>
    )
  }


export default ContextApp;
  