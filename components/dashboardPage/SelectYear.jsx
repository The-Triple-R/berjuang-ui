import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const SelectYear = ({ yearsData, selectedYear, setSelectedYear }) => {
  return (
    <Select value={selectedYear} onValueChange={setSelectedYear}>
      <SelectTrigger className='w-[180px] bg-transparent'>
        <SelectValue placeholder={selectedYear} />
      </SelectTrigger>
      <SelectContent className='bg-white'>
        <SelectGroup>
          <SelectLabel>Years</SelectLabel>
          {yearsData.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectYear;
