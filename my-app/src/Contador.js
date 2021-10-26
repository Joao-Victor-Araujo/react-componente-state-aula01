import React, {useState} from 'react';
import ContaStyle from "./ContaStyle.css";


export default function Contador(){
    const[num, setNum] = useState(0);

    return(
        <div>
            <p>Contador: {num}</p>
            <button onClick={()=> setNum(num+2)}>Mais 2</button>
            <br/> <br/>
            <button onClick={()=> setNum(num-1)}>Menos 1</button>
            <br/> <br/>
            <button onClick={()=> setNum(0)}>Zerar</button>
        </div>
    );
}