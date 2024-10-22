export default function Content({ head, content }) {
  return (
    <>
      <div className="content-container">
        <h5 className="ipHeader">{head || "IP Adress"}</h5>

        <h3 className="content">{content || <> --</>}</h3>
      </div>
    </>
  );
}
