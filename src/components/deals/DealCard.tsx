import { MessageCircle, Flame, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Deal } from "@/types/deal.types";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  return (
    <Card className="overflow-hidden">
      {deal.imageUrl && (        
        <img
            src={deal.imageUrl}
            alt={deal.title}
            className="w-full h-48 object-cover"
        />
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge>{deal.category}</Badge>

          <span className="flex items-center gap-1 text-sm text-orange-500">
            <Flame size={16} />
            {deal.score}
          </span>
        </div>

        <CardTitle className="line-clamp-2">
          {deal.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-red-500">
            {deal.currentPrice.toFixed(2)} €
          </span>

          {deal.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {deal.oldPrice.toFixed(2)} €
            </span>
          )}
        </div>

        {deal.discount && (
          <Badge variant="secondary" className="mt-2">
            -{deal.discount}%
          </Badge>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <MessageCircle size={16} />
          Comentarios
        </span>

        <Button size="sm">
          Ver chollo
          <ExternalLink size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}