import React from "react";
import "../../styles/Comunidad/mision_vision.css";
import ImgMision from "../../Imagenes/Comunidad/cansat-explorer1.jpg";

const Mision = () => {
  return (
    <div className="container_mision_vision" id="mision">
      <h1 id="title">Mision</h1>
      <div className="section_data">
        <div className="item_data">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo
            laudantium nobis dolorem voluptatem cum incidunt nisi ducimus
            quisquam fugit dolores vel, porro culpa fugiat illo. Similique
            aliquam labore ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sunt et impedit placeat distinctio consequuntur assumenda natus
            exercitationem dicta possimus eius illo eveniet dolores omnis,
            blanditiis aperiam illum, dolore eligendi.
          </p>
        </div>
        <div className="item_data data_center">
          <div className="img_data">
            <img src={ImgMision} alt="img_mision" />
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            nostrum obcaecati nemo laudantium reprehenderit nihil explicabo est
            ipsum odit! Perspiciatis rerum corrupti aperiam, eos asperiores
            assumenda obcaecati aliquid ipsum impedit?
          </p>
        </div>
        <div className="item_data">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo
            laudantium nobis dolorem voluptatem cum incidunt nisi ducimus
            quisquam fugit dolores vel, porro culpa fugiat illo. Similique
            aliquam labore ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sunt et impedit placeat distinctio consequuntur assumenda natus
            exercitationem dicta possimus eius illo eveniet dolores omnis,
            blanditiis aperiam illum, dolore eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;