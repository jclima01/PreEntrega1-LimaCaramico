import React from 'react'

const ItemCount = () => {
  
    const [ contador, setearContador ] = useState(0) 
    const [booleano, setBooleano] = useState(true)
     // count = count + 1 - count += 1 - count ++
     const handleCount = () => {
        // count ++
        // console.log(count)
        setearContador(contador + 1)
    }

    const hanldeBool = ( ) => setBooleano(!booleano)
    
    return (
        <center>
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            + 
        </button>     
        <label htmlFor="">{contador}</label>
      
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            - 
        </button> 
        <br />    
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            agregar al carrito 
        </button>     
        <br></br>
        {/* <button 
            className="btn btn-outline-primary" 
            onClick={hanldeBool} 
        > 
            Ejecutar Booleano
        </button>      */}
    </center>
    )
  
}

export default ItemCount