import React ,{useState,useEffect} from 'react';
import './NavBar.scss';


const NavBar= ()=>{

    const [itmes, setItems] = useState([]);

    useEffect(()=>{
        setItems([
            "Home",
            "About",
            "Researches",
            "Portfolio",
            "Contact Us"
        ]);

    });


    const render = () =>{
        return (
            <>
                <nav>
                    <ul>
                        {
                            itmes.map((item,key)=>{
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