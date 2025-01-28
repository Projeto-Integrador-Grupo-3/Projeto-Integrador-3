import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-[#B4E1FF]  text-[#694873]'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2x1 font-bold">
                    <img src="https://cdn-icons-png.freepik.com/512/7512/7512993.png?ga=GA1.1.334053764.1738073481"
                    className="w-12" />
                </Link>

                    <div className='flex gap-4'>
                        <Link to='/cadastrarcolaborador' className='hover:underline'>Cadastrar Colaborador</Link>
                        <Link to='/buscarcargo' className='hover:underline'>Buscar cargo</Link>
                        <Link to='/buscarcolaborador' className='hover:underline'>Buscar Colaborador</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar