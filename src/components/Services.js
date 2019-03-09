import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'



export default class Services extends Component {

    

    render () {

        let imageUrl = 'https://picsum.photos/100/?random';

        const servicesContent= [
            {
                id: 1,
                title: "Tratamiento con ganchos y agujas",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                price: "30€"
            }    
           ,
           
           {
                id: 2,
                title: "Rehabilitación",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                price: "40€"

            },

           {
                id: 3,
                title: "Fisioterapia acuática",
                content: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                price: "25"
           },

           {

                id: 4,
                title: "Fisioterapia asistida con animales",
                content: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                price: "25"
            }
                  
    
        ]       
         

       
        
    
        return( 

          <div>
        
                <NavBar left="true" title= "Servicios y especialidades" icon="backward"  />
               
                {servicesContent.map(service => 
                      <li 
                      key={service.id}
                      
                      className="list-group-item"
                      > 
                       <Styles title="true">
                            {service.title}
                      </Styles>
                      
                      <Styles 
                            imageCenter ="true"
                            src={imageUrl}
                        >
                      </Styles>
                     
                     

                      <h3>{service.content}</h3>
                      <h4>{service.price}</h4>
                           
                      
                    </li>) }
               

          <ServicesExample /> 

          </div>

     )
  }
}

 


function ServicesExample(){

   let imageService= 'https://www.efisioterapia.net/sites/default/files/imagen_cursos/curso-de-ganchos.jpg'

    return (
  
            <div>
                <NavBar left="true" title= "Técnica de ganchos y agujas" icon="backward"  />
            
                <div className="card">

                    <Styles title="true">
                       Características
                    </Styles>

            
                    <Styles 
                        imageServices ="true"
                        src={imageService}
                     > 
                    </Styles>
                     
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>      
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>      
                </div>
            </div>
    )
  
  }

   