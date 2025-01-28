import { Link } from "react-router-dom";
import home_image from "../../assets/home_image.svg";

function Home() {
    return (
        <>
            <div className="bg-[#F5F5F5] flex justify-center min-h-screen">
                <div className="container grid grid-cols-2 text-[#36311F]">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">PEOPLE MANAGER</h2>
                        <p className="text-xl">Facilitando o gerenciamento de recursos humanos.</p>

                        <div className="flex justify-around gap-4">
                            <Link
                                to="/sobre"
                                className="bg-[#694873] text-[#F5F5F5] hover:bg-[#2e1635] py-2 px-6 rounded-xl font-bold transition-all duration-300"
                            >
                                Sobre o Projeto
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={home_image}
                            alt="Imagem Página Home"
                            className="w-3/3"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
