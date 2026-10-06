import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
// import 'loaders.css/src/animations/pacman.scss';


const ContactModal = () => {
    console.log(PacmanLoader)
    return (
        <div className="loader-container">
            <PacmanLoader.default color="#ffcc00" size={50} />;
        </div>
    )
}

export default ContactModal
