const evolution = require("./index") //write evolutionAI, not this

const world = evolution.simulate() //Start simulation
for (let i = 0; i < 100; i++) { // Loop for every generation

    for (let i = 0; i < world.getGenomeArr().length; i++) { //Loop for every entity 
        const Genome = world.getGenomeArr()[i].split(""); //split for better reading of genome
        
        let have = false
        for (let idat = 0; idat < Genome.length; idat++) { //loop for every piece of genome
            const element = Genome[idat];
            
            // ! -- There belongs a "Natural" selection code -- !


            //----EXAMPLE----
            if(element === "A") {
                world.Kill(i) // This function will kill entity, if its has "A" in genome
                have = true
                break; // breaks genome scanning
            }
            //--END-EXAMPLE--
        }
        if(have === false) {
            world.Mutate(i, 1) // If hasnt it will multiply itself three times with little mutations
        }

    }

    console.log(world.getChildsArr().length) //Writes number of nextgen entities to console
    world.NextGen() // Changes next generation to actual generation
}