import React from 'react'

const EditMode = ({todo, setIsEdit, handleEdit}) => {
  return (
    
<form onSubmit={handleEdit} className='edit'>
<select defaultValue={todo.status} className='form-select w-50 shadow'>
    <option value="Important">Important</option>
    <option value="Daily">Daily</option>
    <option value="Job">Job</option>
</select>
<input defaultValue={todo.task} className='form-control w-100 shadow' type="text" />

<div className='btn-group'>
    <button type='submit' className='btn btn-sm btn-success'>approve</button>
    <button type='button' onClick={()=> setIsEdit(false)} className='btn btn-sm btn-secondary'>cancel</button>
</div>

</form>

  )
}

export default EditMode;