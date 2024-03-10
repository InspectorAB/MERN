import React, { Component } from 'react'
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";

export default class RestApp extends Component {



  componentDidMount(){
    axios
    .get(URL)
    .then(response => response.data)
    .then(data => {
      this.setState({data: data});
        console.log(data);
    });
  }


  render() {
    const data = this.state;
    return (
      <div>RestApp</div>
    )
  }
}
