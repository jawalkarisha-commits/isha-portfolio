import {
  Code2, Database, BarChart3, Globe, GitBranch, Cpu, FileSpreadsheet, Cog, Shuffle, LineChart,
} from 'lucide-react'

const map = { Code2, Database, BarChart3, Globe, GitBranch, Cpu, FileSpreadsheet, Cog, Shuffle, LineChart }

export default function Icon({ name, size = 20 }) {
  const C = map[name] || Code2
  return <C size={size} aria-hidden="true" />
}
