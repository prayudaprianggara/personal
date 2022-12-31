import photo from '../images/photo.png'
import Button from './Button'
import ReactTypingEffect from 'react-typing-effect'

const Hero = () => {
  const name = 'Prayuda Prianggara'
  const role = 'Front End Developer...'

  return (
    <div className="hero font-poppins pt-36  h-full md:h-full" id="hero">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Bonjour, I'm ...
              <span className="block text-dark text-3xl lg:text-4xl">
                <ReactTypingEffect
                  text={[name, role]}
                  speed={100}
                  eraseDelay={800}
                  eraseSpeed={100}
                  typingDelay={100}
                />
              </span>
            </h1>
            <p className="font-medium text-slate-600 mb-4 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatibus tenetur voluptatem quibusdam quia reiciendis repellat
              cupiditate vel sunt. Fuga.
            </p>
            <Button title="About Me" className="ml-0" />
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                className="max-w-full mx-auto md:scale-125"
                src={photo}
                alt="profile"
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#6366F1"
                    d="M56.7,-19.1C63.4,2.3,51.9,29,33.6,41.1C15.2,53.2,-10,50.8,-27.8,37.9C-45.7,25,-56.3,1.7,-50.4,-18.5C-44.5,-38.7,-22.3,-55.6,1.4,-56C25,-56.5,50,-40.4,56.7,-19.1Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
