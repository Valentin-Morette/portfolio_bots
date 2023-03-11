import cw from "../../assets/img/cw.png";
import { linksExtCw } from "../../datas/DataLinkInstall";
import { descExtCw } from "../../datas/DataDescBot";
import Install from "../../components/Install";
import DescBot from "../../components/DescBot";

export default function BotDiscordCw() {
  return (
    <div className="global">
      <h1>Codewars Stats</h1>
      <img src={cw} alt="BDM" className="imgTuto" />
      <div className="descAndCommandes">
        <DescBot desc={descExtCw} type="noCommandes" />
      </div>
      <Install
        linkGithub={linksExtCw.linkGithub}
        linkChrome={linksExtCw.linkChrome}
      />
    </div>
  );
}
