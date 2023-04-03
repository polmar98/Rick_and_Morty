import { useState } from "react";
import style from './Form.module.css';

const validate = function (form, errors, setErrors) {
   if(!form.email) {
      setErrors({...errors, email: "Email Vacio"});
   } else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){ 
            setErrors({...errors, email: ""});
        }else{
            setErrors({...errors, email: "Email Invalido"});
        }
   }
   if(!form.password) {
      setErrors({...errors, password: "Password Requerido"});
   } else {
      setErrors({...errors, password: ""});
   }
}

const Form = function() {
    const [form, setForm] = useState({email: "", password: "",});
    const [errors, setErrors] = useState({ email: "", password: "",})

    const handleChange = function(event) {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]: value });
        validate({...form, [property]: value}, errors, setErrors);
    }
    const submitHandler = function(event) {
        event.preventDefault();
        alert('Login Exitoso');
    }

    return (
        <div className={style.Form }>
            <form onSubmit={submitHandler}>
                <h1 className={style.Titulo}>Ingreso al Sistema</h1>
                <div>
                   <label htmlFor="email" className={style.Subtitulo}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email :</label>
                   <input 
                      type="text"
                      name="email"
                      className={style.input}
                      onChange={handleChange}
                      value={form.email}
                   />
      
                </div>
                 <div>
                    <label htmlFor="password" className={style.Subtitulo}>Password :</label>
                    <input 
                       type="password"
                       name="password"
                       className={style.input}
                       onChange={handleChange}
                       value={form.password}
                    />
                 </div>
                 <div>
                    <button type="submit" className={style.boton}>Ingresar</button>
                 </div>

            </form>
        </div>
    )
}

export default Form;