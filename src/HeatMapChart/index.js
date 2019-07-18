import React, { useRef, useState } from 'react'
import PT from 'prop-types'
import ReactMapGL, { NavigationControl } from 'react-map-gl'

const HEATMAP_SOURCE_ID = 'locations-source'

export const HeatMapChart = ({ data, height, mapboxApiAccessToken, width }) => {
  const [viewport, updateViewport] = useState({
    width,
    height,
    latitude: 37.785164,
    longitude: -100,
    zoom: 2.7,
    bearing: 0,
    pitch: 0
  })
  const heatMapRef = useRef(null)

  const handleMapLoaded = () => {
    const map = heatMapRef.current.getMap()
    console.log(map)
    map.addSource(HEATMAP_SOURCE_ID, { type: 'geojson', data })
    map.addLayer(mkHeatmapLayer('heatmap-layer', HEATMAP_SOURCE_ID))
  }

  const mkHeatmapLayer = (id, source) => {
    const MAX_ZOOM_LEVEL = 23
    return {
      id,
      source,
      maxzoom: MAX_ZOOM_LEVEL,
      type: 'heatmap',
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['get', 'mag'],
          0,
          0,
          1,
          1
        ],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        'heatmap-intensity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          1,
          MAX_ZOOM_LEVEL,
          3
        ],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0,
          'rgba(239,243,255,0)',
          0.2,
          'rgb(198,219,239)',
          0.4,
          'rgb(158,202,225)',
          0.6,
          'rgb(107,174,214)',
          0.8,
          'rgb(49,130,189)',
          0.9,
          'rgb(8,81,156)'
        ],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          2,
          MAX_ZOOM_LEVEL,
          6
        ],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          1,
          MAX_ZOOM_LEVEL,
          1
        ]
      }
    }
  }

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onLoad={handleMapLoaded}
        onViewportChange={updateViewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={mapboxApiAccessToken}
        ref={heatMapRef}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: '10px'
          }}
        >
          <NavigationControl
            showCompass={false}
            onViewportChange={updateViewport}
          />
        </div>
      </ReactMapGL>
    </div>
  )
}

HeatMapChart.propTypes = {
  className: PT.string,
  data: PT.array.isRequired,
  height: PT.array.isRequired,
  width: PT.array.isRequired
}

HeatMapChart.defaultProps = {
  height: 600
}
