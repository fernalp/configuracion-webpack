import '../css/componentes.css';
import logowebpack from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {

    console.log('Creamos una etiqueta h1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    //Img

    console.log(logowebpack);

    const img = document.createElement('img');
    img.src = logowebpack;
    document.body.append(img);

}