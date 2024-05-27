import "../index.css";

function EventSchedule() {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center text-white">Event Schedule</h2>
        <div className="max-w-5xl mx-auto my-12 px-5 relative ">

           
            <div className="absolute h-full w-1 bg-gray-400 left-1/2 top-5 transform -translate-x-1/2"></div>
            <div className="flex justify-start my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 ml-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-home text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -right-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Start Registrations</span>
                        <span>5th June 2024</span>
                    </div>
                </section>
            </div>
            <div className="flex justify-end my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 mr-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-star text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -left-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">End Registrations</span>
                        <span>15th July 2024</span>
                    </div>
                </section>
            </div>
            <div className="flex justify-start my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 ml-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-rocket text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -right-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Opening Ceremony</span>
                        <span>1 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Hackathon opening ceremony will start 9:15 AM onwards.</p>
                </section>
            </div>
            <div className="flex justify-end my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 mr-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-globe text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -left-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Hackathon Starts</span>
                        <span>1 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Hackathon coding period will start from 10:30 AM onwards.</p>
                </section>
            </div>
            <div className="flex justify-start my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 ml-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-paper-plane text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -right-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Session from GeeksforGeeks</span>
                        <span>1 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Session on Complete Interview Preparation by GeeksForGeeks on 11.30 AM Onwards.</p>
                </section>
            </div>
            <div className="flex justify-end my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 mr-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-paper-plane text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -left-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Session from Postman</span>
                        <span>1 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
                </section>
            </div>
            <div className="flex justify-start my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 ml-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-paper-plane text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -right-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Session from Alan AI</span>
                        <span>1 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Session on Building Voice AI Powered App in React JS with Alan AI on 06:30 PM Onwards.</p>
                </section>
            </div>
            <div className="flex justify-end my-8 transition-all duration-500 ease-in-out">
                <section className="bg-[#C576F6] rounded p-4 relative w-1/2 mr-10 transition-transform transform hover:scale-105 hover:bg-gray-300">
                    <i className="fas fa-globe text-black bg-[#4cb7e9] h-10 w-10 text-center leading-10 rounded-full absolute top-3 -left-14 text-lg transition-colors duration-300 ease-in-out"></i>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Hackathon Ends</span>
                        <span>2 August 2024</span>
                    </div>
                    <p className="mt-4 text-sm">Hackathon coding period will end on 10:30 PM.</p>
                </section>
            </div>
        </div>
        </div>
    );
}

export default EventSchedule;
