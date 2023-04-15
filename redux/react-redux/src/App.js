// import React, { Component } from 'react';
// import './App.css';
// import { createStore } from 'redux'

// class App extends Component {
//   render() {
//     const reducer = (state = {}, action) => {
//       if (action.type === 'A') {
//         return {
//           ...state,
//           A: "I am A"
//         }
//       }
//       if (action.type === 'B') {
//         return {
//           ...state,
//           B: "I am B"
//         }
//       }
//       return state
//     }

//     const store = createStore(reducer)

//     store.subscribe(() => {
//       console.log(store.getState())
//     })

//     // store.subscribe(() => {
//     //   console.log(store.getState())
//     // })

//     store.dispatch({ type: 'B' })
//     store.dispatch({ type: 'something' })
//     store.dispatch({ type: 'A' })
//     store.dispatch({ type: 'something' })
//     store.dispatch({ type: "Somthing" })

//     return (
//       <div>
//         <h1>Redux</h1>
//       </div>
//     );
//   }
// }

// export default App;


// =============================================================
import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import Count from './components/Count'
import Control from './components/Control'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Redux</h1>
          <Count />
          <Control />
        </div>
      </Provider>
    )
  }
}

export default App;





















// ====================================
// Store
// Reducer
// Action
// Dispatch (kisu ekta create hobe, update hobe something like that)
// Subscriber

// 1. create reucer
// 2. create store with the help oj reducer
// 3. Now we can subscribe
// 4. dispatch (action)