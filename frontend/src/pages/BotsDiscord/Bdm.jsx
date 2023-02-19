import bdm from "../../assets/img/bdm.png";
import { linksBdm } from "../../datas/DataLinkInstall";
import { descBotBdm } from "../../datas/DataDescBot";
import { commandesBdm } from "../../datas/DataCommandesBot";
import Install from "../../components/Install";
import DescAndCommandes from "../../components/DescAndCommandes";

export default function BotDiscordBdm() {
  return (
    <div className="global">
      <h1>BDM</h1>
      <img src={bdm} alt="BDM" className="imgTuto" />
      <DescAndCommandes desc={descBotBdm} commandes={commandesBdm} />
      <Install
        linkGithub={linksBdm.linkGithub}
        linkDiscord={linksBdm.linkDiscord}
      />
    </div>
  );
}
