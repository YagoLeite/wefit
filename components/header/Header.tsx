import Link from "next/link";
import CartHeader from "./CartHeader";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-[31.5px]">
      <Link
        href="/"
        className="text-[20px] font-[700] tracking-[0.08em] text-on-surface"
      >
        WeMovies
      </Link>
      <CartHeader />
    </header>
  );
}
