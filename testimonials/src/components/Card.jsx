import imagenPerfil from '../assets/javi-foto-perfil.jpg'

export default function Card(){

    return <div className="bg-[#6B818C] p-4 flex sm:flex-col sm:items-center sm:w-60">

        <img className='w-48' src={imagenPerfil} alt="foto de perfil" />
        <div className='w-full p-4 flex flex-col tems-center gap-4'>
            <h1 className='text-xl font-semibold'>Javier Martínez</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a className='bg-[#31E981] py-1 px-4 font-semibold w-fit'>Contacto</a>

        </div>
    </div>
}