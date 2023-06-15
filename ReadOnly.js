import { useNavigate } from "react-router-dom";
import "./ReadOnly.css";

export const ReadOnly =()=>

 {
    const navigate = useNavigate();
    return <div  class="divide">
        
         <div style={{backgroundColor:"AntiqueWhite ", width: "30%",  height: "1050px"}} >
        <h1>To Do List</h1>
    <h2>User Login</h2>
    <form>
        <input type="text" placeholder="Username"/> <ul></ul>
        <input type="text" placeholder="Password"/>
    </form> <ul></ul>
    <button type="submit"  onClick={()=>navigate("/mydashboard")}>Login</button>

    <h3> Forgot Username Password?</h3>
    <h3> Create Your Account:</h3> <button onClick={()=>navigate(-1)}> Register </button>
    <center> <h2>Powered by Mandelite</h2></center>
    </div>
    </div>
}