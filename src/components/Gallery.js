import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'


export default class Gallery extends Component {
   
    render (){
    let urls = [
   
        "https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-0.3.5&s=a48f318b6b41b2e1c8343f43c66df31d&auto=format&fit=crop&w=1534&q=80",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-0.3.5&s=f3ba719b26240ac066b0a645c9387d87&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-0.3.5&s=2d6c4262761e367e15cc4c0675591fad&auto=format&fit=crop&w=1500&q=80"
        ]
      
    
        return (
          <div>
               <NavBar left="true" title= "Imágenes y vídeos" icon="backward"  />
              
               <div className="card">
                 <ul className="list-unstyled list-group ">
                  {urls.map(url => 
                  <li>
                    <Styles 
                        imageIndex ="true"
                        src={url}
                    > 
                  </Styles>
                  </li>
                  
                  
                  )}
                 </ul> 
               </div>
          </div>
        )
}
}
