import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  // Now use the contextAPI
  return (
    <UserContextProvider>
      <h1>React With Code Aur Chai | The Best</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
