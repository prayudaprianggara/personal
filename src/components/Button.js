const Button = ({ title }) => {
  return (
    <button className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-400 duration-300 font-semibold hover:shadow-lg">
      {title}
    </button>
  )
}

export default Button
