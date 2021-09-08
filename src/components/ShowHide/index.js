import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showHideFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card">
            <button className="show-hide-btn" onClick={this.showHideFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name-card">Joe</p>}
          </div>
          <div className="card">
            <button className="show-hide-btn" onClick={this.showHideLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name-card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
