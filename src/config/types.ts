export interface Occupation {
  onet: string
  title: string
}

export interface Region {
  type: string
  id: string
  title: string
}

export interface Summary {
  jobs: {
    year: number
    regional: number
    nationalAvg: number
  }
  jobsGrowth: {
    startYear: number
    endYear: number
    regional: number
    nationalAvg: number
  }
  earnings: {
    regional: number
    nationalAvg: number
  }
}

export interface TrendComparison {
  startYear: number
  endYear: number
  regional: number[]
  state: number[]
  nation: number[]
}

export interface Industry {
  naics: string
  title: string
  inOccupationJobs: number
  jobs: number
}

export interface EmployingIndustries {
  year: number
  jobs: number
  industries: Industry[]
}

export interface Stats {
  occupation: Occupation
  region: Region
  summary: Summary
  trendComparison: TrendComparison
  employingIndustries: EmployingIndustries
}
