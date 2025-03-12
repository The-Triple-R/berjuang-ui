export default function Heading({ title, subTitle, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#8C8CA1] md:text-lg">{subTitle}</p>
        {children}
      </div>
    </div>
  );
}
