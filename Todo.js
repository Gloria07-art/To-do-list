import React, { useState } from "react";
import TodoForm from "./TodoForm";


function Todo({stuffs, completeStuff, removeStuff, updateStuff}) {

const [edit, setEdit] = useState({
    id: null,
    value: ''
});

const submitUpdate = value =>{
    updateStuff(edit.id, value);
    setEdit({
        id: null,
        value:''
    });
};

if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
}

return stuffs.map((stuff, index) => (
<div 
className={stuff.isComplete ? 'stuff-row complete' :
'stuff-row'} key={index }>

<div 

key={stuff.id} onClick={() => completeStuff(stuff.id)}
> {stuff.text}
</div>
<div>

<button onClick={() => removeStuff(stuff.id)}

className="delete">delete</button>

<button oncClick={() => setEdit({ id: stuff.id, value: stuff.text })}
className="edit-button">
    update</button>
</div>
</div>
    ))
};

export default Todo;
