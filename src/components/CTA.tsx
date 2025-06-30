import { Download, ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="glass-effect rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-full">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="gradient-text block">Karaoke Experience?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the karaoke revolution today. Download KaraML and discover how AI can make every performance unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="btn-primary flex items-center space-x-2 text-lg px-10 py-4">
              <Download className="h-6 w-6" />
              <span>Download Free</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2 text-lg px-10 py-4">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free Download</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>No Subscription Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;