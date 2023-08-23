import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Users</h1>
      <UserList />
      </header>
    </div>
  );
}

export default App;
