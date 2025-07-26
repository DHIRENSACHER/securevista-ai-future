import { Link } from "react-router-dom";
import { ArrowRight, Eye, Shield, Zap, Users, BarChart3, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroBackground from "../assets/surveillance-hero-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Matrix Background Animation */}
        <div className="absolute inset-0 matrix-bg opacity-30" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-primary/30">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-foreground">AI-Powered Security Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Secure AI Surveillance
              <br />
              <span className="text-glow bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                for the Future
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Next-generation surveillance technology powered by artificial intelligence. 
              Monitor, detect, and respond with unprecedented precision.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/signup" 
                className="btn-surveillance group flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Start Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/login" 
                className="btn-ghost-surveillance flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Shield className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-primary/20 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of surveillance with our cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                24/7 surveillance with AI-powered threat detection and instant alerts.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Instant Response</h3>
              <p className="text-muted-foreground">
                Automated threat response systems with millisecond reaction times.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Access Control</h3>
              <p className="text-muted-foreground">
                Advanced biometric identification and access management systems.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Comprehensive insights and predictive analytics for security optimization.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure Infrastructure</h3>
              <p className="text-muted-foreground">
                End-to-end encryption with military-grade security protocols.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-card p-6 surveillance-glow group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Protection</h3>
              <p className="text-muted-foreground">
                Machine learning algorithms that adapt and evolve with emerging threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 surveillance-glow">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of organizations worldwide who trust SecureVista for their security needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/signup" 
                className="btn-surveillance group flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/login" 
                className="btn-ghost-surveillance text-lg px-8 py-4"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;