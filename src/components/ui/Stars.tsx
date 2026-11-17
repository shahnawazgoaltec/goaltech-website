import { Star } from "lucide-react";

export function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} className={i < rating ? "fill-gold text-gold" : "text-gray-400"} aria-hidden />
      ))}
    </span>
  );
}
