import Card from "../molecule/card";
import CardData from "../../sampleData/cardData";

const Main = () => {
  return (
    <main>
      <section className="cardsSection">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Featured escapes</p>
              <h2>Handpicked nature journeys</h2>
            </div>
            <p>From alpine hideaways to cedar forest retreats, every stay is chosen for comfort and scenery.</p>
          </div>

          <div className="cards-grid">
            {CardData.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;