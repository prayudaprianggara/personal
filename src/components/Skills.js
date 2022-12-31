import html from '../images/html.png'
import css from '../images/css3.png'
import js from '../images/java-script.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind-css.png'

const Skill = () => {
  return (
    <div className="container pt-16 pb-32 ">
      <div className="container">
        <div className="w-full">
          <div className="md:w-full text-center mb-16">
            <h2 className="font-bold text-lg lg:text-2xl text-indigo-500 mb-2">
              SKILLS
            </h2>
            <p className="font-medium  text-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              minus repellendus, itaque soluta libero neque quam omnis eos
              officiis quae eius totam unde sint ad?
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <img className='w-[120px] mx-4 py-4 grayscale transition duration-300 hover:grayscale-0 lg:mx-6 xl:mx-8' src={html} alt="logo-html" />
            <img className='w-[120px] mx-4 py-4 grayscale transition duration-300 hover:grayscale-0 lg:mx-6 xl:mx-8' src={css} alt="logo-html" />
            <img className='w-[120px] mx-4 py-4 grayscale transition duration-300 hover:grayscale-0 lg:mx-6 xl:mx-8' src={js} alt="logo-html" />
            <img className='w-[120px] mx-4 py-4 grayscale transition duration-300 hover:grayscale-0 lg:mx-6 xl:mx-8' src={react} alt="logo-html" />
            <img className='w-[120px] mx-4 py-4 grayscale transition duration-300 hover:grayscale-0 lg:mx-6 xl:mx-8' src={tailwind} alt="logo-html" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
