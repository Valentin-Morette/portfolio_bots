import BotCard from "../components/BotCard";
import twitter from "../assets/img/twitter.png";
import cw from "../assets/img/cw.png";
import bdm from "../assets/img/bdm.png";

export default function BotsDiscord() {
  return (
    <div className="global">
      <h1>BotFolio Discord</h1>
      <div className="bot_list">
        <BotCard img={bdm} name="BDM" />
        <BotCard img={cw} name="CodeWarsStats" />
        <BotCard img={twitter} name="DiscordToTwitter" />
      </div>
    </div>
  );
}
