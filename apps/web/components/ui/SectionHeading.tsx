import { cn } from "@/lib/utils";

export function SectionHeading({
  watermark,
  title,
  align = "left",
  className,
}: {
  watermark?: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      {watermark ? (
        <p className="font-brand text-watermark mb-2 text-5xl font-extrabold md:text-7xl lg:text-8xl">
          {watermark}
        </p>
      ) : null}
      <h2 className="font-brand text-3xl text-white md:text-4xl lg:text-[3.4rem]">
        {title}
      </h2>
    </div>
  );
}
