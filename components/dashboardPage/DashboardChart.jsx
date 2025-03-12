'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import TransactionHistory from './TransactionHistory';

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

export function DashboardChart() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row'>
      <Card className='p-5 flex-[4]'>
        {/* <CardHeader className='p-1 mb-4'>
          <CardTitle>Grafik Saldo</CardTitle>
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
        </ChartContainer> */}
        <CardHeader>
          <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='month'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey='desktop'
                stackId='a'
                fill='var(--color-desktop)'
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey='mobile'
                stackId='a'
                fill='var(--color-mobile)'
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <TransactionHistory />
    </div>
  );
}
