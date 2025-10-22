import React ,{useState,useEffect}from 'react'
import ToDo from "./components/ToDo";



const App = () => {
  const[item ,setItem] =useState('');
  const [list,setList] =useState(()=>{
    const saved = localStorage.getItem('todo-list');
    return saved ? JSON.parse(saved) : [];
  });

   useEffect(() => {
     localStorage.setItem("todo-list", JSON.stringify(list));
   }, [list]);

  const handleAdd = () => {
    if(item.trim() !== '')
      setList ([...list,item])
      setItem ('')

  }

  const handleDeleteAll =() =>{
    setList ([]);
  }

 const handleDelete = (indexToDelete) => {
   setList(list.filter((_, index) => index !== indexToDelete));
 };


  return (
    <div>
      <ToDo
        item={item}
        setItem={setItem}
        list={list}
        handleAdd={handleAdd}
        handleDeleteAll={handleDeleteAll}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App