import React from 'react'
import { Button, TextField } from "@mui/material";
import { useState } from 'react'
import { useTodo } from '../../context/index';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <TextField
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-lg px-5 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            ></TextField>
            <div className="ml-2 my-auto">
            <Button variant="contained" type='submit' className="Mui-focusVisible">
                Add
                </Button>
            </div>
        </form>
    );
}

export default TodoForm;

