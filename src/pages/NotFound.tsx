import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background matrix-bg">
      <div className="text-center glass-card p-8 surveillance-glow max-w-md mx-4">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist in our surveillance network.
        </p>
        <a href="/" className="btn-surveillance inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
