import { MessageCircle, Flame, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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


      <CardHeader className="items-start text-left">
        <div className="flex w-full items-center justify-between gap-2">
          <Badge variant="secondary">{deal.category}</Badge>

          <span className="flex items-center gap-1 text-sm text-orange-500">
            <Flame size={16} />
            {deal.score}
          </span>
        </div>

        <CardTitle className="line-clamp-2 text-left">
          {deal.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-left">
        <div className="flex items-baseline justify-start gap-2">
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
          <div className="mt-3 flex justify-start">
            <Badge variant="outline">
              -{deal.discount}%
            </Badge>
          </div>
        )}
      </CardContent>


      <CardFooter className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <MessageCircle size={16} />
          Comentarios
        </span>

        <Button size="sm" asChild>
          <Link to={`/deals/${deal.id}`}>
            Ver chollo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}