//import React, {useEffect, useState} from 'react';

export const EjerciciosPromise = () => {

function myPromesa(){
const promesa = new Promise((resolve, reject) =>{
    const ObjetoAGusto = {
        texto: "hola",
        data: "mi data",
        valor: 5
    }
    
    resolve(ObjetoAGusto);
});
promesa.then(result =>{
   setTimeout(result , 5000);
});

}

//useEffect(myPromesa,[])

return <div>

</div>    
}