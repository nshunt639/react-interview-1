import React, { ReactNode, useMemo } from 'react'
import { Stats } from 'config/types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface RegionalTrendsProps {
  stats: Stats
}

function RegionalTrends({ stats }: RegionalTrendsProps) {
  return (
    <section>
      <h2 className='font-bold text-black/60'>Regional Trends</h2>
      <div className='mt-1 border-t border-black/10'>
        <RegionalTrendsChart stats={stats} />
      </div>
      <div className='mt-1'>
        <RegionalTrendsList stats={stats} />
      </div>
    </section>
  )
}

function RegionalTrendsChart({ stats }: RegionalTrendsProps) {
  const data = useMemo(() => {
    const data = []
    const range = stats.trendComparison.endYear - stats.trendComparison.startYear
    for (let i = 0; i <= range; i++) {
      data.push({
        name: stats.trendComparison.startYear + i,
        Region:
          Math.round(
            ((stats.trendComparison.regional[i] - stats.trendComparison.regional[0]) /
              stats.trendComparison.regional[0]) *
              1000,
          ) / 10,
        State:
          Math.round(
            ((stats.trendComparison.state[i] - stats.trendComparison.state[0]) /
              stats.trendComparison.state[0]) *
              1000,
          ) / 10,
        Nation:
          Math.round(
            ((stats.trendComparison.nation[i] - stats.trendComparison.nation[0]) /
              stats.trendComparison.nation[0]) *
              1000,
          ) / 10,
      })
    }

    return data
  }, [stats])

  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey='Region' stroke='#142850' activeDot={{ r: 4 }} />
        <Line dataKey='State' stroke='#1185C4' activeDot={{ r: 4 }} />
        <Line dataKey='Nation' stroke='#ABDAFC' activeDot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

function RegionalTrendsList({ stats }: RegionalTrendsProps) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='border-b border-black/10'>
          <th className='text-left p-2'>
            <div className='flex items-center'>
              <div className='mr-4 w-4'></div>
              Region
            </div>
          </th>
          <th className='text-right p-2 w-40'>{stats.trendComparison.startYear} Jobs</th>
          <th className='text-right p-2 w-40'>{stats.trendComparison.endYear} Jobs</th>
          <th className='text-right p-2 w-40'>Change</th>
          <th className='text-right p-2 w-40'>% Change</th>
        </tr>
      </thead>
      <tbody>
        {(
          [
            [
              stats.trendComparison.regional,
              'Region',
              <div
                key={`regional-trend-mark-0`}
                className='bg-dark-blue rounded-full w-4 h-4'
              ></div>,
            ],
            [
              stats.trendComparison.state,
              'State',
              <div key={`regional-trend-mark-1`} className='bg-blue w-4 h-4'></div>,
            ],
            [
              stats.trendComparison.nation,
              'Nation',
              <div
                key={`regional-trend-mark-2`}
                className='border-transparent border-8 border-t-0 border-b-[16px] border-b-light-blue w-4'
              ></div>,
            ],
          ] as [number[], string, ReactNode][]
        ).map(([trend, title, mark], i) => (
          <tr key={`regional-trend-${i}`} className='transition hover:bg-black/5'>
            <td className='text-left p-2'>
              <div className='flex items-center'>
                <div className='mr-4'>{mark}</div>
                {title}
              </div>
            </td>
            <td className='text-right p-2'>{new Intl.NumberFormat().format(trend[0])}</td>
            <td className='text-right p-2'>
              {new Intl.NumberFormat().format(trend[trend.length - 1])}
            </td>
            <td className='text-right p-2'>
              {new Intl.NumberFormat().format(trend[trend.length - 1] - trend[0])}
            </td>
            <td className='text-right p-2'>
              {Math.round(((trend[trend.length - 1] - trend[0]) / trend[0]) * 1000) / 10}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RegionalTrends
