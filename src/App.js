import "./styles/App.css";
import { Header } from "./components/Header";
import { ChatBody } from "./components/ChatBody";

function App() {
  return (
    <div className="App">
      <Header />

      <ChatBody />
    </div>
  );
}

export default App;
