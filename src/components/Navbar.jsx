import React, { useState, useEffect } from 'react';
import { Badge, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from '../scripts.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    const total = 25000;
    const token = true;

    // /*https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp*/
    // const totalFormateado = total.toLocaleString('es-CL', {
    //     style: 'currency',
    //     currency: 'CLP',
    //     minimumFractionDigits: 0,
    // });

    // Cargar el tema guardado en localStorage o usar el tema claro por defecto
    // aun no :)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : false;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleThemeChange = (theme) => {
        const isDark = theme === 'oscuro';
        setIsDarkMode(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Guardar en localStorage
    };

    return (
        <Navbar className="navbar navbar-expand-lg myNavBar navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Button variant='ligth'>🍕 Home</Button>
                        </li>

                        <li className="nav-item">
                            <Button variant='ligth'> {token ? '🔓 Profile' : '🔒 Register'}</Button>
                        </li>

                        <li className="nav-item">
                            <Button variant='ligth'> {token ? '🔐 Logout' : '🔐 Login'}</Button>
                        </li>
                        <li>

                        </li>

                    </ul>

                </div>
                <div className="text-end">
                    <Button variant="success" style={{ margin: '0 5px' }}><a className="nav-link" href="#">🛒 Total: {formatNumber}</a></Button>
                    {/* <Button variant="secondary" style={{ margin: '0 5px' }} onClick={() => handleThemeChange(isDarkMode ? 'claro' : 'oscuro')}><a className="nav-link" href="#">  <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} /> </a></Button> */}
                </div>
            </div>
        </Navbar >
    );
};
export default MyNavbar;
