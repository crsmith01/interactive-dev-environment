import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const onClick = () => {
        console.log(input)
    }

    return <div>
        <textarea 
            value={input} 
            onChange={e => setInput(e.target.value)}>
        </textarea>
        <div>   
            <button onClick={onClick}>Submit</button>
        </div>
        <pre>{code}</pre>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));