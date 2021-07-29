import React ,{useState} from 'react';
import './NavBar.scss';


const NavBar= ()=>{

    const [items, setItems] = useState([
        "Home",
        "About",
        "Researches",
        "Portfolio",
        "Contact Us"
    ]);

    


    const render = () =>{
        return (
            <>
                <nav>
                    <ul>
                        {
                            items.map((item,key)=>{
                                return (
                                <li id={key}>
                                    <p>{item}</p>
                                </li>)
                            })
                        }
                    </ul>
                </nav>
            </>
        )
    }
    
return (
    <div className="content">
        {render()}
    </div>
    
)

};

export default NavBar;