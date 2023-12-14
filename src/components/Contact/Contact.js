import './Contact.css';
import twitter from '../../images/icon/twitter.svg';
import insta from '../../images/icon/insta.svg';
import facebook from '../../images/icon/facebook.svg';

export const Contact = () => (
    <div className='App-contact'>
          <img src={twitter} alt="twitter"></img>
          <img src={insta} alt="instagram"></img>
          <img src={facebook} alt="facebook"></img>
        </div>
)