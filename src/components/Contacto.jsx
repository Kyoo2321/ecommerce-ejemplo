import { useForm } from 'react-hook-form'

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data)  => {
        console.log(data);
    }

  return (
    
    <div className='container'>
        <h1>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>

            <input className="formulario-item" type='text' placeholder='Ingresa tu nombre' {...register("nombre")}/>
            <input className="formulario-item" type='email' placeholder='Ingresa tu e-mail' {...register("email")}/>
            <input className="formulario-item" type='phone' placeholder='Ingresa tu telefono' {...register("phone")}/>
            
            <button type='submit'>Enviar</button>

        </form>
    </div>

  )
}

export default Contacto