// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {todoList: suggestionsList, searchInput: ''}

  textChange = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    console.log(searchInput)
  }

  deleteUser = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {todoList, value, searchInput} = this.state

    const searchResult = todoList.filter(user => {
      const text = user.suggestion.toLowerCase()
      return text.includes(searchInput)
    })

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="inner-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input1"
              type="search"
              onChange={this.textChange}
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul className="items-container">
            {searchResult.map(eachitem => (
              <SuggestionItem
                todoList={eachitem}
                key={eachitem.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
