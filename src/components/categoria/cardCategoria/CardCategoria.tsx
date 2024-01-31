import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg '>
            <header className='py-2 px-6 bg-cyan-400 text-rose-50 font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-6 text-2xl bg-white text-rose-950 h-full font-semibold'>{categoria.nome}</p>

            <div className="flex bg-sky-500 justify-center font-semibold">
                <Link to={`/editarcategoria/${categoria.id}`} className="flex justify-center text-rose-950 bg-slate-400 border-white border-solid px-4 py-2 hover:bg-cyan-500 w-full">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className="rounded text-white border-white border-solid px-4 py-2 hover:bg-violet-600
         w-full flex justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria