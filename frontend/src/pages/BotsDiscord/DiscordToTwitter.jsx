import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import discordToTwitter from "../../assets/img/twitter.png";

export default function BotsDiscordPublishTwitter() {
  return (
    <div className="global">
      <h1>PublishTwitter</h1>
      <img src={discordToTwitter} alt="BDM" className="imgTuto" />
      <div className="descAndCommandes">
        <div className="blocDC">
          <h3 className="descriptionsBots firstDesc">Description</h3>
          <p className="descriptions">
            Le bot Discord PublishTwitter est un bot Discord qui me permet de
            tweeter sur mon compte Twitter depuis un canal spécifique sur
            Discord. Il vérifie également le nombre de caractères et nous
            indique de combien on dépasse la limite de Twitter. C'est un bot
            personnel qui n'est pas accessible à l'installation.
          </p>
        </div>
        <div className="blocDC">
          <h3 className="descriptionsBots">Commande</h3>
          <p className="descriptions">
            Il est possible d'utiliser la commande suivante :
          </p>
          <ul className="listeCommandes">
            <li>- !tweet LeTweet</li>
          </ul>
        </div>
      </div>

      <h3 className="titleInstal">Twitter associé</h3>
      <div className="iconsInstall">
        <a
          href="https://twitter.com/BiiiiipBooop"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="icons" />
        </a>
      </div>
    </div>
  );
}
