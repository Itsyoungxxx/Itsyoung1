import Header from '../../components/Header'
import '../../styles/propos.css'
import { FiCalendar } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { PiBuildingBold } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { FiBriefcase } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import Img2 from '../../assets/image2.jpg'
import Img3 from '../../assets/image3.jpg'

function Propos() {
    return (
        <>
           <Header />
           <div className='propos-main'>
             <section className='section1'>
                <div className='part1'>
                    <div className='orange'></div>
                    <div className='blanc'></div>
                    <div className='vert'></div>
                </div>
                <div className='part2'>
                    <p>
                      Carnaval de <br />Yamoussoukro
                    </p>
                </div>
                <div className='part3'>
                    <div className='part3-text1'>3ème Édition</div>
                    <div className='part3-text2'></div>
                    <div className='part3-text3'>La Fierté de la Côte d'Ivoire</div>
                </div>
                <div className='part4'>
                    <div className='part4-un'>
                        <div className='part4-un-logo'>
                          <FiCalendar size={25} color='#FF6B00' />
                        </div>
                        <div className='part4-un-text'>
                          05-08 Décembre 2024
                        </div>
                    </div>
                    <div className='part4-deux'>
                        <div className='part4-deux-logo'>
                          <LuMapPin size={25} color='#009E60' />
                        </div>
                        <div className='part4-deux-text'>
                          Place Jean Paul 2
                        </div>
                    </div>
                    <div className='part4-trois'>
                        <div className='part4-trois-logo'>
                          <RiGroupLine size={25} color='#FF6B00' />
                        </div>
                        <div className='part4-trois-text'>
                          +10,000 Participants
                        </div>
                    </div>
                </div>
                <div className='part5'>
                    <button className='part5-btn1'>Participer au Carnaval</button>
                    <button className='part5-btn2'>Voir le Programme</button>
                </div>
             </section>
             <section className='section2'>
               <div className='section2-titre'>À Propos du Carnaval</div>
               <div className='section2-part'>
                 <div className='section2-part1'>
                  <p className='section2-part1-titre'>
                  Le Carnaval de Yamoussoukro incarne l'esprit festif et l'hospitalité <br /> 
                  légendaire de la Côte d'Ivoire. Dans la pure tradition de l'Akwaba ivoirien, <br /> 
                  nous célébrons notre riche patrimoine culturel à travers la danse, la <br /> 
                  musique, la gastronomie et l'art.
                  </p>
                  <div className='akwaba'>
                    <div className='akwaba1'>
                      <div className='akwaba1-logo'>
                        <FaRegHeart size={30} color='#FF6B00' />
                      </div>
                      <p className='akwaba1-text'>L'Esprit Akwaba</p>
                    </div>
                    <p className='akwaba2'>
                      L'hospitalité ivoirienne dans toute sa splendeur
                    </p>
                  </div>
                  <div className='culturelle'>
                    <div className='culturelle1'>
                      <div className='culturelle1-logo'>
                        <IoEarthOutline size={30} color='#009E60' />
                      </div>
                      <p className='culturelle1-text'>Diversité Culturelle</p>
                    </div>
                    <p className='culturelle2'>Une mosaïque des traditions de nos 60 ethnies</p>
                  </div>
                  <div className='innovation'>
                    <div className='innovation1'>
                      <div className='innovation1-logo'>
                        <BsStars size={30} color='#FF6B00' />
                      </div>
                      <p className='innovation1-text'>Innovation</p>
                    </div>
                    <p className='innovation2'>La fusion entre tradition et modernité</p>
                  </div>
                 </div>
                 <div className='section2-part2'>
                   <img src={Img2} alt="" className='img2'/>
                   <img src={Img3} alt="" className='img3'/>
                 </div>
               </div>
             </section>
             <section className='section3'>
              <p className='section3-titre'>Programme des Festivités</p>
              <div className='section3-part1'>
                <div className='section3-part1-un'>
                  <div className='section3-part1-un-logo'>
                    <FiCalendar size={25} color='#FF6B00' />
                  </div>
                  <p className='section3-part1-un-text'>05 Décembre</p>
                </div>
                <div className='section3-part1-deux'>
                  <div className='section3-part1-deux-logo'>
                    <div className='logo-micro'><HiOutlineMicrophone size={20}/></div>
                    <div className='texte-logo-micro'>
                    <div className='texte-logo-micro1'>
                      <div className='logo-watch1'><MdOutlineWatchLater size={15} color='#4b5563'/></div>
                      <div className='text-watch1'>10:00</div>
                    </div>
                    <div className='texte-logo-micro2'>Cérémonie d'Ouverture</div>
                    <div className='texte-logo-micro3'>Parade inaugurale et discours officiels</div>
                  </div>
                </div>
                </div>
                <div className='section3-part1-trois'>
                <div className='section3-part1-trois'>
                  <div className='section3-part1-trois-logo'>
                    <div className='logo-cuisine'><TbToolsKitchen2 size={20}/></div>
                    <div className='texte-logo-cuisine'>
                    <div className='texte-logo-cuisine1'>
                      <div className='logo-watch2'><MdOutlineWatchLater size={15} color='#4b5563'/></div>
                      <div className='text-watch2'>14:00</div>
                    </div>
                    <div className='texte-logo-cuisine2'>Village Gastronomique</div>
                    <div className='texte-logo-cuisine3'>Découverte des saveurs locales</div>
                  </div>
                </div>
                </div>
                </div>
              </div>
              <div className='section3-part2'>
              <div className='section3-part2-un'>
                  <div className='section3-part2-un-logo'>
                    <FiCalendar size={25} color='#FF6B00' />
                  </div>
                  <p className='section3-part2-un-text'>06 Décembre</p>
                </div>
                <div className='section3-part2-deux'>
                  <div className='section3-part2-deux-logo'>
                    <div className='logo-sac'><FiShoppingBag size={20}/></div>
                    <div className='texte-logo-sac'>
                    <div className='texte-logo-sac1'>
                      <div className='logo-watch3'><MdOutlineWatchLater size={15} color='#4b5563'/></div>
                      <div className='text-watch3'>09:00</div>
                    </div>
                    <div className='texte-logo-sac2'>Marché Artisanal</div>
                    <div className='texte-logo-sac3'>Exposition et vente d'artisanat local</div>
                  </div>
                </div>
                </div>
                <div className='section3-part2-trois'>
                <div className='section3-part2-trois'>
                  <div className='section3-part2-trois-logo'>
                    <div className='logo-zik'><HiOutlineMusicNote size={20}/></div>
                    <div className='texte-logo-zik'>
                    <div className='texte-logo-zik1'>
                      <div className='logo-watch4'><MdOutlineWatchLater size={15} color='#4b5563'/></div>
                      <div className='text-watch4'>20:00</div>
                    </div>
                    <div className='texte-logo-zik2'>Concert de Musique</div>
                    <div className='texte-logo-zik3'>Artistes nationaux et internationaux</div>
                  </div>
                </div>
                </div>
                </div>
              </div>
              <div className='section3-btn'>
                <div className='section3-btn-text'>Réserver votre place</div>
                <div className='section3-part2-trois-logo'>
                   <FiCalendar size={20} color='white'/>
                </div>
              </div>
             </section>
             <section className='section4'>
              <div className='section4-titre'>Opportunités</div>
              <div className='section4-card'>
                <div className='section4-card1'>
                  <div className='section4-card1-container'>
                   <div className='logo-build'><PiBuildingBold size={50} color='#FF6B00'/></div>
                   <div className='logo-build-titre'>Exposants</div>
                   <p className='logo-build-text'>
                     Présentez vos produits et services à plus de <br /> 10,000 visiteurs
                   </p>
                   <div className='logo-build-part'>
                    <div className='logo-build-part1'>
                      <div className='logo-build-part1-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <p className='logo-build-part1-text'>Espace d'exposition dédié</p>
                    </div>
                    <div className='logo-build-part2'>
                      <div className='logo-build-part2-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <p className='logo-build-part2-text'>Networking</p>
                    </div>
                    <div className='logo-build-part3'>
                      <div className='logo-build-part3-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <p className='logo-build-part3-text'>Visibilité médiatique</p>
                    </div>
                   </div>
                   <div className='savoirplus1'>
                    <div className='savoirplus1-text'>En savoir plus</div>
                    <div className='savoirplus1-logo'><FaArrowRight color='#FF6B00' /></div>
                   </div>
                  </div>
                </div>
                <div className='section4-card2'>
                  <div className='section4-card2-container'>
                   <div className='logo-group'><GrGroup size={50} color='#FF6B00'/></div>
                   <div className='logo-group-titre'>Artistes</div>
                   <p className='logo-group-text'>
                    Partagez votre talent sur une scène <br /> internationale
                   </p>
                   <div className='logo-group-part'>
                    <div className='logo-group-part1'>
                      <div className='logo-group-part1-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-group-part1-text'>Performances live</div>
                    </div>
                    <div className='logo-group-part2'>
                      <div className='logo-group-part2-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-group-part2-text'>Collaboration artistique</div>
                    </div>
                    <div className='logo-group-part3'>
                      <div className='logo-group-part3-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-group-part3-text'>Promotion culturelle</div>
                    </div>
                   </div>
                   <div className='savoirplus2'>
                    <div className='savoirplus2-text'>En savoir plus</div>
                    <div className='savoirplus2-logo'><FaArrowRight color='#FF6B00' /></div>
                   </div>
                  </div>
                </div>
                <div className='section4-card3'>
                  <div className='section4-card3-container'>
                   <div className='logo-briefcase'><FiBriefcase size={50} color='#FF6B00'/></div>
                   <div className='logo-briefcase-titre'>Sponsors</div>
                   <p className='logo-briefcase-text'>
                    Associez votre marque à un événement majeur
                   </p>
                   <div className='logo-briefcase-part'>
                    <div className='logo-briefcase-part1'>
                      <div className='logo-briefcase-part1-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-briefcase-part1-text'>Visibilité premium</div>
                    </div>
                    <div className='logo-briefcase-part2'>
                      <div className='logo-briefcase-part2-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-briefcase-part2-text'>Relations publiques</div>
                    </div>
                    <div className='logo-briefcase-part3'>
                      <div className='logo-briefcase-part3-arrow'><FaArrowRight color='#FF6B00' /></div>
                      <div className='logo-briefcase-part3-text'>Activation de marque</div>
                    </div>
                   </div>
                   <div className='savoirplus3'>
                    <div className='savoirplus3-text'>En savoir plus</div>
                    <div className='savoirplus3-logo'><FaArrowRight color='#FF6B00' /></div>
                   </div>
                  </div>
                </div>
              </div>
             </section>
             <section className='section5'>
              <div className='section5-titre'>Inscription</div>
              <div className='section5-part1'>
                <div className='section5-part1-un'>
                  <p className='section5-part1-un-text'>Nom d'utilisateur</p>
                  <input type='text' className='input-username' />
                </div>
                <div className='section5-part1-deux'>
                  <p className='section5-part1-deux-text'>Email</p>
                  <input type='email' className='input-email' />
                </div>
              </div>
              <div className='section5-part2'>
              <div className='section5-part2-un'>
                  <p className='section5-part2-un-text'>Téléphone</p>
                  <input type='text' className='input-phone' />
                </div>
                <div className='section5-part2-deux'>
                  <p className='section5-part2-deux-text'>Type de participation</p>
                  <div className='input-type'>
                      <select id="Participation" name="Participation" className='input-type-select'>
                        <option value="Visiteur">Visiteur</option>
                        <option value="Exposant">Exposant</option>
                        <option value="Artiste">Artiste</option>
                        <option value="Sponsor">Sponsor</option>
                      </select>
                  </div>
                </div>
              </div>
              <div className='section5-part3'>
                <div className='section5-part3-text'>Message (Optionnel)</div>
                <input type="text" className='input-message' />
              </div>
              <div className='section5-part4'>
                <div className='section5-part4-text'>Envoyer l'inscription</div>
                <div className='section5-part4-logo'>
                  <FaRegPaperPlane color='white'/>
                </div>
              </div>
             </section>
           </div>
        </>
    )
}

export default Propos