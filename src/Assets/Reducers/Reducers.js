import { click, evaluate, clearall, remove } from '../Actions/Actions'


//4.Reducers
const defaultstate = ""
export default function Reducers(state = defaultstate, action) {
    switch (action.type) {
        case click:
            {
                const lastcharacter = state.charAt(state.length - 1)
                console.log(action.payload, state)
                if (state == '' && action.payload == '0')
                    return state

                else if (state == '' && (action.payload == '+' || action.payload == '-' || action.payload == '*' || action.payload == '/' || action.payload == '%')) {
                    return state
                }

                else if (state == '' && action.payload == '.')
                return (state + "0.")

                else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (action.payload == '+' || action.payload == '-' || action.payload == '*' || action.payload == '/' || action.payload == '%')) {
                    console.log("lastcharacter o+o", action.payload, state)
                    return state
                }

                else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (action.payload == '=')) {
                    console.log("lastcharacter o+=", action.payload, state)
                    return state
                }

                else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (action.payload == '.' )) {
                    console.log("lastcharacter o+.", action.payload, state)
                    return (state + "0.")
                }

                else if(lastcharacter == "." && (action.payload == '+' || action.payload == '-' || action.payload == '*' || action.payload == '/' || action.payload == '%'))
                {
                    return (state.substring(0,state.length-1) + action.payload)
                }

                else if(state.includes(".") && action.payload=="."){
                    return state
                }

                else if ((lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' || lastcharacter == '/' || lastcharacter == '%') && (action.payload == '0')) {
                    console.log("lastcharacter o+0", action.payload, state)
                    return state
                }

                else if (state.length < 22)
                    return (state + action.payload)
            }
        case evaluate: {
            const ans = eval(state).toString()
            if(ans=='0')
            return ''
            else
            return ans
        }
        case clearall: return ''
        case remove: return state.substring(0, state.length - 1)
        default: return state
    }
}