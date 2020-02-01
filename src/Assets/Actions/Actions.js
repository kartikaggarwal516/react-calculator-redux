//2.Action Type
export const click = "CLICK"
export const evaluate = "EVALUATE"
export const clearall = "CLEARALL"
export const remove = "REMOVE"

//3.Action Creators
export const onKeyPress = value => {
    console.log("onKeyPress")
    return{
        type: click,
        payload: value
    }
}

export const calculate = () => {
    console.log("Calculate")
    return{
        type: evaluate        
    }
}

export const allClear = () => {
    console.log("Clear All")
    return{
        type: clearall
    }
}

export const clear = () => {
    console.log("Clear")
    return{
        type: remove
    }
}