/*In main.js, define a function logVisibleLightWaves().*/

let logVisibleLightWaves =() =>{
    /*Within the logVisibleLightWaves() function, using const, 
    create a variable lightWaves and set it equal to 'Moonlight'.*/
   
    const lightWaves = 'Moonlight';
    /*Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() 
    statement that will log the value of the lightWaves variable when the function runs.*/
    
    console.log(lightWaves);
    };
    

    /*Call the logVisibleLightWaves() function from outside the function.*/

    logVisibleLightWaves();
  /*Beneath the function call, log the value of lightWaves to the console from outside the function.

You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!*/

    //console.log(lightWaves);