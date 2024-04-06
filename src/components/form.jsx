import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as generateId } from 'uuid';


export const Form = ({ setTodos }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target[0].value;
        const status = e.target[1].value;

        const newTodo = {
            id: generateId(),
            status,
            task,
            date: new Date().toLocaleDateString(),
        };

        axios.post('http://localhost:3000/todos', newTodo)

            .then(() => {
                toast.success('todo added successfully')
                setTodos((prev) => [...prev, newTodo]);

            }) .catch((err) => toast.error('failed'));
            e.target[0].value = ''; 
            
    };


    return (
        <form onSubmit={handleSubmit} className='d-flex justify-content-center gap-3 my-5 '>
            <input className='form-control shadow' placeholder='add new task...' type="text" />
            <select className='form-select w-5  0 shadow'>
                <option value="important">Important</option>
                <option value="daily">Daily</option>
                <option value="job">Job</option>
            </select>

            <button className='btn btn-primary'>Send</button>


        </form>

    )
}


export default Form;