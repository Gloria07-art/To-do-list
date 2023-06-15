import { useNavigate } from "react-router-dom";
import "./EditOnlyForm.css";


export const EditOnlyForm =()=> {
const navigate = useNavigate();
    
    return <div class="divide">
        <div style={{backgroundColor:"AntiqueWhite ", width: "75%",  height: "1050px"}} >

        <div class="well" style={{width: "30%", height: "1050px" , float: "left"}}>
        </div><ul></ul>
        
         <h1>Register</h1> <ul></ul> 
    <form>
    <h3>Name</h3>
    <input type="text" placeholder=" Enter your Name"/> <ul></ul> 
    <h3>Username</h3>
    <input type="text" placeholder=" Enter your Username"/><ul></ul>
    <h3>Email</h3>
    <input type="email" placeholder=" Enter your  Email"/><ul></ul>
    <h3>Password</h3>
    <input type="text" placeholder=" Enter your Password"/><ul></ul>
    <h3>Confirm Password</h3>
    <input type="text" placeholder=" Please confirm"/>
<h2><input class="box" type="checkbox"/> I fully agree with the applications terms and conditions </h2>
 </form><ul></ul>
 <button type="submit" onClick={()=>navigate("/readonly")}> Create Account</button>
   <center> <h2>Powered by Mandelite</h2></center>
    
    </div>
    </div> 
}