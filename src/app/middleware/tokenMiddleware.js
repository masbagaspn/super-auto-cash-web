import { useLocalStorage } from "../useLocalStorage"

export default function tokenMiddleware({ getState }) {
    return next => action => {
        const user = JSON.parse(localStorage.getItem("user") || "{}")
        action.meta.arg["token"] = user.token
        console.log('added user token to state')

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}