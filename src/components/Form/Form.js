import React, { useState } from 'react';
import './Form.css';


export const Form =({setBuyer})=>{

const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [mail, setMail]= useState('');

const newBuyer = e =>{
e.preventDefault();
const buyer =({
name: name,
phone:phone,
mail:mail
})
setName('');
setPhone('');
setMail('');
setBuyer(buyer);
}

return<form onSubmit={newBuyer}>
<p>
<label>Nombre:</label>
<br></br>
<input value={name} onChange={ e=> setName(e.target.value)} placeholder="Pedro Sanchez" id="name" type="text" autoComplete="name" enterKeyHint="next" required autoFocus/>
</p>
<p>
<label>Teléfono:</label>
<br></br>
<input value={phone} onChange={ e=> setPhone(e.target.value)} placeholder="+59 9 11 123 456 "id="phone" type="text" autoComplete="phone"enterKeyHint="next"/>
</p>
<p>
<label>Mail:</label>
<br></br>
<input value={mail} onChange={ e=> setMail(e.target.value)} placeholder="hola@plantae.com "id="mail" type="email" autoComplete="email"enterKeyHint="done"/>
</p>
<button type='submit' disabled={name==='' || phone==='' || mail===''}>Siguiente</button>

</form>
}