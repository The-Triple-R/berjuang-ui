export default function TableData({ children, className }) {
  return (
    <td
      className={`p-4 text-sm text-center text-[#171725] ${className ? className : ''}`}
    >
      {children}
    </td>
  );
}
