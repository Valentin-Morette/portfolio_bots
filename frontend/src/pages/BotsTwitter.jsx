import BotCard from "../components/BotCard";
import epicgame from "../assets/img/epicgame.png";

export default function BotsTwitter() {
  return (
    <div className="global">
      <h1>BotFolio Twitter</h1>
      <div className="bot_list">
        <BotCard img={epicgame} name="Epic Games" />
      </div>
    </div>
  );
}
