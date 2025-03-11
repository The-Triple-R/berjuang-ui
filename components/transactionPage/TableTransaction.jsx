import { TbSearch, TbEdit } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import Table from "../tables/Table";
import TableData from "../tables/TableData";
import TableHead from "../tables/TableHead";
import TableHeader from "../tables/TableHeader";
import { Button } from "../ui/button";

const transactionData = [
  { id: 1, amount: "Rp 500.000", date: "2025-03-06" },
  { id: 2, amount: "Rp 1.200.000", date: "2025-03-05" },
  { id: 3, amount: "Rp 750.000", date: "2025-03-04" },
  { id: 4, amount: "Rp 900.000", date: "2025-03-03" },
  { id: 5, amount: "Rp 2.000.000", date: "2025-03-02" },
  { id: 6, amount: "Rp 300.000", date: "2025-03-01" },
];

export function TableTransaction({ datas = transactionData }) {
  return (
    <div className="flex flex-col gap-4">
      {datas.length > 0 ? (
        <>
          <Table>
            <TableHead>
              <TableHeader>No</TableHeader>
              <TableHeader>Uang Masuk</TableHeader>
              <TableHeader>Tanggal Masuk</TableHeader>
              <TableHeader colSpan={3}>Aksi</TableHeader>
            </TableHead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={data.id} className="border-b border-gray-300 last:border-b-0">
                  <TableData className="font-bold px-1 w-[20px] text-[#8C8CA1]">
                    {index + 1}
                  </TableData>
                  <TableData className="text-nowrap">{data.amount}</TableData>
                  <TableData>{data.date}</TableData>
                  <TableData className="px-1 w-[111px]">
                    <Button className="text-xl text-white bg-[#33D1AB] text-[1rem]">
                      Detail
                      <TbSearch size={24} />
                    </Button>
                  </TableData>
                  <TableData className="px-1 w-[96px]">
                    <Button className="text-xl text-white bg-[#4D4FED] text-[1rem]">
                      Edit
                      <TbEdit size={24} />
                    </Button>
                  </TableData>
                  <TableData className="pl-1 pr-3 w-[115px]">
                    <Button className="text-xl text-white bg-[#D30368] text-[1rem]">
                      Hapus
                      <MdOutlineCancel size={24} />
                    </Button>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="flex justify-center items-center gap-2 mt-4">
            <Button className="px-3 py-1 bg-gray-300 text-black">« Prev</Button>
            <span className="text-lg font-semibold">1</span>
            <span className="text-lg font-semibold">2</span>
            <span className="text-lg font-semibold">3</span>
            <Button className="px-3 py-1 bg-gray-300 text-black">Next »</Button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-4">Tidak ada data.</p>
      )}
    </div>
  );
}
