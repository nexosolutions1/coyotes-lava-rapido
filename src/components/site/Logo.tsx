import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src="/coyoteslogo.png"
      alt="Coyotes Lava Rápido"
      width={size}
      height={size}
      className={cn("object-contain select-none", className)}
      draggable={false}
    />
  );
}