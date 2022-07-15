<img align="center" width="100px" height="100px" src="https://raw.githubusercontent.com/CZmatyasZERO/evolutionAI/main/assets/logo.svg" alt="logo">
<h1>EvolutionAI v1.0.0</h1>
<img src="https://shields.io/npm/v/evolution-ai" alt="version">
<img src="https://img.shields.io/bundlephobia/min/evolution-ai" alt="version">
<p>Develops entity&apos;s genome by "natural" selection. It works extremly fast and effective.</p>
<h2>Install</h2>
<p>NPM:</p>
```
npm install evolution-ai
```

<h2>Functions</h2>

|Function|Description|
|--------|-----------|
|simulate()|Creates new simulation. Can choose count of entities at start, code format of genomes and initial genome length.|
|Kill()|Kills entity by ID|
|Mutate()|Gives entity new childs to next generation and randomly mutate their genome, can choose intensity of mutation and extendion of genome|
|Pair()|Gives childs to new generation with genomes of combination parents&apos;s genome, can choose count of childs and preference of one of the parents|
|PairandMutate()|Combination of Pair() and Mutate()|
|PushNextSurvivors()|Moves live entities to next generation|
|getGenomeArr()|Gets array of entities in actual generation|
|getChildsArr()|Gets array of entities in next generation|

<h2>Example</h2>

```javascript
const evolution = require("evolutionai")

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
            world.Mutate(i, 3) // If hasnt it will multiply itself three times with little mutations
        }

    }

    console.log(world.getChildsArr().length) //Writes number of nextgen entities to console
    world.NextGen() // Changes next generation to actual generation
}
```
