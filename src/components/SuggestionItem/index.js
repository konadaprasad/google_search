// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {todoList, deleteUser} = props
  const {id, suggestion} = todoList

  const deleteButton = () => {
    deleteUser(suggestion)
  }
  return (
    <li className="card-item">
      <p className="title">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={deleteButton}
      />
    </li>
  )
}
export default SuggestionItem
