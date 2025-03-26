type FilterRule = {
    field: string
    operator: string
    value: any
}

type CombinatorialFilter = {
    combinator: "and" | "or";
    rules: FilterRule
}

type ChainedFilter = {
    rules: (CombinatorialFilter | FilterRule)[]
}

type Filter = CombinatorialFilter | ChainedFilter

function reset<F extends Filter>(filter: F): F {
    if ("combinator" in filter) {
        return { combinator: "and", rules: [] }
    }
    
    return { rules : [] }
}