import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'


export default  class Blog extends Component {
    
    render() { 

         const post = [
            {
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                date: "14 abril"
            },
            {
                content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                date: "21 noviembre"
            }

       ]

       

        return (

            

            <div>
      
              <NavBar left="true" title= "Blog" icon="backward"  />
             

              <div className="card">

                  <Styles title="true">
                     Terapias manuales con ayuda de agujas
                  </Styles>

                
                   {post.map(posts => 
                    <li 
                    key={posts}
                    
                    className="list-group-item"
                    > 
                    
                    <h3>{posts.content}</h3>
                    <h4>{posts.date}</h4>
                         
                    
                  </li>
                  ) }

                              
              </div>
      
      
            </div>
      
        )
    }
}
