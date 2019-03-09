import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'



export default class  AboutUs extends Component {
   
    render (){

            const workers = [
                {
                    id: 1,
                    name: "Don Juan Snow",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                    
                },
                {
                    id: 2,
                    name: "Doña Laura Casas",
                    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                    
                },
                {   
                    id: 3,
                    name: "Doña Rosa López",
                    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                }
        ]

            
            let imageUrl= 'https://picsum.photos/100/?random'
            let imgLocalization ='https://cdn.vox-cdn.com/thumbor/6fuJjC-vr4m-Yaf4mkmU7ZfdNbY=/0x0:1161x713/1200x800/filters:focal(435x243:619x427)/cdn.vox-cdn.com/uploads/chorus_image/image/58662765/Screen_Shot_2018_02_12_at_9.34.36_AM.0.png'
                        

            return (
                <div>
                    <NavBar left="true" title= "Nosotros" icon="backward"  />
                    
                    <div className="card" >

                          {workers.map(worker => 
                            <li 
                            key={worker.id}
                            
                            className="list-group-item"
                            > 
                            <Styles title="true">
                            {worker.name}
                            </Styles>

                           <Styles 
                            imageCenter ="true"
                            src={imageUrl}
                            > 
                            </Styles>
                             <h2>{worker.content}</h2>   
                            
                            </li>) }
               
                                                 
                    
                     </div>
                    
                     <div> 

                        <Styles title="true">
                            Localización
                        </Styles>

                        <Styles 
                            imageIndex ="true"
                            src={imgLocalization}
                            >                              
                                            
                        </Styles>


                        </div>

                        <div>
                        <h4>Teléfono: 6000000</h4>
                        <h4>Twitter: @nosotros</h4>
                        </div>

                    </div>
            )
     }
 }

/* /* 
                        <div className="card">

                            <Styles title="true">
                            Doña Laura Casas
                            </Styles>

                           <Styles 
                            imageCenter ="true"
                            image={imageUrl}
                            > 
                            </Styles>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                       
                        </div>

                        <div className="card">
                           
                            <Styles title="true">
                            Doña Rosa López
                            </Styles>

                           <Styles 
                            imageCenter ="true"
                            image={imageUrl}
                            > 
                            </Styles>

                       
                           <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                     </div> 

                   <div> 

                        <Styles title="true">
                            Localización
                        </Styles>

                         <Styles 
                            imageIndex ="true"
                            image={imgLocalization}
                            >                              
                                            
                        </Styles>

                        
                    </div>

                    <div>
                        <h4>Teléfono: 6000000</h4>
                        <h4>Twitter: @nosotros</h4>
                    </div>


             </div>
            */

