import 'leaflet/dist/leaflet.css'
import styles from './Map.module.scss'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRouter } from 'next/router'
import { googleMapCordinates, googleMapDirection } from '../../../utils/constants'

const Map = () => {
  const router = useRouter()

  const redirectToGoogleMap = () => {
    router.replace(googleMapDirection)
  }

  const mapOptions = {
    center: googleMapCordinates,
    zoom: 18,
    minZoom: 14,
    scrollWheelZoom: false,
  }

  const iconMarker = L.icon({
    iconUrl: 'assets/img/icons/marker.svg',
    iconSize: [44, 44],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  })

  return (
    <MapContainer className={styles.map} {...mapOptions}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        maxZoom={18}
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <TileLayer
        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://www.opensnowmap.org/iframes/data.html">www.opensnowmap.org</a> <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        url="https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png"
        minZoom={14}
        maxZoom={18}
      />
      <Marker
        position={googleMapCordinates}
        icon={iconMarker}
        eventHandlers={{
          click: () => {
            redirectToGoogleMap()
          },
        }}
      />
    </MapContainer>
  )
}

export default Map
