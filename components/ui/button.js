export function Button({ children, className = "" }) {
  return (
    <button className={`bg-blue-500 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 ${className}`}>
      {children}
    </button>
  );
}
