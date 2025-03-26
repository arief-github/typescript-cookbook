function pairs<T, U>(a: T, b: U): [T,U] {
    return [a,b]
}

pairs("1", 1)
pairs({ a: 10 }, "20")