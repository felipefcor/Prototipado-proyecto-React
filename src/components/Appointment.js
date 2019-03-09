import React, { Component } from 'react';
import NavBar from './NavBar';
import Styles from './Styles'


class AppointmentTemplate extends Component {
 
  render() { 

      
      const days =  [
      'Lunes', 
      'Martes', 
      'Miércoles',
      'Jueves',
      'Viernes'
    ]

    const hoursMorning =  [
      '9am', 
      '10am', 
      '11am',
      '12am',
      '13pm',
      '16pm',
      '17pm',
      '18pm',
      '19pm'
      
    ]
  
    
      
    const stylesList = {
      container: {
        textAlign: 'center'
      }
    }


    const {children, week, day} =this.props
    let result;



    if (week) {

      result =  ( 
                 <div className="card">
                    <ul className="list-unstyled list-group ">

                      <Styles title="true">
                        {children}
                      </Styles>

                      {days.map(day => 
                      <li 
                      key={day}
                      style = {stylesList.container} 
                      className="list-group-item"
                      >
                     
                      <h2>{day}</h2>
                            
                                
                      <button className="btn btn-lg btn-secondary">
                      <span className="badge badge-light">3</span>
                      </button>
                    </li>) }
                        
                 </ul>
            
               </div>
         )
      }
      
      else  if (day) {

          result = (

              <div className="card">
              
              <ul className="list-unstyled list-group ">

                      <Styles title="true">
                        {children}
                      </Styles>

                      {hoursMorning.map(hour => 
                      <li 
                        key={hour}
                        style = {stylesList.container}
                        className="list-group-item"
                      >
                        <h2> { hour } </h2>
                        <button className="btn btn-lg btn-danger">
                        <span className="badge badge-light">Ocupado</span>
                        </button>
                      </li>) }
                      
                </ul>
            </div>
          )
     
      }

  
    return ( 
          <div>
            {result}
          </div>

            
     );
  }
}
 

export default class Appointment extends Component {
    
    render(){
        
         
      return(
        <div>
          <NavBar left="true" title= "Pedir Cita" icon="backward"  />
          
          <AppointmentTemplate week= "true">
            Semana actual
          </AppointmentTemplate>

           <AppointmentTemplate week ="true">
            Semana siguiente
          </AppointmentTemplate>

          <AppointmentTemplate day ="true">
            Día
          </AppointmentTemplate>
            
    
        </div>
      )
    }
}

/* 

function DayAppointment(){

    const hoursMorning =  [
      '9am', 
      '10am', 
      '11am',
      '12am',
      '13pm',
      
    ]
  
    const hoursNoon =[
  
      '16pm',
      '17pm',
      '18pm',
      '19pm'
  
    ]
  
    return(

      <div>
  
          <NavBar left="true" title= "Lunes" icon="backward"  />

 
           
          /* 
          <div className="card">
          
            <ul className="list-unstyled list-group ">

                    <Styles title="true">
                       Mañana
                    </Styles>
  
                    {hoursMorning.map(hour => 
                    <li 
                      key={hour}
                      style = {stylesList.container}
                      className="list-group-item"
                    >
                      <h2> { hour } </h2>
                      <button className="btn btn-lg btn-danger">
                      <span className="badge badge-light">Ocupado</span>
                      </button>
                    </li>) }
                    
              </ul>
           </div> 
            
            <div className="card">
                      
               <ul className="list-unstyled list-group ">

                    <Styles title="true">
                       Tarde
                    </Styles>
  
                    {hoursNoon.map(hour => 
                    <li 
                      key={hour}
                      style = {stylesList.container}
                      className="list-group-item"
                     >
                      <h2> { hour } </h2>
                      <button className="btn btn-lg btn-success">
                      <span className="badge badge-light">Reservar</span>
                      </button>
                     </li>) }
                    
                </ul>
            </div>
            
            
      </div>
       }
    )
  }

 */