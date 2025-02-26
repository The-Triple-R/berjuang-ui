const MenuItem = ({ href, children, isActive }) => (
  <li className="flex border-b-2 md:border-none border-black justify-center">
    <a href={href} className={`px-4 py-3 text-lg block ${isActive ? 'text-main' : 'text-mtext'} hover:text-main dark:text-white`}>
      {children}
    </a>
  </li>
);

export default MenuItem;
