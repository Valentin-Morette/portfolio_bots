import cw from "../../assets/img/cw.png";
import { linksCw } from "../../datas/DataLinkInstall";
import { descBotCw } from "../../datas/DataDescBot";
import { commandesCw } from "../../datas/DataCommandesBot";
import Install from "../../components/Install";
import DescAndCommandes from "../../components/DescAndCommandes";

export default function BotDiscordCw() {
  return (
    <div className="global">
      <h1>CodeWarsStats</h1>
      <img src={cw} alt="BDM" className="imgTuto" />
      <DescAndCommandes desc={descBotCw} commandes={commandesCw} />
      <Install
        linkGithub={linksCw.linkGithub}
        linkDiscord={linksCw.linkDiscord}
      />
    </div>
  );
}
