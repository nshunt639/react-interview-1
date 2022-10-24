import React, { useCallback, useEffect, useState } from 'react'
import { Stats } from './config/types'
import Industries from './components/Industries'
import RegionalTrends from './components/RegionalTrends'
import Summary from './components/Summary'
import camelcaseKeys from 'camelcase-keys'
import IndustriesPlaceholder from './components/IndustriesPlaceholder'
import RegionalTrendsPlaceholder from './components/RegionalTrendsPlaceholder'
import SummaryPlaceholder from './components/SummaryPlaceholder'
import statsJSON from './stats.json'
import Header from './components/Header'
import HeaderPlaceholder from './components/HeaderPlaceholder'

function App() {
  const [filter] = useState({
    occupation: '15-1131',
    area_type: 'msa',
    area_code: '42660',
  })

  const [stats, setStats] = useState<Stats>()

  const loadStats = useCallback(async () => {
    setStats(camelcaseKeys(statsJSON, { deep: true }))
  }, [filter])
  useEffect(() => {
    loadStats()
  }, [])

  return (
    <div className='p-12'>
      {stats ? <Header stats={stats} /> : <HeaderPlaceholder />}

      <div className='mt-6 space-y-6'>
        {stats ? <Summary stats={stats} /> : <SummaryPlaceholder />}

        {stats ? <RegionalTrends stats={stats} /> : <RegionalTrendsPlaceholder />}

        {stats ? <Industries stats={stats} /> : <IndustriesPlaceholder />}
      </div>
    </div>
  )
}

export default App
