import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-[31.5px]">
      <Link
        href="/"
        className="text-[20px] font-[700] tracking-[0.08em] text-on-surface"
      >
        WeMovies
      </Link>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="hidden text-xs text-on-surface/60 md:block">
            Meu Carrinho
          </span>
          <span className="text-sm font-medium text-on-surface">0 itens</span>
        </div>
        <Image
          src="/images/CartIcon.png"
          alt="Ícone do carrinho"
          width={40}
          height={40}
          priority
        />
      </div>
    </header>
  );
}
