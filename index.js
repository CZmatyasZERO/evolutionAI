const rt = require("datamixering")

function simulate(StartEntitiesCount = 5, CodeFormat = "ATCG", InitLengthFormat = 3) {
    let Entities = []
    let NewGen = []
    do {
        Entities.push(rt.getString(InitLengthFormat, CodeFormat))
    } while (Entities.length !== StartEntitiesCount)

    function Kill(ID) {
        Entities[ID] = undefined
    }
    
    function Mutate(ID, Childs = 5, Intensity = 0.1, Extend = 1) {
        if(!Entities[ID]) return console.log("Mutate() Err: Entity isnt alive!")
        for (let i = 0; i < Childs; i++) {
            let RandomGenome = rt.getString(Entities[ID].split("").length + Extend, CodeFormat)
            NewGen.push(rt.stringJoin(RandomGenome, Entities[ID], 1 - Intensity))
        }
    }
    function Pair(ID1, ID2, Childs = 5, preference = 0.5) {
        if(!Entities[ID]) return console.log("Pair() Err: Entity isnt alive!")
        for (let i = 0; i < Childs; i++) {
            NewGen.push(rt.stringJoin(Entities[ID1], Entities[ID2], preference))
        }
    }
    function PairAndMutate(ID1, ID2, Childs = 5, preference = 0.5, Intensity = 0.1, Extend = 1) {
        if(!Entities[ID]) return console.log("PairAndMutate() Err: Entity isnt alive!")
        for (let i = 0; i < Childs; i++) {
            let RandomGenome = rt.getString(Entities[ID].split("").length + Extend, CodeFormat)
            NewGen.push(rt.stringJoin(rt.stringJoin(Entities[ID1], Entities[ID2], preference), RandomGenome, 1 - Intensity))
        }
    }
    function PushNextSurvivors() {
        Entities.forEach(entity => {
            if(entity !== undefined) {
                NewGen.unshift(entity)
            }
        })
        Entities = []
    }
    function NextGen() {
        Entities = NewGen
        NewGen = []
    }

    function getGenomeArr() {
        return Entities
    }
    function getChildsArr() {
        return NewGen
    }

    function isAlive(ID) {
        if(Entities[ID] === undefined) {
            return false
        }
        return true
    }

    return {
        Kill,
        Mutate,
        Pair,
        PairAndMutate,
        PushNextSurvivors,
        NextGen,
        getGenomeArr,
        getChildsArr,
        isAlive
    }

}

module.exports = {simulate}