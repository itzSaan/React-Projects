export default function Die(props) {
    let styles = {
        backgroundColor : props.isHeld ? '#98FB98' : 'white'
    }
    return (
        <div 
            className="dice"
            onClick={props.holdDice}
            style={styles}
        >
            <h2 className="dice-num">{props.value}</h2>
        </div>
    )
}