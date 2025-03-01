import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapSearch from "./MapSearch";




function MapController() {
  const map = useMap()

  useEffect(() => {
    // go to user location on first initialization
    function flyToUser(loc) {
      map.flyTo(loc.latlng, 15)
      console.log(loc.latlng)
    }
    map.locate()
    map.addEventListener("locationfound", flyToUser)
    // map.removeEventListener("locationfound", flyToUser)

    return () => map.removeEventListener("locationfound", flyToUser)

  }, [map])



  return null
}

function MapLocationControl({ location }) {
  const map = useMap()



  if (location) map.flyTo(location)
}


export default function LeafletMap({ location }) {


  // const { addressSearch } = useGeoCoding()

  // addressSearch("Jakarta, indonesia").then((val) => console.log(val))

  return (
    <div>
      <MapContainer center={[-7.2521, 106.8269568]} zoom={13} scrollWheelZoom={false} style={{ height: "400px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController />
        <MapLocationControl location={location} />
        {/* <MapSearch /> */}
      </MapContainer>
    </div >
  )
}
