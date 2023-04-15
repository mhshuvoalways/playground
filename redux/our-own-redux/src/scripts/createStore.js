const createStore = (reducer, initialState) => {
    const store = {
        state: initialState,
        listeners: [],

        getState: function () {
            return this.state
        },

        subscribe: function (listener) {
            this.listeners.push(listener)
        },

        dispatch: function (action) {
            this.state = reducer(this.state, action)
            this.listeners.forEach(listener => listener())
        }
    }
    return store
}

export default createStore


// // Use of Redux
// const reducer = (state, action) => {
//     // return state
//     if (action.type === 'ADD') {
//         return state + 10
//     }

//     if (action.type === 'SUB') {
//         return state - 5
//     }
//     return state
// }

// const store = createStore(reducer, 0)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({ type: 'ADD' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'ADD' })


// ====================================
// Store
// Reducer
// Action
// Dispatch (Something will be create or update something like that)
// Subscriber
// 1. Create reducer
// 2. Create store with the help of reducer
// 3. Now we can subscribe
// 4. Dispatch (action)


// // Basic Implementation of Redux
// const createStore = (reducer, initState) => {
//     const store = {}
//     store.state = initState

//     store.listeners = []

//     store.getState = () => store.state

//     store.subscribe = listener => store.listeners.push(listener)

//     store.dispatch = action => {
//         store.state = reducer(store.state, action)
//         store.listeners.forEach(listener => listener())
//     }

//     return store
// }