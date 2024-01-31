import home from '/Users/edu_e/OneDrive/Área de Trabalho/Performance Goals Final/farmacia/src/assets/Medical prescription-amico.svg'

function Home() {
  return (
    <div className="grid grid-cols-2 bg-rose-300 text-gray-200">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-5xl">Seja bem vindo!</h1>
        <p className="text-lg">Aqui você encontra os melhores Medicamentos!</p>
        <button className="rounded border-solid border-2 w-1/5 py-2 bg-rose-400 hover:border-purple-400">Novo Produto</button>
      </div>
      <div id="imagem" className='flex justify-center'>
        <img src={home}alt="Logo Jogo"className="w-2/3"/>
      </div>
    </div>
  )
}

export default Home