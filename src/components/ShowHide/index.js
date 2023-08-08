import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstClicked: false, lastClicked: false}

  displayFirstname = () => {
    const {firstClicked} = this.state
    if (firstClicked === false) {
      this.setState({firstClicked: true})
    } else {
      this.setState({
        firstClicked: false,
      })
    }
  }

  displayLastname = () => {
    const {lastClicked} = this.state
    if (lastClicked === false) {
      this.setState({lastClicked: true})
    } else {
      this.setState({
        lastClicked: false,
      })
    }
  }

  render() {
    const {firstClicked, lastClicked} = this.state
    let firstName
    if (firstClicked === true) {
      firstName = <div className="first-last-name-card">Joe</div>
    } else {
      firstName = <div className="first-last-name-card-null">Joe</div>
    }

    let lastName
    if (lastClicked === true) {
      lastName = <div className="first-last-name-card">Jonas</div>
    } else {
      lastName = <div className="first-last-name-card-null">Joe</div>
    }
    return (
      <div className="bg">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="card">
          <div className="first-last-name">
            <div className="btn-align">
              <button
                className="first-last-name-button"
                type="button"
                onClick={this.displayFirstname}
              >
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
          </div>
          <div className="first-last-name">
            <div className="btn-align">
              <button
                className="first-last-name-button"
                type="button"
                onClick={this.displayLastname}
              >
                Show/Hide Lastname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
