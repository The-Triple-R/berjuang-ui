'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import TransactionEntry from './TransactionEntry';
const chartData = [
  { transaction: 'Jan', pemasukan: 200000, pengeluaran: 200000, range: 200000 },
  { transaction: 'Feb', pemasukan: 200000, pengeluaran: 200000 },
  { transaction: 'Mar', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Apr', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'May', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Jun', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Jul', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Aug', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Sep', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Okt', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Nov', pemasukan: 200000, pengeluaran: 100000 },
  { transaction: 'Des', pemasukan: 200000, pengeluaran: 100000 },
];

const chartConfig = {
  pemasukan: {
    label: 'Pemasukan',
    color: 'hsl(var(--chart-1))',
  },
  pengeluaran: {
    label: 'Pengeluaran',
    color: 'hsl(var(--chart-2))',
  },
};

export function DashboardChart() {
  return (
    <Card className='bg-neutral-100 p-4'>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Card className='p-5 font-semibold'>
          <h3>Saldo</h3>
          <h6 className='text-3xl'>Rp. 200.000</h6>
        </Card>
        <Card className='p-5 font-semibold'>
          <h3>Total Transaksi</h3>
          <h6 className='text-3xl'>Rp. 200.000</h6>
        </Card>
        <Card className='p-5 font-semibold'>
          <h3>Pemasukan</h3>
          <h6 className='text-3xl'>+Rp. 200.000</h6>
        </Card>
        <Card className='p-5 font-semibold'>
          <h3>Pengeluaran</h3>
          <h6 className='text-3xl'>-Rp. 0</h6>
        </Card>
      </div>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <Card className='p-5 flex-[4]'>
          <CardHeader className="p-2 mb-4">
            <CardTitle>Dashboard Grafik Saldo</CardTitle>
          </CardHeader>
          <ChartContainer
            config={chartConfig}
            className='max-h-[350px] max-w-full'
          >
            <BarChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='transaction'
                tickMargin={10}
                tickFormatter={(value) => value}
              />
              <YAxis
                dataKey='range'
                tickMargin={10}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />
              <Bar
                dataKey='pemasukan'
                fill='var(--color-pemasukan)'
                radius={4}
              />
              <Bar
                dataKey='pengeluaran'
                fill='var(--color-pengeluaran)'
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </Card>
        <Card className='flex-[3] p-5'>
          <h3 className='font-bold text-xl mb-4 p-1'>Riwayat Transaksi</h3>
          <div className='flex flex-col gap-4 p-3'>
            <TransactionEntry />
            <TransactionEntry />
            <TransactionEntry />
            <TransactionEntry />
            <TransactionEntry />
          </div>
        </Card>
      </div>
    </Card>
  );
}
