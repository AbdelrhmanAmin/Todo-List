import React, {Component} from 'react';
import './style.css';

class TodoList extends Component {
  render() {
    return(
      <ul className="todo-list">
        { this.props.todos.map( ({value, ts, status}) =>
            <li className="todo" key={ts}>
              <input type="checkbox" className="todo_check" defaultChecked={status}/>
              <span className="todo_content">{value} </span>
              <div className="todo_actions">
                <button className="remove" onClick={ e => this.props.remove(ts) }>delete</button>
              </div>
            </li>
          )
        }
      </ul>
    )
  }
}
export default TodoList;
