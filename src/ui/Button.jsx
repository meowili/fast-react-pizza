import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase text-sm font-semibold text-slate-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300";

  const styles = {
    primary: base + " md:px-6 md:py-4 py-3 px-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:py-2 md:px-3.5 text-sm",
    secondary:
      "border-2 tex-sm focus:text-stone-800 border-stone-300 md:px-6 md:py-3.5 py-2.5 hover:text-stone-800 px-4 uppercase font-semibold text-slate-400  inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed focus:ring-stone-200 focus:ring-offset-2 focus:bg-yellow-300",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
