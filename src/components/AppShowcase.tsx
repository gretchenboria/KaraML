import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="app" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Karaoke Companion
              <span className="gradient-text block">Everywhere You Go</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              KaraML's mobile app puts the power of AI-driven karaoke in your pocket. 
              Browse songs, manage queues, and get personalized recommendations wherever you are.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile First Design</h3>
                  <p className="text-white/70">Optimized for iOS and Android with intuitive touch controls and seamless navigation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-500/20 p-3 rounded-lg">
                  <Tablet className="h-6 w-6 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cross-Platform Sync</h3>
                  <p className="text-white/70">Your preferences, playlists, and history sync across all your devices automatically.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Monitor className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Venue Integration</h3>
                  <p className="text-white/70">Connect directly to venue systems for seamless song requests and queue management.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>Download for iOS</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>Download for Android</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 rounded-2xl shadow-inner">
                <div className="p-6 text-white">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">KaraML</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        <div>
                          <div className="h-3 bg-white/30 rounded w-20 mb-1"></div>
                          <div className="h-2 bg-white/20 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        <div>
                          <div className="h-3 bg-white/30 rounded w-24 mb-1"></div>
                          <div className="h-2 bg-white/20 rounded w-20"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary-500/30 rounded-lg p-3 border border-primary-400/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-400/50 rounded-full"></div>
                        <div>
                          <div className="h-3 bg-white/40 rounded w-28 mb-1"></div>
                          <div className="h-2 bg-white/30 rounded w-24"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;