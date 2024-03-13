import { Metadata } from 'next'
import { commonMetaData } from '@/meta-data/meta-data'

export const metadata: Metadata = {
  ...commonMetaData,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
