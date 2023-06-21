import { useNavigate } from "react-router-dom";
import "./EditOnlyForm.css";


export const EditOnlyForm =()=> {
const navigate = useNavigate();
    
    return <div class="divide">
        <div style={{backgroundColor:"AntiqueWhite ", width: "75%",  height: "1050px"}} >

        <div class="well" style={{width: "30%", height: "1050px" , float: "left"}}>
        </div>
        <ul></ul>
        
         <h1>Register</h1> 
         <ul></ul> 
    <form>
    <h3>Name</h3>
    <input type="text" required ="required" placeholder=" Enter your Name"/> <ul></ul> 
    <h3>Username</h3>
    <input type="text"  required ="required" placeholder=" Enter your Username"/><ul></ul>
    <h3>Email</h3>
    <input type="email"  required ="required" placeholder=" Enter your  Email"/><ul></ul>
    <h3>Password</h3>
    <input type="text"  required ="required" placeholder=" Enter your Password"/><ul></ul>
    <h3>Confirm Password</h3>
    <input type="text"  required ="required" placeholder=" Please Confirm"/>

<h2><input class="box" 
 required ="required"
style={{border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black", boxShadow:"4px 8px 16px black"}}
type="checkbox"/> I fully agree with the applications terms and conditions. </h2>
 </form>
 <ul></ul>

 <button
 style={{boxShadow:"4px 8px 16px black"}}
  type="submit" onClick={()=>navigate("/readonly")}> Create Account</button>

   <center class="man"> <h2>**Powered by Mandelite**</h2></center>
    
    </div>
    </div> 
}
