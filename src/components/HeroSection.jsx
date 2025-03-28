import herobg from '../assets/images.jpg'

const HeroSection = () => {
     return (
       <section className="flex w-[100%] flex-col md:flex-row items-center justify-center gap-7 px-6 md:px-16 py-12 bg-gray-100 min-h-screen">
         {/* Text Content */}
         <div className="md:w-[40%] text-center md:text-left">
           <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
             Welcome to Our Platform
           </h1>
           <p className="mt-4 text-lg text-gray-600">
             We provide the best solutions to grow your business and enhance your digital presence.
           </p>
           <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
             Get Started
           </button>
         </div>
         
         {/* Image Section */}
         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
           <img 
             src={herobg} 
             alt="Hero Section" 
             className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" 
           />
         </div>
       </section>
     );
   };
   
   export default HeroSection;
   