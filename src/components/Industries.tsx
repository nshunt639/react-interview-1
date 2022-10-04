import React from 'react'
import { Stats } from 'config/types'
import { BuildingOfficeIcon } from '@heroicons/react/24/solid'

interface IndustriesProps {
  stats: Stats
}

function Industries({ stats }: IndustriesProps) {
  return (
    <section>
      <h2 className='font-bold text-black/60'>Industries Employing {stats.occupation.title}</h2>
      <div className='mt-1 border-t border-black/10 overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-black/10'>
              <th className='text-left p-2'>Industry</th>
              <th className='text-right p-2 w-40'>
                Occupation Jobs
                <br />
                in Industry
                <br />({stats.employingIndustries.year})
              </th>
              <th className='text-right p-2 w-40'>
                % Occupation
                <br />
                in Industry
                <br />({stats.employingIndustries.year})
              </th>
              <th className='text-right p-2 w-40'>
                % of Total
                <br />
                in Industry
                <br />({stats.employingIndustries.year})
              </th>
            </tr>
          </thead>
          <tbody>
            {stats.employingIndustries.industries.map((industry, i) => {
              const industryPercentage =
                Math.round((industry.inOccupationJobs / stats.employingIndustries.jobs) * 1000) / 10
              return (
                <tr
                  key={`industry-${i}`}
                  className='transition hover:bg-black/5 bg-gradient-to-l from-light-blue/20 to-light-blue/20 bg-no-repeat'
                  style={{
                    backgroundSize: `${industryPercentage}% 100%`,
                  }}
                >
                  <td className='text-left p-2 font-semibold border-y border-black/10'>
                    <div className='flex items-center text-blue'>
                      <BuildingOfficeIcon className='w-4 h-4 mr-1' />
                      {industry.title}
                    </div>
                  </td>
                  <td className='text-right p-2 font-semibold border-y border-black/10'>
                    {new Intl.NumberFormat().format(industry.jobs)}
                  </td>
                  <td className='text-right p-2 font-semibold border-y border-black/10'>
                    {industryPercentage}%
                  </td>
                  <td className='text-right p-2 font-semibold border-y border-black/10'>
                    {Math.round((industry.inOccupationJobs / industry.jobs) * 1000) / 10}%
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Industries
