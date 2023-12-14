import './Card.css';

export const Card = (props) => (
    <div className='App-card' style={{ backgroundImage: `url(${props.imageBack})`}}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button>{props.buttons}</button>
    </div>
)