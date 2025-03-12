export default function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-black overflow-hidden">
        {children}
      </table>
    </div>
  );
}
