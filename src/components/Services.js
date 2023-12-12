import Title from "./Title";
import { teste } from "./data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <Title title="our" subTitle="services" />
        </div>
        <div className="section-center services-center">
          {teste.map((link) => {
            return (
              <article key={link.id} className="service">
                <span className="service-icon">
                  <i className={link.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-text">{link.title}</h4>
                  <p className={link.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia.
                  </p>
                </div>
              </article>
            );
          })}
          ;
        </div>
      </section>
    </>
  );
};
export default Services;
