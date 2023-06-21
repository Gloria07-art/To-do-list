import { useNavigate } from "react-router-dom";
import "./ReadOnly.css";

export const ReadOnly =()=>

 {
    const navigate = useNavigate();
    return <div  class="divide">
        <div style={{backgroundColor:"AntiqueWhite ", width: "70%",  height: "1050px"}}>

        <div class="well" style={{width: "30%", height: "1050px" , float: "left"}}>
        </div>
        <h1>To Do List</h1>
    <h2 className="log">User Login</h2>
    <form>
        <input type="text"  required ="required" placeholder="Username"/> <ul></ul>
        <input type="text"  required ="required" placeholder="Password"/>
    </form> <ul></ul>
    <button type="submit" 
    style={{marginTop:"30px", marginBottom:"60px", boxShadow:"4px 8px 16px black"}}
     onClick={()=>navigate("/mydashboard")}>Login</button>

    <h3> Forgot Username Password?</h3>
    <h3> Create Your Account:</h3> <button style={{boxShadow:"4px 8px 16px black", backgroundColor:"aquamarine"}} onClick={()=>navigate(-1)}> Register </button>
    <center class="mandel"> <h2>**Powered by Mandelite**</h2></center>
    </div>
    </div>
}
