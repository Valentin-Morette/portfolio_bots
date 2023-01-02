import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import cw from "../../assets/img/cw.png";

export default function BotsDiscordCw() {
  return (
    <div className="global">
      <h1>Bot Discord CodeWarsStats</h1>
      <img src={cw} alt="BDM" className="imgTuto" />
      <div className="descAndCommandes">
        <div className="blocDC">
          <h3 className="descriptionsBots firstDesc">Description</h3>
          <p className="descriptions">
            Le bot Discord CodewarsStats est un bot Discord qui permet de
            consulter les statistiques et le classement des utilisateurs de
            Codewars.
          </p>
        </div>
        <div className="blocDC">
          <h3 className="descriptionsBots">Commande</h3>
          <p className="descriptions">
            Après avoir ajouté le bot à votre serveur, vous pouvez l'utiliser
            avec la commande suivantes :
          </p>
          <ul className="listeCommandes">
            <li>- !cw PseudoCodewars</li>
          </ul>
        </div>
      </div>

      <h3 className="descriptionsBots">Installation</h3>
      <div className="iconsInstall">
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1050710452595855430&permissions=2048&scope=bot"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} className="icons" />
        </a>
        <a
          href="https://github.com/Valentin-Morette/BotDiscordCW"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </a>
      </div>
    </div>
  );
}
