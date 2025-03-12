export default function TableHead({ children }) {
  return (
    <thead className="border border-black bg-neutral-200">
      <tr>{children}</tr>
    </thead>
  );
}
