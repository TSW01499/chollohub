import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-chollohub.png"
            alt="Logo de CholloHub"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/create-deal">
              <PlusCircle size={16} className="mr-2" />
              Publicar chollo
            </Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link to="/login">Iniciar sesión</Link>
          </Button>

          <Button asChild>
            <Link to="/register">Registrarse</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
