import '../styles/header.css'
import { FiCalendar } from "react-icons/fi";

export default function Header() {
    return (
        <>
           <div className='header-main'>
             <div className='header1'>
                <div className='h1-color1'></div>
                <div className='h1-color2'></div>
                <div className='h1-color3'></div>
             </div>
             <div className='header2'>
                <div className='h2-un'>
                    <div className='h2-un-logo'>
                      <FiCalendar size={30} color='#FF6B00'/>
                    </div>
                    <div className='h2-un-text'>
                        <p>Carnaval YMK</p>
                    </div>
                </div>
                <div className='h2-deux'>
                    <ul>
                      <li>À propos</li>
                      <li>Programme</li>
                      <li>Opportunités</li>
                      <li>Infos Pratiques</li>
                      <li className='inscrire'>S'inscrire</li>
                    </ul>
                </div>
             </div>
           </div>
        </>
    )
}