

const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <span>{todo.status}</span>
      <span>{todo.task}</span>

      <div className="btn-group">
        <button onClick={()=> setIsEdit(true)} className="btn btn-warning btn-sm">edit</button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">delete</button>
      </div>

    </>
  );
};

export default ContentMode;