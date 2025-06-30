import React from 'react';
import { Brain, Queue, Mic2, Sparkles, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Song Recommendations',
      description: 'Our advanced AI analyzes your voice, preferences, and mood to suggest the perfect songs for your range and style.',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
    },
    {
      icon: Queue,
      title: 'Smart Queue Management',
      description: 'Intelligent queueing system that optimizes song order based on crowd energy, singer preferences, and venue dynamics.',
      color: 'text-secondary-400',
      bgColor: 'bg-secondary-500/10',
    },
    {
      icon: Mic2,
      title: 'Voice Analysis',
      description: 'Real-time voice analysis helps you find songs that match your vocal range and suggests key adjustments for better performance.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Sparkles,
      title: 'Ad Generation',
      description: 'Automatically generate personalized promotional content and social media posts to showcase your karaoke performances.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
    },
    {
      icon: Users,
      title: 'Social Integration',
      description: 'Connect with friends, share performances, and discover new songs through our vibrant karaoke community.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in seconds with our streamlined onboarding process and intuitive mobile interface.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by <span className="gradient-text">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the next generation of karaoke with features designed to enhance every aspect of your singing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;