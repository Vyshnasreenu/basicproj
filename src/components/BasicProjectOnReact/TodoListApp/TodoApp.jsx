import { DeleteOutline, EditNotifications } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
const TodoApp = () => {
  const [TodoData, setTodoData] = useState(
    {
      inputdata: "",
      inputStore: [{ id: 0, value: "TODO APP" }],
      isSubmit: false,
    })

  const onchangeHandler = (event) => {
    const NewTodo = { ...TodoData }
    NewTodo.inputdata = event.target.value;
    setTodoData(NewTodo)
  }

  const AddData = () => {
    const NewTodo = { ...TodoData }
    if (NewTodo.inputdata === "") {
      return NewTodo;
    }
    let isSame;
    for (let ind = 0; ind < NewTodo.inputStore.length; ind++) {
      const element = NewTodo.inputStore[ind].value;
      if (NewTodo.inputdata === element?.toLowerCase()) {
        isSame = true;
      }
    }
    if (isSame) {
      alert("Todo has already taken!!")
      NewTodo.inputdata = ""
      setTodoData(NewTodo)
    }
    else {
      NewTodo.inputStore.push({ id: NewTodo.inputStore.length, value: NewTodo.inputdata })
      NewTodo.inputdata = ""
      setTodoData(NewTodo)
    }
  }

  const EditTodo = (event, index) => {
    event.preventDefault();
    const value = TodoData.inputStore[index].value
    setTodoData((prevData) => {
      const newData = [...prevData.inputStore];
      newData.splice(index, 1)
      return {
        ...newData,
        inputdata: value, inputStore: newData
      }
    })

  }
  const DeleteTodo = (index) => {
    //  setTodoData((prevData)=>{
    //    const newData=[...prevData.inputStore]             //this code also  work...
    //    newData.splice(index,1)
    //    return{
    //     ...newData, inputStore:newData
    //    }
    //  })
    const newData = { ...TodoData }
    newData.inputStore.splice(index, 1)
    setTodoData(newData)
    alert("Deleted succussfully!!!")
  }
  return (
    <div className='h-100'>
      <div>
        <h1>TodoListApp</h1>
      </div>
      <div className='m-5 row'>
        <div className='col-10 '>
          <input type="text" className='form-control bg-dark text-warning p-2' value={TodoData.inputdata} onChange={onchangeHandler} />
        </div>
        <div className='col-1 '>
          <Button variant='contained' color="secondary" onClick={AddData} >ADD</Button>
        </div>
      </div>
      {TodoData.inputStore.map((item, index) => {
        return (
          <div key={index}>
            <div className='d-flex justify-content-center' >
              <div className="m-2 col-6" style={{ backgroundColor: "gray", borderRadius: "10px" }}>
                <a className='nav-link m-1' href=' #'>{item.value}</a>
              </div>
              <div className='d-flex'>
                <div className='p-2 '>
                  <Button variant='contained' color='info' onClick={(event) => EditTodo(event, index)} startIcon={<EditNotifications />} />
                </div>
                <div className='p-2'>
                  <Button variant='contained' color='error' onClick={() => DeleteTodo(index)} startIcon={<DeleteOutline />}></Button>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default TodoApp