import "./App.css";
import Counter from "./components/Counter/Counter";
import Number from "./components/Number/Number";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/Users/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Number />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
