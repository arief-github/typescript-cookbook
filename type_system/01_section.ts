/**
 * Redundant way and losing type information
 * **/

// type StatusCode = 200 | 400 | 500 | 404
//
// const code: StatusCode = 400

// type BoardGame = {
//     name: string
//     price: number
//     quantity: number
//     minimumAge: number
//     players: number
// }
//
// type Puzzle = {
//     name: string
//     price: number
//     quantity: number
//     minimumAge: number
//     pieces: number
// }
//
// type Doll = {
//     name: string
//     price: number
//     quantity: number
//     minimumAge: number
//     material: string
// }

    
//    a nicer way using intersection
    // intersection allows assembling type 
type ToyBase = {
    name: string
    price: number
    quantity: number
    minimumAge: number
}

type BoardGame = ToyBase & { players: number }
type Puzzle = ToyBase & { pieces: number }
type Doll = ToyBase & { materials: 'Plastic' | 'Plush' } // literal type

type Toy = Doll | Puzzle | BoardGame

function printToy(toy: Toy) {
    console.log(toy)
}

const doll: Toy = {
    name: 'Mickey',
    price: 9.99,
    quantity: 10000,
    minimumAge: 2,
    materials: "Plastic"
}

// literal type works good 
// if(doll.materials === 'Plastic')

// type One = 1
// const one: One = 1;

printToy(doll)

