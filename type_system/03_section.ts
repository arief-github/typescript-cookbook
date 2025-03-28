// Narrowing types with type predicates

type Dice = 1 | 2 | 3 | 4 | 5 | 6

// helper function
// function isDice(value: number): boolean {
//     return [1,2,3,4,5,6].includes(value)
// }

function isDice(value: number): value is Dice {
    return [1,2,3,4,5,6].includes(value)
}

function rollDice(input: number) {
    if(isDice(input)) {
        console.log("Branch Dice: input valid sebagai Dice =>", input); 
    } else {
        console.log("Branch Biasa: input bukan Dice =>", input);
    }
}

rollDice(9)


// Contoh Lain Type Predicates
type NumberOrString = number | string

function isNumberOrString(value: unknown): value is NumberOrString {
    return ['number', 'string'].includes(typeof value)
}

function logValueIfExists(value: number | string | null | undefined) {
    if(isNumberOrString(value)) {
        value.toString()
        console.log("Treatment sebagai type NumberOrString", value)
    } else {
        console.log("value doesnot exists", value)
    }
}

// logValueIfExists(null)

interface Comedian {
    funny: boolean
}

interface StandupComedian extends Comedian {
    routine: string
}

function isStandupComedian(value: Comedian): value is StandupComedian {
    return 'routine' in value
}

function workWithComedian(value: Comedian) {
    if(isStandupComedian(value)) {
        console.log('Treatment as StandUp Comedian', value.routine) 
    }
    // TS2339: Property 'routine' does not exist on type 'Comedian'.
    // console.log(value.routine)
}