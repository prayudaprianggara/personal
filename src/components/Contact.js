const Contact = () => {
  return (
    <div className=" pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-lg lg:text-2xl text-primary mb-2">
              CONTACT
            </h2>
            <h3 className="font-bold text-2xl lg:text-3xl">Make Appoinment</h3>
          </div>
        </div>
        <form action="#">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label for='"name' className="text-base text-primary font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 mt-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label for='"email' className="text-base text-primary font-bold">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 mt-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-4">
              <label
                for='"message'
                className="text-base text-primary font-bold"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                className="w-full h-[150px] bg-slate-200 text-dark p-3 mt-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full transition duration-300 hover:shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
