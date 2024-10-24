import { useContext, useState } from "react";
import Content from "./Content";
import { IpContext } from "./Context";

const IpContent = () => {
  const { address } = useContext(IpContext);
  const { ip, timezone, location, isp } = address;
  const [see, setSee] = useState(true)
  return (
    <>
      <div className="ip-content-container">
        <Content content={see ? ip.slice(0,4) + "..." : ip} button={see} show={true} action={()=>setSee(prev => !prev)} />
        <Content head={"location"} content={location} />
        <Content head={"timezone"} content={"UTC "+timezone} />
        <Content head={"isp"} content={isp} />
      </div>
    </>
  );
};

export default IpContent;
