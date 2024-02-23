import React, { useState } from 'react';
import "./style.css";

const Todo = () => {

const [activity,setActivity]=useState(" ")
const [List,setList]=useState([])

let handleClick=()=>{
setList((List)=>{
    const updateList=([...List,activity])
    console.log(updateList)
    setActivity("")
    return updateList
})

}

let handleDelete=(i)=>{
const updateListData=List.filter((item,id)=>{
    return i!=id;
})
setList(updateListData)
}

let DeleteAll=()=>{
    setList([])
}

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <div className='input-box'>
        <input
        type='text'
        placeholder='Add Items'
        value={activity}
        onChange={(e)=>{setActivity(e.target.value)}}
        />
        <button onClick={handleClick}>ADD</button>
      </div>

      <div className='list-box'>
      <h3>Item List</h3>
      {List!=[] && List.map((data,i)=>{
        return(
            <>
            <div key={i} className='item-list'>
            <h4 className='item'>
                {data}
            </h4>
            <button onClick={()=>handleDelete(i)}>Delete</button>
            </div>
            </>
        )
      })}
      </div>
      {List.length>=1 && <button className='delall' onClick={DeleteAll}>Delete All</button>}
    </div>
  )
}

export default Todo
