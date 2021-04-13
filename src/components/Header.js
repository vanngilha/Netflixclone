import React from 'react';
import '../styles/Header.css';

export default({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <b>Christopher</b>
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfWu5P3XRq40XTOquHgtUR_TZ63XAu2hvQQ&usqp=CAU" />            
                </a>
            </div>
        </header>
    );
}