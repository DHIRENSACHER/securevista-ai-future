import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Shield className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/30 transition-all"></div>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-glow transition-all">
              SecureVista
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/login"
              className="btn-ghost-surveillance text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-surveillance text-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20 pt-4 pb-6 space-y-4">
            <Link
              to="/"
              className={`block text-sm font-medium transition-all duration-200 ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/login"
              className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;