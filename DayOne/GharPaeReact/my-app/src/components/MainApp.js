import { Component } from "react";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
import Users from "./Users";






export default class MainApp extends Component{

    render(){
        const headerData = 'Welcome to header'
        const footerData = 'Welcome to footer'
        const userData = ["Admin","Manger","QA"]

        return(
            <div>
                <HeaderApp hdata={headerData}/>
                <p> Main App Component</p>
                <Users uData={userData}/>
                <FooterApp fdata={footerData}/>
            </div>
        )
    }

}