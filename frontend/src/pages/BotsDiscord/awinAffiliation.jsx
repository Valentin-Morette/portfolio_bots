import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import awin from "../../assets/img/awin.png";

export default function BotDiscordCw() {
  return (
    <div className="global">
      <h1>AwinAffiliation</h1>
      <img src={awin} alt="BDM" className="imgTuto" />
      <div className="descAndCommandes">
        <div className="blocDC">
          <h3 className="descriptionsBots firstDesc">Description</h3>
          <p className="descriptions">
            AwinAffiliation est un bot Discord qui permet de générer des liens
            affiliés Awin pour les sites marchands Fnac, Eneba et Cdiscount.
            Veuillez noter que les bénéfices de l'affiliation générés par
            l'utilisation de ce bot seront pour le propriétaire du bot.
          </p>
        </div>
        <div className="blocDC">
          <h3 className="descriptionsBots">Commandes</h3>
          <p className="descriptions">
            Après avoir ajouté le bot à votre serveur, vous pouvez l'utiliser
            avec la commande suivantes :
          </p>
          <ul className="listeCommandes">
            <li>- !fnac lien_page_fnac</li>
            <li>- !cdiscount lien_page_cdiscount</li>
            <li>- !eneba lien_page_eneba</li>
          </ul>
        </div>
      </div>

      <h3 className="titleInstal">Installation</h3>
      <div className="iconsInstall">
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1061654712371396638&permissions=8&scope=bot"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} className="icons" />
        </a>
        <a
          href="https://github.com/Valentin-Morette/DiscordAwin"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </a>
      </div>
    </div>
  );
}
