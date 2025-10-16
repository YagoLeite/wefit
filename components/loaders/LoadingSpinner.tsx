import Image from "next/image";

export function LoadingSpinner({
  className = "",
  width = 24,
  height = 24,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/svgs/Loader.svg"
      alt="Carregando..."
      width={width}
      height={height}
      className={`animate-spin ${className}`}
      priority
    />
  );
}
