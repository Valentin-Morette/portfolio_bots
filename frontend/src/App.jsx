import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BotsDiscord from "./pages/BotsDiscord";
import BotsTwitter from "./pages/BotsTwitter";
import BotDiscordBdm from "./pages/BotsDiscord/Bdm";
import BotDiscordCw from "./pages/BotsDiscord/Cw";
import BotDiscordToTwitter from "./pages/BotsDiscord/DiscordToTwitter";
import BotTwitterEpicGame from "./pages/BotsTwitter/EpicGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bots/discord" element={<BotsDiscord />} />
        <Route path="/bots/twitter" element={<BotsTwitter />} />+
        <Route path="/bdm" element={<BotDiscordBdm />} />
        <Route path="/cw" element={<BotDiscordCw />} />
        <Route path="/discordToTwitter" element={<BotDiscordToTwitter />} />
        <Route path="/epicgame" element={<BotTwitterEpicGame />} />
      </Routes>
    </Router>
  );
}

export default App;
