const Input = ({ value, action, onChange, loading }) => {
  return (
    <>
      <div className="inputContainer">
        <div className="input">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={value}
            onChange={onChange}
          />
          <button className="inputBtn" onClick={action}>
            {loading ? (
              <svg
                viewBox="0 0 24 24"
                className="loader"
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
                    stroke="#fff"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
