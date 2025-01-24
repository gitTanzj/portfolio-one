import callIcon from '../assets/icons/call.svg'
import homeIcon from '../assets/icons/home.svg'
import mailIcon from '../assets/icons/mail.svg'

export const Footer = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-end">
      <div className="flex justify-center items-center mb-24">
        <p className="text-lg">Thank you for checking out my portfolio! :)</p>
      </div>
      <div className="w-full h-96 bg-gray-600 text-white pt-8 flex justify-center md:block">
        <div className="w-1/3 flex flex-col justify-center items-center gap-8">
          <h3 className="text-6xl">Contact</h3>
          <div className="flex flex-col gap-2 text-xl">
            <div className="flex flex-row gap-4">
              <img src={callIcon}/>
              <p>+372 5686 5079</p>
            </div>
            <div>
              <a className="flex gap-4 hover:underline" href="mailto:kalle.riit@voco.ee">
                <img src={mailIcon}/>
                <p>kalle.riit@voco.ee</p>
              </a>
            </div>
            <div className="flex flex-row gap-4">
              <img src={homeIcon}/>
              <p>Kopli 1C, Tartu 50115</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
