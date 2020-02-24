    import React from 'react'

    export default function Todo({todo, toggle}) {
        function handleClick(){
            toggle(todo.id)
        }
        return (
            <div>
                <label>
                    <input type = "checkbox" checked= {todo.complete} onChange = {handleClick}/>
                {todo.name}
                </label>
            </div>
        )
    }