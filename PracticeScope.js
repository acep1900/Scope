/*Inside the function body of logVisibleLightWaves(), 
beneath the region variable and before the provided console.log() 
statement, create an if statement that checks if the region is the 'The Arctic'.*/

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
 /*
Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'. */ 
    if (region === 'The Arctic'){
  let lightWaves = 'Northern Lights';

  /*Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, 
but still within the function, the same statement logs Moonlight to the console. */
  console.log(lightWaves)
    };
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();