import _ from 'lodash';
import './estilo.css';
import Flag from './usa.gif';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json from './datos.json5';
import './estilo.scss';

if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW registrado",registration);
        }).catch(err=>{
            console.log("SW no registrado",err)
        });
    });
}

function component(){
    const element = document.createElement('div');
    //lodash
    element.innerHTML = _.join(['Hola','Webpack','Perrillos','Chacuacos'],' - ');
    element.classList.add('fondo');

    const miFlag = new Image();
    miFlag.src = Flag;

    element.appendChild(miFlag);



    console.log(Datos); 

    return element;
}

console.log(yaml.title); // output `YAML Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
document.body.appendChild(component());
document.body.classList.add('fondo');