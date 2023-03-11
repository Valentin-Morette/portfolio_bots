import { Link } from "react-router-dom";
import BotCard from "../components/BotCard";
import cw from "../assets/img/cw.png";

export default function ExtChrome() {
  return (
    <div className="global">
      <h1>Portfolio Extensions Chrome</h1>
      <div className="bot_list">
        <Link to="cw">
          <BotCard img={cw} name="CodeWars Stats" />
        </Link>
      </div>
    </div>
  );
}
