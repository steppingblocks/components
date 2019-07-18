import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { HeatMapChart } from './index'

const stories = storiesOf('HeatMapChart', module)

stories.add('HeatMapChart', () => {
  const props = {
    data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
    height: 400,
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    width: 900
  }
  return <HeatMapChart {...props} />
})

stories.addDecorator(withKnobs)
