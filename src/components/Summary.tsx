import React, { useMemo } from 'react'
import { Stats } from 'config/types'

interface SummaryProps {
  stats: Stats
}

function Summary({ stats }: SummaryProps) {
  const diff = useMemo(() => stats.summary.jobs.regional - stats.summary.jobs.nationalAvg, [stats])

  return (
    <section>
      <h2 className='font-bold text-black/60'>Occupation Summary for {stats.occupation.title}</h2>
      <div className='flex flex-col md:flex-row w-full border-y border-black/10 mt-1'>
        <div className='flex-1 border-b md:border-b-0 md:border-r border-black/10 text-center p-4'>
          <div className='text-3xl'>
            {new Intl.NumberFormat().format(stats.summary.jobs.regional)}
          </div>
          <div className='font-bold'>Jobs({stats.summary.jobs.year})</div>
          <div>
            {Math.round((stats.summary.jobs.regional / stats.summary.jobs.nationalAvg) * 100)}
            %&nbsp;
            {diff > 0 ? (
              <span className='text-green-600'>above</span>
            ) : diff < 0 ? (
              <span className='text-red-600'>below</span>
            ) : (
              <span className=''>same with</span>
            )}
            &nbsp;National average
          </div>
        </div>

        <div className='flex-1 border-b md:border-b-0 md:border-r border-black/10 text-center p-4'>
          <div className='text-3xl'>
            {stats.summary.jobsGrowth.regional > 0 ? (
              <span className='text-green-600'>+{stats.summary.jobsGrowth.regional}%</span>
            ) : stats.summary.jobsGrowth.regional < 0 ? (
              <span className='text-red-600'>{stats.summary.jobsGrowth.regional}%</span>
            ) : (
              <span className=''>{stats.summary.jobsGrowth.regional}%</span>
            )}
          </div>
          <div className='font-bold'>
            % Change({stats.summary.jobsGrowth.startYear}-{stats.summary.jobsGrowth.endYear})
          </div>
          <div>
            Nation:{' '}
            {stats.summary.jobsGrowth.nationalAvg > 0 ? (
              <span className='text-green-600'>+{stats.summary.jobsGrowth.nationalAvg}%</span>
            ) : stats.summary.jobsGrowth.nationalAvg < 0 ? (
              <span className='text-red-600'>{stats.summary.jobsGrowth.nationalAvg}%</span>
            ) : (
              <span className=''>{stats.summary.jobsGrowth.nationalAvg}%</span>
            )}
          </div>
        </div>

        <div className='flex-1 text-center p-4'>
          <div className='text-3xl'>${stats.summary.earnings.regional}/hr</div>
          <div className='font-bold'>Median Hourly Earnings</div>
          <div>Nation: ${stats.summary.earnings.nationalAvg}/hr</div>
        </div>
      </div>
    </section>
  )
}

export default Summary
