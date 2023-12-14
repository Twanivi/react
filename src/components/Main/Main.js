import './Main.css';
import { Card } from '../Card/Card';
import back1 from '../../images/back-wildlife.png';
import back2 from '../../images/back-drone.png';
import back3 from '../../images/back-arhitecture.png';

export const Main = () => (
  <main className='app-main'>
    <Card imageBack={back1} title="Wildlife Photography" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." buttons="Read more" />
    <Card imageBack={back2} title="Drone Photography" text="Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam." buttons="Read more" />
    <Card imageBack={back3} title="Architecture Photography" text="Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec." buttons="Read more" />
  </main>
)