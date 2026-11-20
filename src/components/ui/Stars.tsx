import { Star } from "lucide-react";

type Props = { rating: number; size?: number; className?: string };

export function Stars({ rating, size = 14, className = "fill-gold text-gold" }: Props) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} className={i < rating ? className : "text-gray-400"} aria-hidden />
      ))}
    </span>
  );
}