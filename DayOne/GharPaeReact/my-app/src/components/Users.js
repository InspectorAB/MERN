import { Component } from "react";
import User from "./User";
import GetData from "./GetData";

export default class Users extends Component{
    render(){
        return(
            <div>
                {
                    this.props.uData.map((ud) => <User userNew={ud}/>)
                }
                <GetData/>
            </div>
        )
    }
}