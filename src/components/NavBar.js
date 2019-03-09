import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 
export default class NavBar extends Component {

    
    font = icon =>  {
    
        return (
                    
            <FontAwesomeIcon  icon ={icon} />
            )

    }

    font = icontwice =>  {
    
        return (
                    
            <FontAwesomeIcon  icon ={icontwice} />
            )

    }


   
    render() { 

        const styles = {
            container: {
                fontSize: 40,
                fontWeight: 'bold',
            }
          }

        const {icon, title, icontwice} = this.props
        const {left, right} = this.props
        let iconside;
       
         

        if (left) {

            iconside = (
                
               <nav className="navbar navbar-light bg-light">
             
                    <div>
                        {this.font(icon)}
                    </div>
        
                    <h1    
                     style = {styles.container}>
                     {title}
                    </h1>
                
                    <div></div>
                </nav>

            )
        }

        else if (right) {

            iconside= (

                <nav className="navbar navbar-light bg-light">

                    <div></div>
                
                    <h1    
                     style = {styles.container}>
                     {title}
                    </h1>
                                     
                    <div>
                       {this.font(icon)}
                    </div>
            
                </nav>
            )
        }

        else {

            iconside= (

                <nav className="navbar navbar-light bg-light">
             
                    <div> 
                        {this.font(icontwice)}
                    </div>
                    
                    <h1    
                     style = {styles.container}>
                     {title}
                    </h1>

                    <div>
                        {this.font(icon)}
                    </div>
        
                </nav>
            )

        }

        return (

            <div>
              {iconside}
            </div>
         );
    }
}
 
