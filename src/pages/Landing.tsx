import './Landing.css'

export const Landing = () => {

  

  return (
    <div className="min-h-screen p-4 md:p-8">
        <div className="background-image flex flex-col justify-center items-center min-h-screen w-full">
            <div className="background-overlay flex flex-col justify-center items-center min-h-screen w-full p-4 gap-4">
              <a href="#about">
                <h1 className="text-white text-7xl">Kalle Riit</h1>
              </a>
              <div className="bg-white w-1/4 h-2"/>
            </div>
        </div>
    </div>
  )
}
