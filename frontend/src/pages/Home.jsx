import { Link } from "react-router-dom";
import BotCard from "../components/BotCard";
import twitter from "../assets/img/twitter.png";
import discord from "../assets/img/discord.png";
import chromeExt from "../assets/img/chromeExt.png";

export default function Home() {
  return (
    <div className="global">
      <h1>AppFolio</h1>
      <div className="bot_list">
        <Link to="/apps/discord">
          <BotCard img={discord} name="Bots Discord" />
        </Link>
        <Link to="/apps/twitter">
          <BotCard img={twitter} name="Bot Twitter" />
        </Link>
        <Link to="/apps/chromeExt">
          <BotCard img={chromeExt} name="Extension Chrome" />
        </Link>
      </div>
    </div>
  );
}
