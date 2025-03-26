'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import SelectYear from './SelectYear';
import { useState } from 'react';

const chartConfig = {
  amount: {
    label: 'Saldo',
    color: 'hsl(var(--chart-1))',
  },
};

const dummyChartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

function DashboardAreaChart({ chartData }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const yearsData = [...new Set(chartData.map((item) => item.year))].sort((a, b) => b - a);    // Example: [2025, 2024, 2023]

  const finalChartData = chartData.filter((item) => item.year == selectedYear);

  return (
    <Card className='p-2 flex-[4] bg-transparent'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          Area Chart Saldo
          <SelectYear yearsData={yearsData} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        </CardTitle>
        <CardDescription>Memperlihatkan perkembangan saldo selama satu tahun terakhir</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={finalChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <Area dataKey='amount' type='natural' fill='var(--color-amount)' fillOpacity={0.4} stroke='var(--color-amount)' />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default DashboardAreaChart;
