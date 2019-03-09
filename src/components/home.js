import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'
import { BrowserRouter as HashRouter, Route, NavLink } from "react-router-dom";
import Services from './Services'; 
import AboutUs from './AboutUs';
import Appointment from './Appointment';
import Blog from './Blog';
import Gallery from './Gallery';

export default  class Index extends Component {
    
  
     render() { 

        
        const list = [
          
          { 'id': 1, 'name': 'Servicios y especialidades', 'url': './Services'},
          { 'id': 2, 'name': 'Nosotros', 'url': './AboutUs' },
          { 'id': 3, 'name': 'Pedir cita', 'url': './Appointment' },
          { 'id': 4, 'name': 'Blog', 'url': './Blog' },
          { 'id': 5, 'name': 'Galería', 'url': './Gallery' },
        ];
        

        let imgIndex= "https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-0.3.5&s=2d6c4262761e367e15cc4c0675591fad&auto=format&fit=crop&w=1500&q=80"

        return ( 
      
    
            <div>
                <NavBar icontwice= "search" title= "Centro de Fisioterapia" icon="cog" />
                <HashRouter>
                <div className="card">

                  <Styles 
                  imageIndex ="true"
                  src={imgIndex}
                  >                              
                                
                 </Styles>

                                 


                   <ul className="list-unstyled list-group ">
                    {list.map(option => 
                    <li 
                      key={option}                                       
                      className="list-group-item list-group-item-primary"
                    >
                    
                    <Styles title="true">
                        
                       
                      <NavLink to={option.url}>{option.name}</NavLink>
                        
                    </Styles>
                 
                  
                    </li>) }
                  
                  </ul>  
                  
                  <div className="content">
                    
                    <Route path="/Services" component={Services}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                    <Route path="/Appointment" component={Appointment}/>
                    <Route path="/Blog" component={Blog}/>
                    <Route path="/Gallery" component={Gallery}/>
                 
               </div>
              
          </div>
              
              </HashRouter>
                {/* <Search  />
                <Settings  />
                <Language />  */}
                
                

            </div>
    
         );
      }
}



    function Search (){

        return(
        
          <div>
    
            <NavBar title= "Buscar" icon="times" right= "true" />
    
            
            <div className="card">
              <form>
                  <div className="form-group">
                    <input className="form-control " type="text" placeholder="Búsquedas más comunes" readOnly></input>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-info btn-lg ">Contractura</button>
                    <button type="button" className="btn btn-info btn-lg ml-5 ">Animales</button>
                    <button type="button" className="btn btn-info btn-lg ml-5 ">Cita</button>
                    <button type="button" className="btn btn-info btn-lg ml-5 ">Ganchos</button>
                  </div>  
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Busca lo que quieras</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                  </div>
    
                  <div className="form-group">
                    <button className="btn btn-outline-success btn-block my-2 my-sm-0" type="submit">Buscar</button>
                  </div>
              
                </form>
            </div>      
          </div>
        
        )
      }
    
    
      function Settings () {
    
        let settings =  [
          'Idioma', 
          'Sonido', 
          'Cerrar sesión',
          
        ]
    
        function buttonsSettings (button) {
          
          if (button===settings[0]) {
            
            return ( <button 
                className="btn btn-info ml-5" >Cambiar
              </button>
            );
          }
          else if (button===settings[1]){
            return (
              <button  className="btn btn-primary ml-5" data-toggle="button" aria-pressed="false" autoComplete="off">
              OFF
              </button>)
          }
          else if (button===settings[2]){
            return (
              <button className="btn btn-primary ml-5" data-toggle="button" aria-pressed="false" autoComplete="off">
              ON
              </button>)
          }
        }
        
        return(
    
            <div>
        
                <NavBar title= "Ajustes" icon="times" right= "true" />
        
                <div className="card">
                  <ul className="list-group list-group-flush">
                    {settings.map(setting => 
                      <li
                      key={setting}
                      className="list-group-item"
                    
                      >
                        { setting }            
                        {buttonsSettings(setting)}
                      </li>) }
                    
                  </ul>
                  <button className="btn btn-outline-success btn-block my-2 my-sm-0" type="submit">Guardar</button>
                  
                </div>
                
                      
        
            </div>
    
          
        )
        
      }
    
    
    function Language (){
    
      let languages =  [
        'Español', 
        'Català', 
        'Galego',
        'Euskera',
        'English',
        'Française'
        
      ]
    
      return(
    
        <div>
    
            <NavBar left="true" title= "Idiomas" icon="backward"  />
    
            <div className="card">
                <ul className="list-group list-group-flush">
                  {languages.map(language => 
                    <li
                    key={language}
                    className= "list-group-item"
                    >
                       
                    <Styles title="true">
                         {language}
                    </Styles> 
                    </li>) }
                  
                </ul>
                <button className="btn btn-outline-success btn-block my-2 my-sm-0" type="submit">Seleccionar Idioma</button>
                
              </div>
              
        </div>
      );
    }


 