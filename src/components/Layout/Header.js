import { Nav } from "./Header-Nav/Nav"
import { useState } from "react"
import './HeaderModuleStyle.css'


const Header = () => {


    const [boton, setBoton] = useState(true);

    function handleButton () {
            setBoton (prev => !prev);

    }

    return (
        <header className="center">
            <div className="container-del-Header">
                <div className='logo-h'>
                    <img src="/BeirutElMago/imagenes/logo-f.png" alt="Imagen del Mago Beirut" />
                </div>
                <div className="container-Nav">
                    <h1 className="titulo">EL MAGO <strong>BEIRUT</strong></h1>
                    {/* BARRA DE NAVEGACION */}
                    <Nav boton={boton} />
                </div>
                <button onClick={handleButton} style={{ transform: boton ? 'rotate(90deg)' : 'rotate(0deg)' }} >|||</button>
            </div>
        </header>
    )
}
export default Header;