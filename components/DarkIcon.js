import React, {useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Context from '../Context/Context';


function DarkIcon(){

    const [context, setContext] = useContext(Context);

    return(
        <React.Fragment>  
            <FontAwesomeIcon icon={context.theme === 'light' ? faMoon : faSun} id="dark-icon" className='dark-icon' onClick={() => {context.theme === 'light' ? localStorage.setItem("theme", 'dark') : localStorage.setItem("theme", 'light');setContext({...context, theme: context.theme === 'light' ? 'dark' : 'light'})}}>
            </FontAwesomeIcon>
        </React.Fragment>
    );
}

export default DarkIcon;