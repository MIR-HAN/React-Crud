import axios from "axios";
import FormatDate from "./formatDate";
import ContentMode from "./ContentMode";
import EditMode from "./editMode";
import { useState } from "react";
import { toast } from "react-toastify";




const ListItem = ({ todo, setTodos, allTodos }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleDelete = () => {

        axios.delete(`http://localhost:3000/todos/${todo.id}`)
            .then(() => {
                const filteredTodos = allTodos.filter((item) => item.id !== todo.id);
                setTodos(filteredTodos);

                toast.info('todo removed')
            })
            .catch((err)=> toast.error('failed'))

    };

    const handleEdit = (e) => {
        e.preventDefault();

        const status = e.target[0].value;
        const task = e.target[1].value;

        axios.patch(`http://localhost:3000/todos/${todo.id}`, { status, task })
            .then(() => {
                const updated = { ...todo, task, status }

                const newTodos = allTodos.map((item)=> 
                item.id === updated.id ? updated :item
                );

                setTodos(newTodos);
                toast.info("successful")
// exit edit mode after changes
                setIsEdit(false);
            })
            .catch((err)=> toast.error('failed'))
    }

    return (
        <li className=" relative list-group-item d-flex justify-content-between gap-3 ">

            {isEdit ? (
                <EditMode
                    handleEdit={handleEdit}
                    todo={todo}
                    setIsEdit={setIsEdit} />
            ) : (
                <ContentMode
                    todo={todo}
                    handleDelete={handleDelete}
                    setIsEdit={setIsEdit} />
            )}

            <span className="date">{FormatDate(todo.date)}</span>
        </li>
    )
}

export default ListItem;

