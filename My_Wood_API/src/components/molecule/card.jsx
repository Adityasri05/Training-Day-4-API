
function Card({ item }) {
  return (
    <article className="card">
      <div className="card-image-wrap">
        <img src={item.image} alt={item.title} className="card-image" />
        <span className="card-badge">{item.category}</span>
      </div>

      <div className="card-content">
        <div className="card-heading">
          <div>
            <h2>{item.title}</h2>
            <p className="card-rating">⭐ {item.rating}</p>
          </div>
        </div>

        <p>{item.description}</p>

        <div className="card-footer">
          <div>
            <h3>{item.price}</h3>
            <span className="card-meta">per night</span>
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </article>
  );
}

export default Card;