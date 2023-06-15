import { NavLink } from 'react-router-dom';
import React from "react";

export const Navbar =()=> {


    return <nav> 
<button>
<NavLink  to= '/'>EditOnlyForm
</NavLink>
</button>

<button>
<NavLink to='readonly'> ReadOnly
</NavLink> </button>

    </nav>
}