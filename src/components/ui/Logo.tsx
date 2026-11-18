import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="GoalTec Solutions home" className="inline-block">
      <Image
        src="./goaltec-logo.svg"
        alt="GoalTec Solutions"
        width={160}
        height={48}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}