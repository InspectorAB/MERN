import { Component } from "react";
import ShowData from "./ShowData";


export default class GetData extends Component{
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          isLoading: true,
          error: null
        };
      }
    

      //lifecycle function
      componentDidMount() {
        this.fetchData();
      }

    
      fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(usersData => {
            this.setState({ users: usersData, isLoading: false });
          })
          .catch(error => {
            this.setState({ error: error.message, isLoading: false });
          });
      };
    
      render() {
        const { users, } = this.state;

    
        return (
          <div>
            <h1>User List</h1>
            <ShowData sdata={users}/>
            {/* <ul>
              {users.map(user => (
                <li key={user.id}>
                  <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                  ,<strong>UserName:</strong> {user.username}
                </li>
              ))}
            </ul> */}
          </div>
        );
      }
}