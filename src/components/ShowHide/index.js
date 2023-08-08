import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
    state={clicked:false}

    displayFirstname=()=>{
       if (clicked===false){
           this.setState(prevState=>(
               {clicked:true}
           ))
       }else{
           this.setState(prevState=>{
               {clicked:false}
           })
       }
    }

        displayLastname=()=>{
       if (clicked===false){
           this.setState(prevState=>(
               {clicked:true}
           ))
       }else{
           this.setState(prevState=>{
               {clicked:false}
           })
       }
    }

    

    
  render() {
      const {clicked}=this.state
      let firstName;
      if (clicked===true){
         firstName=<div className="first-last-name-card">Joe</div>
      }else{
          firstName=null
      }

      let lastName;
      if (clicked===true){
         lastName=<div className="first-last-name-card">Jonas</div>
      }else{
          lastName=null
      }
    return (
      <div className="bg">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="card">
          <div className="first-last-name">
            <div className="btn-align">
              <button className="first-last-name-button" type="button" onClick={this.displayFirstname}>
                Show/Hide Firstname
              </button>
            </div>
            {this.firstName}
            
          <div className="first-last-name">
            <div className="btn-align">
              <button className="first-last-name-button" type="button" onClick={this.displayLastname}>
                Show/Hide Lastname
              </button>
            </div>
            {this.lastName}

            <div className="first-last-name-card">Jonas</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
