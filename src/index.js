import React from "react";
import ReactDOM from "react-dom"
import "./index.css";

function Square(props) {
    return (
        <button className="square"
                onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {


    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[{
                squars: Array(9).fill(null)
            }],
            xIsNext:true,
            stepNumber:0,
            winner:null
        }
    }
    jumpTo(step){
        const current= this.state.history[step].squars;
        const winner= calculateGameWinner(current);
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0,
            winner:winner
        })
    }
    handleClick(index){
        const history= this.state.history.slice(0,this.state.stepNumber+1);
        const current= history[history.length-1].squars;

        const squars = current.slice();
        if (squars[index] || this.state.winner){
            return;
        }

        squars[index]=this.state.xIsNext?"X":"O";
        const winner = calculateGameWinner(squars);
        this.setState(pervState=>({
            history:history.concat([{
                squars:squars
            }]),
            winner:winner,
            stepNumber:history.length,
            xIsNext:!pervState.xIsNext
        }));
    }
    render() {
        const history= this.state.history;
        const current= history[this.state.stepNumber].squars;
        const winner= calculateGameWinner(current);
        let status = 'Next player: '+(this.state.xIsNext?"X":"O");
        if (winner){
            status= "Winner is : "+this.state.winner;
        }
        const moves= history.map((step,move)=>{
            const desc= move? "Jump To Move #"+move:"Jump To Start Game";
            return (<li key={move}>
                <button onClick={()=>this.jumpTo(move)}>{desc}</button>
            </li>)
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current}
                           onClick={(i)=>this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateGameWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
