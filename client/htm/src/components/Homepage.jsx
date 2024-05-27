import  "../index.css"
import hackathonImage from '../assets/home.jpg'; // Ensure you have an image in the specified path

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 bg-black shadow-md rounded-lg">
      <div className="md:w-1/2 p-4">
      <h1 className="text-xl font-bold mb-4 text-white">Welcome to,</h1>
        <h1 className="text-5xl font-bold mb-4  text-[#4cb7e9]">Hack The Mountains</h1>
        <p className="text-lg mb-6 text-white ">
          Join us for an exhilarating hackathon experience! Hack The Mountains is a 36-hour event where
          developers, designers, and entrepreneurs come together to create innovative solutions to real-world
          problems. Collaborate, code, and compete to win amazing prizes and get a chance to network with
          industry experts.
        </p>
        <div className="flex space-x-4">
          <button className="bg-[#4cb7e9] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-black transition duration-300">
            Join Us
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-600 transition duration-300">
            Explore
          </button>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={hackathonImage} alt="Hack The Mountains" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
