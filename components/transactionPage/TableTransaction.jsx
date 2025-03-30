'use client';
import Table from '../tables/Table';
import TableData from '../tables/TableData';
import TableHead from '../tables/TableHead';
import TableHeader from '../tables/TableHeader';
import { Button } from '../ui/button';
import axios from 'axios';
import { formatDate, formatToRupiah } from '@/lib/utils';

import useUpdateTransactions from '@/app/hooks/useUpdateTransactions';
import EditTransaction from './EditTransaction';
import ViewTransaction from './ViewTransaction';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';
import DeleteButton from './DeleteButton';
import toast, { Toaster } from 'react-hot-toast';
import toastConfig from '@/lib/react-hot-toast/toastConfig';

export function TableTransaction({ datas, paging, transactionType, mainHeader }) {
  const updateTransactions = useUpdateTransactions();

  const { lang } = useLanguageStore();

  const totalPaging = paging?.totalPage ?? 0;
  const currentPage = paging?.currentPage ?? 0;

  const handleDelete = async (transactionId) => {
    try {
      const data = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/transactions/${transactionId}`, {
        withCredentials: true,
      });

      if (data.status === 200) {
        if (datas.length === 1) {
          updateTransactions(transactionType, currentPage - 1);
        } else {
          updateTransactions(transactionType, currentPage);
        }
      }

      toast.success(langData[lang].toast.successDelete, toastConfig);
    } catch (error) {
      toast.error(langData[lang].toast.errorDelete, toastConfig);
    }
  };

  const handlePaginationClick = async (page) => {
    updateTransactions(transactionType, page);
  };

  return (
    <>
      <div className='flex flex-col gap-4'>
        {datas.length > 0 ? (
          <>
            <Table>
              <TableHead>
                <TableHeader>No</TableHeader>
                <TableHeader>{mainHeader}</TableHeader>
                <TableHeader>{langData[lang].transactionPageTable.description}</TableHeader>
                <TableHeader>{langData[lang].transactionPageTable.date}</TableHeader>
                <TableHeader colSpan={3}>{langData[lang].transactionPageTable.action}</TableHeader>
              </TableHead>
              <tbody>
                {datas.map((data, index) => (
                  <tr key={data.id} className='border-b border-gray-300 last:border-b-0'>
                    <TableData className='font-bold px-1 w-[20px] text-[#8C8CA1]'>{(currentPage - 1) * paging?.size + (index + 1)}</TableData>
                    <TableData className='text-nowrap'>
                      {transactionType === 'debit' ? '+' : '-'}
                      {formatToRupiah(data.amount)}
                    </TableData>
                    <TableData className='font-bold px-1 w-[150px] text-[#8C8CA1] text-nowrap'>{data.description?.length > 20 ? `${data.description.substring(0, 20)}...` : data.description || '-'}</TableData>
                    <TableData>{formatDate(data.date)}</TableData>
                    <TableData className='px-1 w-[111px]'>
                      <ViewTransaction amount={data.amount} description={data.description} transactionType={transactionType} date={data.date} />
                    </TableData>
                    <TableData className='px-1 w-[96px]'>
                      <EditTransaction amount={data.amount} description={data.description} id={data.id} transactionType={transactionType} currentPage={currentPage} />
                    </TableData>
                    <TableData className='pl-1 pr-3 w-[115px]'>
                      <DeleteButton onDelete={() => handleDelete(data.id)} />
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className='flex justify-center items-center gap-3 mt-4'>
              <Button className='px-3 text-lg py-1 bg-gray-300 text-black' disabled={currentPage === 1} onClick={() => handlePaginationClick(currentPage - 1)}>
                « Prev
              </Button>
              {[...Array(totalPaging)].map((_, i) => (
                <Button key={i} className={`text-lg p-2 ${currentPage === i + 1 ? 'bg-main' : 'bg-gray-300'} font-semibold text-black`} disabled={i + 1 === currentPage} onClick={() => handlePaginationClick(i + 1)}>
                  {i + 1}
                </Button>
              ))}
              <Button className='px-3 text-lg py-1 bg-gray-300 text-black' disabled={currentPage === totalPaging} onClick={() => handlePaginationClick(currentPage + 1)}>
                Next »
              </Button>
            </div>
          </>
        ) : (
          <p className='text-center text-gray-500 mt-4'>{langData[lang].noData}</p>
        )}
      </div>
      <Toaster />
    </>
  );
}
