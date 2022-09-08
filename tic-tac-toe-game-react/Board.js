function Board() {
    const [squares, setSquares] = React.useState({
        squaresArr : Array(9).fill(null),
        currentPlayerX : true
    }) 

    function handleClick(i) {
        const newSquares = squares.squaresArr.slice()   
        if (calculateWinner(squares) || squares.squaresArr[i]) {
            return
        }
        newSquares[i] = squares.currentPlayerX ? 'X' : 'O'        
        setSquares({
            squaresArr: newSquares,
            currentPlayerX : !squares.currentPlayerX
        })
    }
    
    function calculateWinner(squares) {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < conditions.length; i++) {
            const [a, b, c] = conditions[i]
            if(squares.squaresArr[a] && squares.squaresArr[a] === squares.squaresArr[b] && squares.squaresArr[a] === squares.squaresArr[c]) {
                return squares.squaresArr[a]
            }
        }
        return null
    }

    const winner = calculateWinner(squares)
    let status
    if(winner) {
        status = `Winner: ${winner}`
    }
     else{
         status = `Next Player: ${squares.currentPlayerX ? 'X' : 'O'}`
     }

    let arr = squares.squaresArr
    let renderSquare = arr.map((item, i) => <Square key={i}
                                                    value={item}
                                                    onClick={() => handleClick(i)}
        />        
    ) 

    function reset() {       
        setSquares({
            squaresArr : Array(9).fill(null),
        currentPlayerX : true
        })
    }   

    return (
        <div className="game"> 
        <p><em><b>{status}</b></em></p>      
        <div className="board">  
        {renderSquare}             
        </div>
        <button className='reset-btn' onClick={reset}>Reset Game</button>
        </div>
    )    

}