
import User from "./User";





function Users(props){
    return(
        <div>
        {
            props.udata.map((ud) =>  <User key={ud} userNew={ud} duser={props.dOne}/>)
        }
      <button disabled={!props.hasData} onClick={props.da}>DeleteAll</button>
    </div>
    )
}

export default Users;