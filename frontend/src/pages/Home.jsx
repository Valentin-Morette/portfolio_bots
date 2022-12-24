import { Link } from "react-router-dom";
import BotCard from "../components/BotCard";
import twitter from "../assets/img/twitter.png";
import discord from "../assets/img/discord.png";

export default function Home() {
  return (
    <div className="global">
      <h1>BotFolio</h1>
      <div className="bot_list">
        <Link to="/bots/discord">
          <BotCard img={discord} name="Bots Discord" />
        </Link>
        <Link to="/bots/twitter">
          <BotCard img={twitter} name="Bots Twitter" />
        </Link>
      </div>
    </div>
  );
}
