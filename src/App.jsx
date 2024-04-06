import { useEffect, useState } from "react";
import Form from "./components/form";
import Loader from "./components/loader";
import ListItem from "./components/listItem";
import axios from "axios";


function App() {

  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then((res) => setTodos(res.data))
      .catch((err)=> console.log(err));
      
  }, []);

  return ( 
    <>
      <div className="container">
        <div className="container p-md-3 ">

          <h1 className="text-center  mt-5">Todo
            <span className="text-warning m-2">Crud</span> </h1>
        </div>

        <Form setTodos={setTodos}/>

        <ul className="list-group d-flex text-center ">
          {!todos && <Loader />}

          {todos?.map((todo) => (
            <ListItem 
            key={todos.id} 
            todo={todo} 
            allTodos={todos} 
            setTodos={setTodos} />
          ))}
  
        </ul>
      </div>
    </>
  );
}

export default App
