import doctor from "../images/mayuri doctor.jpg";
import { FaHeartbeat } from "react-icons/fa";

function FormData() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 h-[350px] md:h-[450px] bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 border border-blue-100">
      <FaHeartbeat className="mb-4 text-4xl text-blue-600 animate-pulse" />
      
      <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        DR G MAYURI
      </p>
      
      <span className="font-medium text-lg md:text-xl text-blue-700 mb-1">
        OBSTETRICIAN & GYNAECOLOGIST
      </span>
      
      <p className="text-md md:text-lg text-gray-600 mb-1">
        15+ Years of Experience
      </p>
      
      <span className="text-md md:text-lg text-blue-800 font-medium">
        MBBS, DNB
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <img
        src={doctor}
        className="h-[250px] md:h-[450px] w-auto rounded-2xl object-cover border-4 border-white shadow-xl"
        alt="Doctor"
      />
      
      <FormData />
    </div>
  );
}

export default App;
