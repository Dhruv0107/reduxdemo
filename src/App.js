import './App.css';
import { incrasenum,decerasenum } from './action';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const val = useSelector ((state)=>state.updown)

  return (
    <div className="App">
      <h1>{val}</h1>
      <input type="button" onClick={() => {dispatch(incrasenum())}} value="INCREMENT"  />
      <input type="button" onClick={() => {dispatch(decerasenum())}} value="DECREMENT" />
    </div>
  );
}

export default App;
