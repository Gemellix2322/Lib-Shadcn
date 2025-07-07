import React, { ReactElement } from 'react'
import { TabList as TabListMaterial } from '@mui/lab'
import { Box } from '@mui/material'
import { Tab } from './tab'
import { useTheme } from '@emotion/react'

type TabListProps = {
  children?: ReactElement<typeof Tab>[] | ReactElement<typeof Tab>
  onChange?: (event: React.ChangeEvent<object>, newValue: string) => void
}

export function TabList({ children, onChange }: TabListProps) {
  const theme = useTheme() as any
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabListMaterial
        variant="scrollable"
        scrollButtons={false}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.primary.main,
            height: '2px'
          }
        }}
        onChange={onChange}
      >
        {children}
      </TabListMaterial>
    </Box>
  )
}
