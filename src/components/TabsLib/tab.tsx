import React from 'react'
import { Box, Chip } from '@mui/material'
import { Tab as TabMaterial } from '@mui/material'
import { verifyContrast } from '../../utils/colors/verify-contrast'

type TabProps = {
  label: string
  disabled?: boolean
  value: string
  count?: number
  color?: string
  onClick?: () => void
}

export function Tab({
  color,
  label,
  value,
  disabled,
  count,
  onClick
}: TabProps) {
  return (
    <TabMaterial
      disabled={disabled}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {label}
          {count && color && (
            <Chip
              label={count}
              size="small"
              sx={{
                ml: 1,
                bgcolor: color,
                color: verifyContrast(color)
              }}
            />
          )}
        </Box>
      }
      value={value}
      onClick={onClick}
      sx={{
        textTransform: 'none',
        backgroundColor: 'transparent',
        color: 'black',
        '&.Mui-selected': {
          color: 'black'
        }
      }}
    />
  )
}
