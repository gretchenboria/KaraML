import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Karaoke Enthusiast',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'KaraML completely changed my karaoke experience! The AI recommendations are spot-on, and I\'ve discovered so many songs that perfectly match my voice.',
      rating: 5,
    },
    {
      name: 'Mike Rodriguez',
      role: 'Bar Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Since implementing KaraML at our venue, customer engagement has increased by 40%. The smart queueing system keeps the energy high all night long.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'Professional Singer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The voice analysis feature is incredible. It helps me warm up and suggests songs that challenge me in just the right way. Perfect for practice sessions!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their karaoke experience with KaraML.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 relative"
            >
              <Quote className="h-8 w-8 text-primary-400 mb-4 opacity-50" />
              
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;