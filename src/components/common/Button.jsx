import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white",

    secondary:
      "bg-cyan-500 hover:bg-cyan-400 text-black",

    outline:
      "border border-white/20 bg-transparent hover:bg-white/10 text-white",

    ghost:
      "hover:bg-white/10 text-white",
  };

  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl",
        "px-6",
        "py-3",
        "font-medium",
        "transition-all",
        "duration-300",
        "active:scale-95",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}