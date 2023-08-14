Video 1

step 1
const domContainer = document.querySelector("#root");

const myElement = React.createElement(
  "div",
  null,
  React.createElement("p", null, "Hello world")
);
ReactDOM.render(myElement, domContainer);


step 2
const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>{counter}</h1>  //interpolation
      <button onClick={() => setCounter(counter - 1)}>Decrement -</button>
      <button onClick={() => setCounter(counter + 1)}>Increment +</button>
    </div>
  );
};

ReactDOM.render((<App />, App()), domContainer);


Video 2
batch update // js dia sob kichu kore then dom a print korbo
as much as less dom opetation

React khub efficient algorithm er maddhome decide kore kon kon jinis change hoyese. Jar nam diffing reconcilation

we are not using reactjs for virtual dom rather then we are using reactjs for amazing developer experience



07 video 
reactjs is a uni-directional data flow not by directional

08 video 
kono component call houar thik ag muhurte shouldComponentUpdate call hobe

12 video
 composition is a mini state management

13 video
common functionality pass korar jonno and to avoid props drilling use korte hobe HOC, render props, context api

15 video
context api use to avoid props drilling properly 

18 video
user interface banano sara ar ja ja kaj ase sob holo side effect
useEffect(() => {  componentDidMount 
},[update]) componentDidUpdate
HOC and render props egula class er jonno and function er jonno ase custom hook
propblem solve hoyse hook asar karon
state(mane construcot call kora lage na esob), lifecycle method, dublicate code(useEffect is solution), sharing same logic(custom hook)


20 video
jsx render/re-render ui & react to user input/actions(react er kaj)
side effect - fetching api, update dom, subscription, 
class er jonno lifecycle method but function er khetere useEffect
render method er por componentDidUpdate call hoy

useEffect(() => {  componentDidMount 
return() => { componentWillUnmount
    
}
},[update]) componentDidUpdate


21video
shouldComponentUpdate(hook - React.memo) and useCallback egula performance optimize er jonno help kore
react.memo and useCallback ey 2 ta related. react.memo dia amra re-render thekay but tarporeu function er referance er problem ta thekate useCallback use korte hobe. 
useCallback function take mone rakhe and useMemo function er return value take mone rakhe


22 video
useRef, forwardRef and r ekta jinis dekhaysilo jeta dorkar nai

23 video
useReducer react a state change korar rekta machanism
useState a bar bar useState call korte hoy but useReducer a etobar likha lage na and somosto business logic ek jagay likha thake


24 video
hoc, render props er simpler alternative custom hook
custom hook a jsx return korar dorkar nai but hoc, render props a kintu jsx return korte hoy


25 Styling React Components
Stylesheet, logo.module.css(we have to use create-react-app to use this), inline css, css in js(styled-component)
style er 1st bracket holo interpolation and second bracket holo object