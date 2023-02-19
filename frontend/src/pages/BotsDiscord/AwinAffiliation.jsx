import awin from "../../assets/img/awin.png";
import { linksAwin } from "../../datas/DataLinkInstall";
import { descBotAwin } from "../../datas/DataDescBot";
import { commandesAwin } from "../../datas/DataCommandesBot";
import Install from "../../components/Install";
import DescAndCommandes from "../../components/DescAndCommandes";

export default function BotDiscordCw() {
  return (
    <div className="global">
      <h1>AwinAffiliation</h1>
      <img src={awin} alt="BDM" className="imgTuto" />
      <DescAndCommandes desc={descBotAwin} commandes={commandesAwin} />
      <Install
        linkGithub={linksAwin.linkGithub}
        linkDiscord={linksAwin.linkDiscord}
      />
    </div>
  );
}
