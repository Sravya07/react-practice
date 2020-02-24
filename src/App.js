        import React, { useState, useRef, useEffect } from 'react';
        import TodoList from './TodoList'
        import uuidv4 from 'uuid/v4'

        function App() {
          const [todos, setTodos] = useState([])
          const todoNameRef = useRef()
          const LOCAL_KEY = 'todoApp.todos'

          useEffect(()=>{
            const stored = JSON.parse(localStorage.getItem(LOCAL_KEY))
            if(stored) setTodos(stored)
          },[])

          useEffect(()=>{
            localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
          },[todos])

          function toggle(id){
            const newList = [...todos]
            const todo = newList.find(todo=>todo.id===id)
            todo.complete = !todo.complete
            setTodos(newList)
          }

          function handleAddTodo(e) {
            const name = todoNameRef.current.value
            if (name === ' ') return
            // console.log(name)
            setTodos(prevTodos => {
              return[...prevTodos, {id:uuidv4(), name:name, complete:false}]
            })
            todoNameRef.current.value =null
          }
          return (
            <>
              <TodoList todoList={todos} toggleTodo = {toggle} />
              <input ref={todoNameRef} type="text" />
              <button onClick={handleAddTodo}> Add Todo</button>
              <button>Clear Completed Todos</button>
              <div> 0 left to do</div>
            </>
          )
        }

        export default App;