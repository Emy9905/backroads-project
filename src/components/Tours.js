import Title from "./Title";
import { tourLinks } from "./data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="featured" subTitle="tours" />
      </div>

      <div className="section-center featured-center">
        {tourLinks.map((link) => {
          const {
            id,
            photo,
            title,
            description,
            date,
            country,
            duration,
            price,
          } = link;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={photo} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
        ;
      </div>
    </section>
  );
};
export default Tours;
