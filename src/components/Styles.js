import React, { Component } from 'react';

export default class Styles extends Component {
    
    render() { 

        const {imageIndex, title, imageServices, imageCenter, src, list, children} = this.props
      
        let result;
       
       
       

        if (imageIndex){

            result = (
                       
                <img 
                 style={styles.imageIndex} 
                 src = {src}
                ></img>
                                  
                ) 
            }

        else if (title) {

            result = (
                
                <h3 style={styles.title}>
                {children}
                </h3>
               
                 
               ) 

        }
        else if (imageServices)
                           {

            result = (
                <div>
                <img
                style={styles.imageServices}
                src = {src}
                 >
                </img>
                </div>
                 
               ) 

        }
        
        else if (imageCenter)
                           {

            result = (
                 
                
                <img 
                 style={styles.imageCenter} 
                 src = {src}
                ></img>
                
                 
               ) 

        }

        else if (list) {
            result = (
                <h2 
                style= {styles.list}>
                    
                </h2>
            )
        }

        

        return ( 

            
            <div>{result}</div>  
            

            
            
         );
       
        
    }
 
}

let styles = {
    imageIndex: {
        display: 'block',
        width: '35%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imageServices: {
        display: 'block',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20

    },

    imageCenter: {  
        display: 'block',     
        width: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10
        },
    
    list: {
        textAlign: 'center'
    }
  };
  

 






