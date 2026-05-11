import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "raised" | "recessed" | "primary";
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  variant = "raised",
}) => {
  const variantClasses: Record<string, string> = {
    raised: "card p-7 md:p-10",
    recessed: "nardo-recessed p-7 md:p-10",
    primary:
      "p-7 md:p-10 rounded-[var(--radius-lg)] transition-all duration-300 group" +
      " text-white border border-white/10",
  };

  const primaryStyle =
    variant === "primary"
      ? {
          background:
            "linear-gradient(135deg, var(--primary) 0%, #002d6a 100%)",
          boxShadow: "var(--shadow-primary)",
        }
      : undefined;

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      style={primaryStyle}
    >
      {children}
    </div>
  );
};

export default BentoCard;
