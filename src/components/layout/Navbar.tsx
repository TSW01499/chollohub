import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-chollohub.png"
            alt="Logo de CholloHub"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-3">
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