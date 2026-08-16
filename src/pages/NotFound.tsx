import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 dark:bg-[#08080A] pt-32 pb-20 px-4 text-center transition-colors duration-300">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-8xl font-black text-gold-gradient font-mono">
            404
          </div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The page you are looking for doesn't exist or has been moved to another digital address.
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <Link to="/">
              <Button className="btn-gold-glow text-xs uppercase font-extrabold tracking-wider px-6 py-5 rounded-xl">
                <Home size={15} className="mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
