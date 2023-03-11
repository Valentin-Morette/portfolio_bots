import { Link } from "react-router-dom";
import BotCard from "../components/BotCard";
import twitter from "../assets/img/twitter.png";
import cw from "../assets/img/cw.png";
import bdm from "../assets/img/bdm.png";
import awin from "../assets/img/awin.png";

export default function BotsDiscord() {
  return (
    <div className="global">
      <h1>BotFolio Discord</h1>
      <div className="bot_list">
        <Link to="bdm">
          <BotCard img={bdm} name="BDM" />
        </Link>
        <Link to="cw">
          <BotCard img={cw} name="CodeWarsStats" />
        </Link>
        <Link to="publishTwitter">
          <BotCard img={twitter} name="PublishTwitter" />
        </Link>
        <Link to="awin">
          <BotCard img={awin} name="AwinAffiliation" />
        </Link>
      </div>
    </div>
  );
}
