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
      const request = await axios.get(`https://ipapi.co/${text}/json/`);
      const data = await request.data;
      

      if (data.error) {
        setLoading(false);
        return toast.error(`${data.reason}: ${data.ip}`);
      }

      setAdress({
        isp: data.org,
        lat: data.latitude,
        lon: data.longitude,
        ip: data.ip,
        timezone: data.utc_offset,
        location: `${data.city}, ${data.region}, ${data.country_name}`,
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
