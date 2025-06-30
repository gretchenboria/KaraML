import React from 'react';
import { Download, Mic, Music, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: 'Download & Setup',
      description: 'Download KaraML from the App Store or Google Play and complete the quick voice calibration process.',
      step: '01',
    },
    {
      icon: Mic,
      title: 'Voice Analysis',
      description: 'Our AI analyzes your vocal range, tone, and preferences to create your personalized singing profile.',
      step: '02',
    },
    {
      icon: Music,
      title: 'Smart Recommendations',
      description: 'Get AI-powered song suggestions tailored to your voice, mood, and the venue atmosphere.',
      step: '03',
    },
    {
      icon: Share2,
      title: 'Perform & Share',
      description: 'Sing your heart out and automatically generate shareable content to showcase your performance.',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="gradient-text">KaraML</span> Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get started with KaraML in four simple steps and transform your karaoke experience forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 transform translate-x-4"></div>
              )}
              
              <div className="glass-effect rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                
                <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;