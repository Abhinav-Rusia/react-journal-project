function Entry(props) {
  return (
    <div className="main">
      <img src={props.img.src} alt={props.img.alt} />
      <div className="content">
        <div className="head">
          <img src="src/assets/map-icon.png" alt="Icon" className="icon" />
          <p>{props.place}</p>
          <a href={props.map} target="_blank">
            View On Google Maps
          </a>
        </div>
        <div className="head2">
          <h1>{props.location}</h1>
          <p>{props.date}</p>
          <h5>{props.details}</h5>
        </div>
      </div>
    </div>
  );
}

export default Entry;
