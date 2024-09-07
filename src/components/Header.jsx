import React from 'react';
import bgImagen from '../assets/images/header2.png';

export const Header = () => {
    return (
        <>
            <div className="p-5 text-center bg-image" style={{ backgroundImage: `url(${bgImagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="mask"> {/* Agrega una máscara para oscurecer el fondo */}
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white" style={{ filter: 'none' }}> {/* Fondo opaco */}
                            <h1 className="mb-3" >¡Pizzería Mamma Mía!</h1>
                            <h4 className="mb-3">¡Tenemos las mejores pizzas que podrás encontrar!</h4>
                            <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Mira nuestra carta</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
