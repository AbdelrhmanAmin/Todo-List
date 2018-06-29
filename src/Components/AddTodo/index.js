import React, {Component} from 'react';
import './style.css';
class AddTodo extends Component {
  state = {
    TodoValue : ''
  }
  onChange = (e) =>{
    const { value } = e.target;
    this.setState(() => {
      return { TodoValue: value}
    })
  }
  onAdd=()=>{
    this.props.add(this.state.TodoValue);
    this.setState(() => {
      return { TodoValue: ''}
    })
  }
  render(){
    return(
      <div className="add-todo">
        <input type="input" value={this.state.TodoValue} className="add-todo_input" onChange={this.onChange} autoFocus={true}/>
        <button className="add-todo_submit" onClick={this.onAdd} >add</button>
      </div>
    )
  }
}
export default AddTodo;
