export default function Content({ head, content,button, show,action }) {
  return (
    <>
      <div className="content-container">
        <h5 className="ipHeader">{head || "IP Adress"}</h5>

        <h3 className="content">{content || <> --</>}{show ? <span> <button onClick={action} className="seeBtn">{!button ? " see-less" : " see-more"}</button></span>: null}</h3>
      </div>
    </>
  );
}
