import React from 'react';  

const HomePage = () => {    
     
return (        
        <div className="home-page">            
            <h1>Welcome to the Home Page</h1>            
            <p>This is a simple React application using Vite.</p>            
            <p>Click on the links below to learn more:</p>            
            <ul>                
                <li><a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite Documentation</a></li>                
                <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Documentation</a></li>            
            </ul>        
        </div>    
    ); 
}

export default HomePage;