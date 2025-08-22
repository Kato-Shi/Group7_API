export default function CustomButton({ type = "primary", label, onClick }) {
  const baseClasses =
    "relative inline-flex items-center justify-center text-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 dark:shadow-none";

  const typeClasses =
    type === "primary"
      ? "sm:px-2 bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 ring-2 shadow-indigo-500/50 inset-shadow-1xl"
      : "bg-red-200 text-red-800 hover:bg-red-300 focus-visible:outline-red-400 dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-600 dark:focus-visible:outline-red-500 ring-2";

  return (
    <button
      type="button"
      className={`${baseClasses} ${typeClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
