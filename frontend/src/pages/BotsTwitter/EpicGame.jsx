import epicgame from "../../assets/img/epicgame.png";
import { descBotEpicGames } from "../../datas/DataDescBot";
import { linksTwitter } from "../../datas/DataLinkInstall";
import DescBot from "../../components/DescBot";
import TwitterAssociate from "../../components/TwitterAssociate";

export default function BotTwitterEpicGames() {
  return (
    <div className="global">
      <h1>EpicGames</h1>
      <img src={epicgame} alt="epicgame" className="imgTuto" />
      <div className="descAndCommandes">
        <DescBot desc={descBotEpicGames} type="twitter" />
      </div>
      <TwitterAssociate linkTwitter={linksTwitter.biiiiipBooop} />
    </div>
  );
}
