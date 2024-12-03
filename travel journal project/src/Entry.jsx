function Entry({ img, place, map, location, date, details }) {
  return (
    <div className="main">
      <img src={img} alt="Rajasthan image" />
      <div className="content">
        <div className="head">
          <img src="src/assets/map-icon.png" alt="Icon" className="icon" />
          <p>{place}</p>
          <a href={map} target="_blank">
            View On Google Maps
          </a>
        </div>
        <div className="head2">
          <h1>{location}</h1>
          <p>{date}</p>
          <h5>{details}</h5>
        </div>
      </div>
    </div>
  );
}

export default Entry;
