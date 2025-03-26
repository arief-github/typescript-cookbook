type Circle = {
    radius: number
    kind: 'circle'
}

// when usage x with type number
// there is not enough information
// is x on triangle and rectangle is child from square

// you can differentiate type with 'kind' properties

// type Square = {
//     x: number
// }
//
// type Triangle = {
//     x: number
//     y: number
// }
//
// type Rectangle = {
//     x: number
//     y: number
// }

type Square = {
    x: number
    kind: 'square'
}

type Triangle = {
    x: number
    y: number
    kind: 'triangle'
}

type Rectangle = {
    x: number
    y: number
    kind: 'rectangle'
}

type Shape = Circle | Square | Triangle | Rectangle

function area(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius
        case "triangle" :
            return (shape.x * shape.y) / 2
        case "square" :
            return shape.x * shape.x
        default :
            throw new Error('Not Possibe')
    }
}

const hitungLuasLingkaran: Shape = {
    x: 10,
    kind: "square"
}

const result = area(hitungLuasLingkaran)
console.log(result)