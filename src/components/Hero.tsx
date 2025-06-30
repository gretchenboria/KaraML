import React from 'react';
import { Play, Download, Star, Users, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="gradient-text block">Karaoke is Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience AI-powered song recommendations, smart queueing, and seamless performance 
            with KaraML - the intelligent karaoke companion that knows your voice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Now</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/60">Active Users</div>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <Music className="h-8 w-8 text-secondary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1M+</div>
              <div className="text-white/60">Songs Available</div>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.9</div>
              <div className="text-white/60">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;