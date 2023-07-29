import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
    state={clicked:false}

    displayFirstname=()=>{
        let display;
       if (clicked===false){
           this.setState({clicked===true})
           return display=<div className="first-last-name-card">Joe</div>
          </div>
       }
    }

  render() {
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
            {this.diaplay}
            
          <div className="first-last-name">
            <div className="btn-align">
              <button className="first-last-name-button" type="button">
                Show/Hide Lastname
              </button>
            </div>

            <div className="first-last-name-card">Jonas</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
