import React from 'react';

function Profile (props){
   

    return (
        <div>
            <h1>{props.name} </h1>
            <h2>{props.bio}</h2>
            <h2>{props.profession}</h2> 
           <img src= {props.children}/>

        </div>

    )
}
export default Profile