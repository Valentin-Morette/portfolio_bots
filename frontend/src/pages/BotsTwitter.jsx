import { Link } from "react-router-dom";
import BotCard from "../components/BotCard";
import epicgame from "../assets/img/epicgame.png";

export default function BotsTwitter() {
  return (
    <div className="global">
      <h1>BotFolio Twitter</h1>
      <div className="bot_list">
        <Link to="/epicgame">
          <BotCard img={epicgame} name="Epic Games" />
        </Link>
      </div>
    </div>
  );
}
