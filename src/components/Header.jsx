import { useContext, useState } from "react";
import Input from "./Input";
import IpContent from "./IP-Content";
import axios from "axios";
import { IpContext } from "./Context";
import toast from "react-hot-toast";

const Header = () => {
  const [text, setText] = useState("");
  const { setAdress } = useContext(IpContext);
  const [loading, setLoading] = useState(false);

  async function getIp() {
    try {
      setLoading(true);
      const request = await axios.get(`http://ip-api.com/json/${text}`);
      const data = await request.data;

      if (data.status !== "success") {
        setLoading(false);
        return toast.error(`${data.message}: ${data.query}`);
      }

      setAdress({
        isp: data.isp,
        lat: data.lat,
        lon: data.lon,
        ip: data.query,
        timezone: data.timezone,
        location: `${data.city}, ${data.regionName}, ${data.country}`,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return toast.error(`${error.message}`);
    }
  }

  return (
    <>
      <section id="headerContainer">
        <h1 className="headerH1">IP Address Tracker</h1>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          action={getIp}
          loading={loading}
        />
        <IpContent />
      </section>
    </>
  );
};

export default Header;
