import { useState } from "react";
import style from './Form.module.css';
import validation from "./validation";


const validate = function (form, errors, setErrors) {
   if(!form.email) {
      setErrors({...errors, email: "Email Vacio"});
   } else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){ 
            if(!form.password) {
               setErrors({...errors, email: "",password: "Password Requerido"});
            } else {
               setErrors({...errors, email: "",password: ""});
            }
        }else{
            setErrors({...errors, email: "Email Invalido"});
        }
   }
 }

const Form = function({login}) {
    const [form, setForm] = useState({email: "", password: "",});
    const [errors, setErrors] = useState({ email: "", password: "",})


    const handleChange = function(event) {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({...form, [property]: value}));
        setForm({...form, [property]: value });
        validate({...form, [property]: value}, errors, setErrors);
    }
    const submitHandler = function(event) {
        event.preventDefault();
        login(form);
    }

    return (
        <div className={style.Form }>
            <form onSubmit={submitHandler}>
                <h1 className={style.Titulo}>Ingreso al Sistema</h1>
                <div>
                    <div>
                       <label htmlFor="email" className={style.Subtitulo}>Email :</label>
                       <input 
                         type="text"
                         name="email"
                         className={!errors.email ? style.input: style.error}
                         onChange={handleChange}
                         value={form.email}
                       />
                       <span>{errors.email}</span>
                     </div>
                        <div>
                        <label htmlFor="password" className={style.Subtitulo}>Clave :</label>
                        <input 
                            type="password"
                            name="password"
                            className={!errors.password ? style.input: style.error}
                            onChange={handleChange}
                            value={form.password}
                        />
                        <span>{errors.password}</span>
                     </div>
                          <button type="submit" className={style.boton}>Ingresar</button>
                </div>  
            </form>
        </div>
    )
}

export default Form;