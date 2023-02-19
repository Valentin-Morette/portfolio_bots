import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BotsDiscord from "./pages/BotsDiscord";
import BotsTwitter from "./pages/BotsTwitter";
import BotDiscordBdm from "./pages/BotsDiscord/Bdm";
import BotDiscordCw from "./pages/BotsDiscord/Cw";
import BotPublishTwitter from "./pages/BotsDiscord/PublishTwitter";
import BotDiscordAwinAffiliation from "./pages/BotsDiscord/AwinAffiliation";
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
        <Route path="/publishTwitter" element={<BotPublishTwitter />} />
        <Route path="/epicgame" element={<BotTwitterEpicGame />} />
        <Route path="/awin" element={<BotDiscordAwinAffiliation />} />
      </Routes>
    </Router>
  );
}

export default App;
