import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Map from "./components/Map";
import { IpContext } from "./components/Context";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [address, setAdress] = useState({
    isp: "",
    lat: null,
    lon: null,
    ip: "",
    timezone: "",
    location: "",
  });
  const { lat, lon } = address;

  useEffect(() => {
    if (!address.ip) {
      async function getIp() {
        try {
          const request = await axios.get("https://ipapi.co/json/");
          const data = request.data;

          setAdress({
            isp: data.org,
            lat: data.latitude,
            lon: data.longitude,
            ip: data.ip,
            timezone: data.utc_offset,
            location: `${data.city}, ${data.region}, ${data.country_name}`,
          });
        } catch (error) {
          return toast.error(error.reason)
        }
      }
      getIp();
    }
  });

  return (
    <>
      <Toaster position="top center" />
      <IpContext.Provider value={{ address, setAdress }}>
        <main>
          <div></div>
          <Header />
          <Map lat={lat} lon={lon} />
        </main>
      </IpContext.Provider>
    </>
  );
}

export default App;
