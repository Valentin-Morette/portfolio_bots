import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BotsDiscord from "./pages/BotsDiscord";
import BotsTwitter from "./pages/BotsTwitter";
import ExtChrome from "./pages/ExtChrome";
import BotDiscordBdm from "./pages/BotsDiscord/Bdm";
import BotDiscordCw from "./pages/BotsDiscord/Cw";
import BotPublishTwitter from "./pages/BotsDiscord/PublishTwitter";
import BotDiscordAwinAffiliation from "./pages/BotsDiscord/AwinAffiliation";
import BotTwitterEpicGame from "./pages/BotsTwitter/EpicGame";
import ExtChromeCw from "./pages/ExtChrome/Cw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/discord" element={<BotsDiscord />} />
        <Route path="/apps/twitter" element={<BotsTwitter />} />
        <Route path="/apps/chromeExt" element={<ExtChrome />} />
        <Route path="/apps/discord/bdm" element={<BotDiscordBdm />} />
        <Route path="/apps/discord/cw" element={<BotDiscordCw />} />
        <Route
          path="/apps/discord/publishTwitter"
          element={<BotPublishTwitter />}
        />
        <Route path="/apps/twitter/epicgame" element={<BotTwitterEpicGame />} />
        <Route
          path="/apps/discord/awin"
          element={<BotDiscordAwinAffiliation />}
        />
        <Route path="/apps/chromeExt/cw" element={<ExtChromeCw />} />
      </Routes>
    </Router>
  );
}

export default App;
