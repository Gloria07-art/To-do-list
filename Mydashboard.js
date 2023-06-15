import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./mock-data.json";


export const Mydashboard =()=> {

const [stuff, setStuff] = useState(data);

    const navigate = useNavigate();
    
const [search,setSearch] =useState("");

    return <div>
<h1> To Do list</h1>
<h3>"All life demands struggle. Those who have everything given to them become lazy, <br>
</br>selfish, and insensitive to the real values of life. The very striving and hard work<br></br>
 that we so constantly try to avoid is the major building block in the person we are today."</h3>
<form>
<input onChange = {(event => setSearch (event.target.value))} type="text" placeholder="Search"/>
</form>
 <ul></ul>
<div>

    <li> <input type="text" placeholder="Write your task"/> <button>delete</button> <button>update</button></li>
    <li> <input type="text" placeholder="Write your task"/> <button>delete</button> <button>update</button></li>
    <button>Add</button>
</div>
<button type="submit" onClick={()=>navigate(-1)}>log out</button>
    </div>
}