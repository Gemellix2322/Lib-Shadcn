import React, { ReactNode } from 'react'
import { TabPanel as TabPainelMaterial } from '@mui/lab'
type TabPainelProps = {
  children?: ReactNode
  value: string
  sx?: object
}

export function TabPainel({ children, value, sx, ...props }: TabPainelProps) {
  return (
    <TabPainelMaterial value={value} sx={sx} {...props}>
      {children}
    </TabPainelMaterial>
  )
}
