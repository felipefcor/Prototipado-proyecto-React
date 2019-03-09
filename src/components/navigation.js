import React, { Component } from 'react';


const servicesList = [
    { 'id': 1, 'name': 'Servicios y especialidades', 'url': './Services'},
    { 'id': 2, 'name': 'Nosotros', 'url': './AboutUs' },
    { 'id': 3, 'name': 'Pedir cita', 'url': './Appointment' },
    { 'id': 4, 'name': 'Blog', 'url': './Blog' },
    { 'id': 4, 'name': 'Galería', 'url': './Gallery' },
];

class Lists extends Component {
    
    render() { 
        return (
            <li><a href={this.props.url}>{this.props.name}</a></li>
        );
    }
}
 
class List extends Component {
    
    render() { 
        return (
            <nav>
               <ul>
                   {this.props.servicesList.map(function(list) {
                       return (
                           <Lists url={list.url} name={list.name} />
                       );
                   })}
               </ul>
           </nav>
       );
    }
}
 


 export default class Listexport extends Component {
    
    render() { 
        return (
            <div>
                <List servicesList={servicesList} />
             </div>
          );
    }
}
 

