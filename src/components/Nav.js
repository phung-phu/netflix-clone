import React, { useState, useEffect,} from 'react';
import '../style/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll")
        };
    }, []);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix logo"
            />
            <img 
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                alt="Netflix logo"
            />
        </div>
    );
}

export default Nav