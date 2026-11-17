import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="GoalTec Solutions home" className="inline-block leading-none">
      <span className="block text-3xl font-bold text-gold">GoalTec</span>
      <span className="mt-1 flex items-center gap-2 text-[10px] tracking-[0.3em] text-white">
        <span className="h-px w-4 bg-gold" /> SOLUTIONS <span className="h-px w-4 bg-gold" />
      </span>
    </Link>
  );
}
