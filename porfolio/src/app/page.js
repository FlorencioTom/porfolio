import Nav from "./Nav/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav/>
      <section className="flex py-4 px-4 max-w-screen-xl mx-auto flex items-center px-4">
      <div className="rounded-full border-2 border-blue-500 p-3"> {/* Aquí agregamos padding para la separación */}
        <Image 
          src="/florencio.jpg" 
          alt="Florencio" 
          width={90} 
          height={90} 
          className="rounded-full object-cover shadow-lg"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center py-4">
  <h1 className="text-3xl font-semibold mb-4">Bienvenido a mi Porfolio</h1> {/* Centrado y espacio debajo del título */}
  
  <a href="https://www.linkedin.com/in/florencio-tom-4496a3198/" target="_blank" rel="noopener" 
     className="flex items-center justify-center transition transform hover:scale-105"> 
    <div className="flex items-center"> 
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]"> 
        <span className="overflow-hidden absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                        bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]">
        </span> 
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 
                        bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 
                        backdrop-blur-3xl whitespace-nowrap">
          Disponible para trabajar 
        </div> 
      </span>
    </div> 
  </a>
</div>


      </section>
    </>
  );
}
