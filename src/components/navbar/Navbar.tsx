import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-[#B4E1FF]  text-[#694873]'>
            
                <div className="container flex justify-between text-lg">
                    <img src="https://cdn-icons-png.freepik.com/512/7512/7512993.png?ga=GA1.1.334053764.1738073481"
                    className="w-12" />
                <Link to='/home' className="text-2x1 font-bold">PEOPLE MANAGER</Link>

                    <div className='flex gap-4'>
                        <Link to='#' className='hover:underline'>Buscar cargo</Link>
                        <Link to='#' className='hover:underline'>Buscar funcionário</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar