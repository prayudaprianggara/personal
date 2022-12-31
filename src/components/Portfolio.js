import LandingPage from '../images/landing page.png'

const Portfolio = () => {
  return (
    <div className="container bg-slate-200">
      <div className="w-full px-4 pt-4">
        <div className="w-full md:w-full lg:w-full mx-auto text-center mb-16">
          <h2 className="font-bold text-xl lg:text-2xl text-primary mb-2">
            PORTFOLIO
          </h2>
          <h3 className="font-bold text-2xl lg:text-3xl">Last Project</h3>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden mb-4">
              <img className="w-full" src={LandingPage} alt="Personal Web" />
            </div>
            <h3 className="font-semibold text-xl text-center text-dark">
              Personal Web
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden mb-4">
              <img className="w-full" src={LandingPage} alt="Landing Page" />
            </div>
            <h3 className="font-semibold text-xl text-center text-dark">
              Landing Page
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden mb-4">
              <img className="w-full" src={LandingPage} alt="Blog Web" />
            </div>
            <h3 className="font-semibold text-xl text-center text-dark">
              Blog Web
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden mb-4">
              <img className="w-full" src={LandingPage} alt="E-commerce Page" />
            </div>
            <h3 className="font-semibold text-xl text-center text-dark">
              E-commerce Web
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
