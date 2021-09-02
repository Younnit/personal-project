import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../context/UserContext'
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api'

import '@reach/combobox/styles.css'
import './css/Map.css'
import axios from 'axios'

const libraries = ['places']

const mapContainerStyle = {
  width: '100vw',
  height: '92vh',
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

function Map() {
  const { user } = useContext(UserContext)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const [map, setMap] = React.useState(null)
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)
  const [latitude, setLatitude] = useState(39.368279)
  const [longitude, setLongitude] = useState(-101.559466)

  const getMarkers = useCallback(() => {
    axios
      .get('/api/positions')
      .then((res) => {
        setMarkers(res.data)
      })
      .catch((err) => console.log(err))

    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log(position)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  useEffect(() => {
    getMarkers()
  }, [getMarkers])

  const handleDelete = (id) => {
    axios.delete(`/api/delete/${id}`).then(() => {
      getMarkers()
    })
    setSelected(null)
  }

  console.log(markers)

  const center = {
    lat: latitude,
    lng: longitude,
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onMapClick = React.useCallback((e) => {
    axios
      .post('/api/create', {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      })
      .then(() => {
        getMarkers()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return isLoaded && user ? (
    <div id="lowerIt">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onLoad}
      >
        {markers.map((marker) => (
          <Marker
            position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
            key={marker.position_id}
            onClick={() => {
              setSelected(marker)
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <div className="infoWindow">
              <h4>VolleyBall Court</h4>
              <div className="newFlex">
                <p>
                  Made by: <u>{selected.position_id && selected.username}</u>
                </p>
                {user.username === selected.username && (
                  <button onClick={() => handleDelete(selected.position_id)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : (
    <div className="sorry">
      <h1>Sorry!</h1>
      <br />
      <h3>You must be logged in to see the map.</h3>
    </div>
  )
}

// function Search() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 37.10828, lng: () => -113.583282 },
//       radius: 200 * 1000,
//     },
//   });

//   return (
//     <div>
//       <Combobox
//         onSelect={(address) => {
//           console.log(address);
//         }}
//       >
//         <ComboboxInput
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           disabled={!ready}
//           placeholder="Enter an address"
//         />
//         <ComboboxPopover>
//           {status === "OK" &&
//             data.map((id, description) => {
//               <ComboboxOption key={id} value={description} />
//             })}
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }

export default React.memo(Map)
