const Stat = ({ name, value }) => {
  return (
    <>
      <div className="row my-3 justify-content-center">
        <div className="col-md-2">
          <h4 className="text-white">{name}: </h4>
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="progress w-100" style={{ height: "20px" }}>
            <div
              className="progress-bar bg-gradient bg-warning text-dark fw-bold"
              role="progressbar"
              style={{ width: `${value / 10}%` }}
              aria-valuenow={value}
              aria-valuemin="0"
              aria-valuemax="1000"
            >
              {value}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
