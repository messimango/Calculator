function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const show = (symbol) => {
        setExpression(prev => prev + symbol)
        if(expression[expression.length - 1] == "="){
            if(/[0-9.]/.test(symbol)) {
                setExpression(symbol);
            } else {
                setExpression(answer + symbol);
            }
        }
    };

    const compute = () => {
        setAnswer(eval(expression))
        setExpression(prev => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    }
    const del = () => {
        setExpression((prev) => prev.split("").slice(0, prev.length-1).join(""));
        setAnswer(0);
    }

    return (
    <div className="container calculator" id="calculator">

        <div className="display">
            <input id="display" type="text" value={expression} placeholder="0" disabled/>
            <div className="total">{answer}</div>  
        </div>

        <button onClick={allClear} className="grey AC" id="clear">AC</button>
        <button onClick={show} className="grey integer" id="interger">+/-</button>
        <button onClick={() => show("%")} className="grey percent" id="percent">%</button>
        <button onClick={() => show("/")} className="divide" id="divide">/</button>

        <button onClick={() => show("7")} className="black seven" id="seven">7</button>
        <button onClick={() => show("8")} className="black eight" id="eight">8</button>
        <button onClick={() => show("9")} className="black nine" id="nine">9</button>
        <button onClick={() => show("*")} className="multiply" id="multiply">*</button>

        <button onClick={() => show("4")} className="black four" id="four">4</button>
        <button onClick={() => show("5")} className="black five" id="five">5</button>
        <button onClick={() => show("6")} className="black six" id="six">6</button>
        <button onClick={() => show("-")} className="subtract" id="subtract">-</button> 

        <button onClick={() => show("1")} className="black one" id="one">1</button>
        <button onClick={() => show("2")} className="black two" id="two">2</button>
        <button onClick={() => show("3")} className="black three" id="three">3</button>
        <button onClick={() => show("+")} className="add" id="add">+</button>

        <button onClick={() => show("0")} className="black zero" id="zero">0</button>
        <button onClick={() => show(".")} className="black decimal" id="decimal">.</button>
        <button onClick={del} className="black delete" id="del">DEL</button>
        <button onClick={compute} className="equals" id="equals">=</button>
    </div>
);
}

ReactDOM.render(<App />, document.getElementById("watermelon"));