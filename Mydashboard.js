import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mydashboard.css";
import TodoForm from './TodoForm'
import Todo from "./Todo";

export function Mydashboard() {

const navigate = useNavigate();

const [stuffs, setStuffs] = useState([]);

const addStuff = stuff => {
    if(!stuff.text || /^\s*$/.test(stuff.text)) {
        return;
    }

const newStuffs = [stuff, ...stuffs];

setStuffs(newStuffs);
};


const updatedStuff = (stuffId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return; 
}
setStuffs(prev => prev.map(item => (item.id === stuffId ? newValue : item)));
};



const removeStuff =id => {
    const removeArr = [...stuffs].filter(stuff => stuff.id !==id);

setStuffs(removeArr);
};

   
const completeStuff = id => {
    let updatedStuffs = stuffs.map(stuff => {
        if (stuff.id === id) {
            stuff.isComplete = !stuff.isComplete;
        }
    return stuff;
});

    setStuffs(updatedStuffs);
};
    
const [search,setSearch] =useState("");






 return( <div className="back">
      
        <div style={{backgroundColor:"AntiqueWhite ", width: "97%",  height: "1100px"}}>
        <h1 class="top"> To Do list</h1>
<h3 class="words">"All life demands struggle. Those who have everything given to them become lazy, <br>
</br>selfish, and insensitive to the real values of life. The very striving and hard work<br></br>
 that we so constantly try to avoid is the major building block in the person we are today."</h3>
<TodoForm onSubmit= {addStuff} />
   
<Todo
stuffs={stuffs} 
completeSuff ={completeStuff}
removeStuff={removeStuff} 
updatedStuff ={updatedStuff}
/>

<button 
type="submit" 
class="out"
onClick={()=>navigate(-1)}>log out</button>

</div>
        
</div>

   
 );
}

