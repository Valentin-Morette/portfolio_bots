import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import bdm from "../../assets/img/bdm.png";

export default function BotsDiscordBdm() {
  return (
    <div className="global">
      <h1>Bot Discord BDM</h1>
      <img src={bdm} alt="BDM" className="imgTuto" />
      <div className="descAndCommandes">
        <div className="blocDC">
          <h3 className="descriptionsBots firstDesc">Description</h3>
          <p className="descriptions">
            Le bot Discord BDM (Blague de Merde) est un bot amusant qui répond à
            vos messages en utilisant des punchlines drôles.
          </p>
        </div>
        <div className="blocDC">
          <h3 className="descriptionsBots">Commandes</h3>
          <p className="descriptions">
            Après avoir ajouté le bot à votre serveur, vous pouvez l'utiliser en
            finissant vos phrases par certaines des phrases-clés suivantes :
          </p>
          <ul className="listeCommandes">
            <li>- "quoi" -&gt; "...feur"</li>
            <li>- "dis" -&gt; "...nosaure"</li>
            <li>- "dit" -&gt; "...recteur"</li>
            <li>- "hein" -&gt; "deux !"</li>
            <li>- "c'est où" -&gt; "Dans ton cul !"</li>
            <li>- "oui" -&gt; "...stiti"</li>
            <li>- "ouais" -&gt; "...stern"</li>
            <li>- "si" -&gt; "...lence"</li>
          </ul>
        </div>
      </div>

      <h3 className="descriptionsBots">Installation</h3>
      <div className="iconsInstall">
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1050468288112623747&permissions=2048&scope=bot"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} className="icons" />
        </a>
        <a
          href="https://github.com/Valentin-Morette/DiscordBotBDM"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </a>
      </div>
    </div>
  );
}
