import image from '../assets/images/_DSC4846.jpg'
import './About.css'

export const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full text-gray-800 p-4 gap-4">
      <div className="order-last md:order-first flex justify-end items-center">
        <div id="about-text-box" className="flex flex-col justify-start items-center border-2 border-gray-800 w-full md:w-2/3 h-2/3 p-8 gap-2 hover-black">
          <p className="text-lg font-normal">
            <p className="text-5xl font-normal">My name is <b>Kalle Riit</b>.</p>
            <br/>
            I am currently attending Tartu Vocational College and am currently in my third year of learning to be a software developer, but in total I have learned software development independently for about 5 years now. 
            I chose to take on this path of software development for the pure fun of it.
            For me, it’s really about creating something cool and in the best case even useful for other people to use and enjoy.

          </p>
        </div>
      </div>

      <div className="order-first md:order-last flex justify-center items-center">
        <div className="flex justify-start items-center p-8">
          <img src={image} className="w-full md:w-1/2 shadow-xl"/>
        </div>
      </div>
    </div>
  )
}
