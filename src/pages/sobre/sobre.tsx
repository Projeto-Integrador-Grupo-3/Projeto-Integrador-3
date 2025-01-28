function Sobre() { 

    return ( 
      <> 
        <div className="w-full bg-[#e2e9e6] flex justify-center items-center py-4"> 
          <div className="max-w-7xl flex flex-col lg:flex-row items-center text-center lg:text-left gap-8"> 
  
            <div className="flex flex-col items-center lg:items-start"> 
              <h1 className="text-9xl font-instrument-sans text-[#694873] mb-4">People Manager</h1> 
              <p className="text-2xl font-geist text-[#262626] mb-6">Desenvolvemos um sistema com Java (Spring Boot) no back-end 
                e React com Tailwind CSS no front-end, que permite Cadastrar, Buscar, Atualizar e Deletar (CRUD) registros de Colaboradores e Cargos. 
                O sistema conta com uma interface responsiva e intuitiva, integração eficiente via API e um banco de dados estruturado para garantir desempenho e confiabilidade. </p> 
            </div> 
  
            <div className="flex-shrink-0"> 
              <img 
                src="https://ik.imagekit.io/tkeh5vknk/sobre.svg?updatedAt=1738082352308" 
                alt="Imagem da Página Sobre" 
                className="w-full sm:w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] object-contain" 
              /> 
  
            </div> 
          </div> 
        </div> 
      </> 
    ); 
  
  } 
  
  export default Sobre; 