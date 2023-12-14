import './Footer.css';
import { Contact } from '../Contact/Contact';
import { Info } from '../Info/Info';

export const Footer = () => {
    return (
        <footer className='App-footer'>
        <Info />
        <Contact />
      </footer>
    )
}