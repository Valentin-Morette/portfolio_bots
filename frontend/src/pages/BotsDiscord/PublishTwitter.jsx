import publishTwitter from "../../assets/img/twitter.png";
import { commandesPublishTwitter } from "../../datas/DataCommandesBot";
import { descBotPublishTwitter } from "../../datas/DataDescBot";
import { linksTwitter } from "../../datas/DataLinkInstall";
import DescAndCommandes from "../../components/DescAndCommandes";
import TwitterAssociate from "../../components/TwitterAssociate";

export default function BotsDiscordPublishTwitter() {
  return (
    <div className="global">
      <h1>PublishTwitter</h1>
      <img src={publishTwitter} alt="BDM" className="imgTuto" />
      <DescAndCommandes
        desc={descBotPublishTwitter}
        commandes={commandesPublishTwitter}
      />
      <TwitterAssociate linkTwitter={linksTwitter.biiiiipBooop} />
    </div>
  );
}
