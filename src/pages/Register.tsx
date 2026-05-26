import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Register() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md text-left">
        <CardHeader>
          <CardTitle className="text-2xl">Crear cuenta</CardTitle>
          <p className="text-sm text-muted-foreground">
            Únete a CholloHub y empieza a compartir ofertas con la comunidad.
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Nombre de usuario</Label>
              <Input id="displayName" type="text" placeholder="Adrián" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="font-medium text-primary underline">
              Inicia sesión
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}