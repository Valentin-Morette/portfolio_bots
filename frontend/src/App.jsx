import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BotsDiscord from "./pages/BotsDiscord";
import BotsTwitter from "./pages/BotsTwitter";
import BotsDiscordBdm from "./pages/BotsDiscord/Bdm";
import BotsDiscordCw from "./pages/BotsDiscord/Cw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bots/discord" element={<BotsDiscord />} />
        <Route path="/bots/twitter" element={<BotsTwitter />} />+
        <Route path="/bdm" element={<BotsDiscordBdm />} />
        <Route path="/cw" element={<BotsDiscordCw />} />
      </Routes>
    </Router>
  );
}

export default App;
