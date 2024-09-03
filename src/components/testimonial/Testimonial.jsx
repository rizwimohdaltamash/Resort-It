import React from 'react';
import Pic1 from '../../assets/testi1.jpg'
import Pic2 from '../../assets/testi2.jpg'
import Pic3 from '../../assets/testi3.jpg'
import Comas from '../../assets/comas.jpg'

const testimonials = [
  {
    name: 'Arvind, Bengaluru',
    image: Pic1, // Replace with the actual image path or URL
    quote: 'Flattered with this community page ,as anyone can express their views.',
  },
  {
    name: 'Gaurav, Delhi',
    image: Pic2, // Replace with the actual image path or URL
    quote: "Booked a closeby scrap-dealer,and this app is amazing.",
  },
  {
    name: 'Himanshu, Hyderabad',
    image: Pic3, // Replace with the actual image path or URL
    quote: 'Very happy with the way i am able get all my questions answered by green genie.',
  },
];
// grid grid-rows-1  md:grid-cols-3 lg:grid-cols-3 gap-8
const Testimonial = () => {
  return (
    <div className= " bg-gray-50 py-12">
      <h2 className="text-center text-gray-500 text-lg font-bold mb-10">Hear From Our Users</h2>
      <div className=" flex flex-row lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rows-1  md:grid-cols-3 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-green-50 rounded-lg shadow-2xl p-6 text-center transform transition duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#00a99d]"
              />
              <img src={Comas} alt="Coma" className='mb-4' />
              <h3 className="text-xl font-medium text-gray-800 mb-2">{testimonial.name}</h3>
              <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Testimonial;


