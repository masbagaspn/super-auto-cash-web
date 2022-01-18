import './App.css';
import LoginForm from './Component/LoginForm';

function App() {
  let baseUrl = "https://super-auto-cash-mobile-api.herokuapp.com"
  return (
    <div className="App">
        <LoginForm baseUrl={baseUrl}/>
    </div>
  );
}

export default App;
