import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import icon from "/images/icon-location.svg"

export default function Map({ lat, lon }) {
  function ChangeView({ center }) {
    const map = useMap();
    map.flyTo(center, 13);
    return null;
  }
  const newIcon = new Icon({
    iconUrl: icon,
    iconSize: [25, 30],
    iconRetinaUrl: icon,
  });
  return (
    <>
      {lat ? (
        <MapContainer
          className="mapper"
          center={[lat, lon]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <ChangeView center={[lat, lon]} />
          <Marker position={[lat, lon]} icon={newIcon} />{" "}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      ) : (
        <>
          <div className="loading"></div>
        </>
      )}
    </>
  );
}
