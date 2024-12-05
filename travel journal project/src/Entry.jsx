function Entry(props) {
  return (
    <div className="main">
      <img src={props.entry.img.src} alt={props.entry.img.alt} />
      <div className="content">
        <div className="head">
          <img src="src/assets/map-icon.png" alt="Icon" className="icon" />
          <p>{props.entry.title}</p>
          <a href={props.entry.map} target="_blank">
            View On Google Maps
          </a>
        </div>
        <div className="head2">
          <h1>{props.entry.location}</h1>
          <p>{props.entry.date}</p>
          <h5>{props.entry.details}</h5>
        </div>
      </div>
    </div>
  );
}

export default Entry;
