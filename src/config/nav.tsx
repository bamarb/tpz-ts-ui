import React from 'react'
import DashIcon from '@material-ui/icons/ViewQuiltTwoTone'
import MapIcon from '@material-ui/icons/MapTwoTone'
import CategoryIcon from '@material-ui/icons/CategoryTwoTone'
import SettingsIcon from '@material-ui/icons/SettingsApplicationsTwoTone'
import { LandingPage } from '../pages'
import { CategoryPage } from '../pages'
import { LocationPage } from '../pages'
import { SettingsPage } from '../pages'

export interface ComponentItem {
  label: string
  icon: React.FC
  path: string
  component: React.FC
}

//compSpec is used  for the purposes of navigation and route rendering
//The Component is needed for Route rendering
export const compSpec = [
  { label: 'Home', icon: <DashIcon />, path: '/dash', component: LandingPage },
  { label: 'Category', icon: CategoryIcon, path: '/dash/category', component: CategoryPage },
  { label: 'Location', icon: MapIcon, path: '/dash/location', component: LocationPage },
  { label: 'Settings', icon: SettingsIcon, path: '/dash/settings', component: SettingsPage },
]
