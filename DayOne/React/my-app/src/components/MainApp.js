import { Component } from "react";
import Header from "./HeaderApp";
import Footer from "./FooterApp";
import AddUser from "./AddUser";
import Users from "./Users";
import MaterialComponent from "./Material";

export default class MainApp extends Component{

    //presentation components are only designed for only one component 
    //for a particular component on the UI
    // somebody else has to provide state and data

    // called only once
    componentDidMount(){
        console.log("during launch");
        const json = localStorage.getItem('users')
        const userData = JSON.parse(json)
        if(userData){
            this.setState(() =>{
                return{
                    userData:userData
                }
            })
        }
    }

    //local storage capacity is 4 MB
    // cookie is 4KB

    // called every time when state changes

    // stringify to persist data
    // parse to display
    componentDidUpdate(){
        const json = JSON.stringify(this.state.userData);
        localStorage.setItem("users",json);
        console.log("update");
    }



    state={
          headerData:'Welcome to Header',
         footerData:'Welcome to Footer',
         userData:[]
    }
// adding the user

addUser=(data)=>{
    this.setState((prevState)=>{

        return{
            userData:prevState.userData.concat(data)
        }
    })
}
//delete all

deleteAll=()=>{
    this.setState(()=>{
        return {
            userData:[]
        }
    })
}
// delete single

deleteOne=(user)=>{
 this.setState((prevState)=>{
     return{
         userData:prevState.userData.filter((us) => user !== us)
     }
 })
}
render(){
      return(
            <div>
                <Users udata={this.state.userData}
                da={this.deleteAll}
                hasData={this.state.userData.length > 0}
                dOne={this.deleteOne}
                />
                <Header hdata={this.state.headerData}/>
                <p>MainApp Component</p>
                <AddUser au={this.addUser}/>
                <Footer fdata={this.state.footerData}/>
                <MaterialComponent/>
            </div>
           
        )
    }
}

