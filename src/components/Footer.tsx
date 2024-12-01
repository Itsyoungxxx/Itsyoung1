import '../styles/footer.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";

export default function Footer() {
    return (
        <>
          <div className="footer-main">
            <div className='footer1'>
              <div className='footer1-one'>
                <div className='footer1-one-titre'>Carnaval YMK</div>
                <div className='footer2-one-text'>
                  <p>
                  Célébrons ensemble la richesse <br />
                  culturelle de la Côte d'Ivoire lors de la <br />
                  3ème édition du Carnaval de <br />
                  Yamoussoukro.
                  </p>
                </div>
              </div>
              <div className='footer1-two'>
                <div className='footer1-two-titre'>Contact</div>
                <div className='f1-two-un'>
                  <div className='f1-two-un-logo'>
                    <MdOutlineMailOutline size={25}/>
                  </div>
                  <div className='f1-two-un-text'>
                    contact@canrvalyamoussoukro.ci
                  </div>
                </div>
                <div className='f1-two-deux'>
                  <div className='f1-two-deux-logo'>
                    <SlPhone size={25}/>
                  </div>
                  <div className='f1-two-deux-text'>
                    +225 07 00 00 00
                  </div>
                </div>
                <div className='f1-two-trois'>
                  <div className='f1-two-trois-logo'>
                    <LuMapPin size={25}/>
                  </div>
                  <div className='f1-two-trois-text'>
                    Place Jean Paul 2, Yamoussoukro
                  </div>
                </div>
              </div>
              <div className='footer1-three'>
                <div className='footer1-three-titre'>Liens Rapides</div>
                <div className='f1-three-un'>À propos</div>
                <div className='f1-three-deux'>Programme</div>
                <div className='f1-three-trois'>Opportunités</div>
                <div className='f1-three-quatre'>S'inscrire</div>
              </div>
              <div className='footer1-four'>
                <div className='footer1-four-titre'>Suivez-nous</div>
                <div className='footer1-four-logo'>
                  <div className='facebook'>
                    <LuFacebook size={25}/>
                  </div>
                  <div className='instagram'>
                    <FaInstagram size={25}/>
                  </div>
                  <div className='twitter'>
                    <LuTwitter size={25}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer2'>
              © 2024 Carnaval de Yamoussoukro. Tous droits réservés.
            </div>
          </div>
        </>
    )
}