import { useContext } from "react";
import Content from "./Content";
import { IpContext } from "./Context";

const IpContent = () => {
  const { address } = useContext(IpContext);
  const { ip, timezone, location, isp } = address;
  return (
    <>
      <div className="ip-content-container">
        <Content content={ip} />
        <Content head={"location"} content={location} />
        <Content head={"timezone"} content={timezone} />
        <Content head={"isp"} content={isp} />
      </div>
    </>
  );
};

export default IpContent;
