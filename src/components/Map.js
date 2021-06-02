import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
// import mapStyles from './css/mapStyles'
import './css/Map.css'


const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "92vh",
};

const center = {
  lat: 37.10828,
  lng: -113.583282,
};

const options = {
    // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {

  const { user } = useContext(UserContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  // console.log(user)

  return isLoaded ? (
    <div id="lowerIt">
      {/* <Search /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onLoad}
      >
        {user && markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className='infoWindow'>
              <h4>VolleyBall Court</h4>
              <p>Added {formatRelative(selected.time, new Date())} <br />Made by: <u>{user.username}</u></p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
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

export default React.memo(Map);
