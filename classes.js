// // organize all your data & also give it behavior
// const UserObject = {
//     firstNanme: 'Michael',
//     lastName: 'Law',
//     signup: function () {
//         console.log(this.firstNanme, 'signed up!')
//     }
// }

// //  classes are data structures that allows us to create blue
// // constructor functions tell Js what any given instance of User consists of
//     // constructor() function is called automatically any time you say "new" in JS
//         // .this is how you make classes
//         // this = an instance of User
//         // a user is a data structure that has these attributes : name, email, and password

// class User {
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }
//     // you can now attach functions to the objects itself
//     signup() {
//         console.log(this.anme , 'signed up!')
//     }
// }

// //  we want to make it so that the class is linked to User functions (super class)
// class AdminUser extends User {
//     constructor(name, email, password) {
//         super(name, email, password)
//         // we specify whats dif under super
//         this.admin = true;

//     }
// }

// // when we want to create a new user 
// let user = new AdminUser('Olivia' , 'oliviatmanalastas@gmail.com' , '1111')
// user.signup()

// console.log(UserObject)
// console.log(user.name)
// console.log(user.admin)


// 
// CLASS COMPONENTS
// 
import React from 'react'
// <App name=""
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <h2>Count is {this.state.count}</h2>
                <button onClick={()=> {this.setState({count: this.state.count+1})}}>CLICK ME</button>
            </div>
        )
    } 
}
export default App;
