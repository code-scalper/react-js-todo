import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const Todos = (props) => {

    return props.todos.map((todo, index) => <TodoItem key={`todo-${index}`} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />)
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos
