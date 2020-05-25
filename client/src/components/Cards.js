import React from "react";
// import { Link } from "react-router-dom";

function Cards  (props)  {
 



    return (
     
        <div className="cards-bg">
      <section className="card-wrap">  
      <div className="card-wrap-title"><h2>Descubre mas recetas</h2></div>
        <div className="recetas-cards-container">
          <div className="card arroz-frito">
            <div className="card-image"></div>
            <div className="card-body ">
              <p className="card-text ">
                 Receta Keto 1
                
              </p>
            </div>
          </div>

          <div className="card flan-de-la-casa">
            <div className="card-image"></div>
            <div className="card-body">
              <p className="card-text">
              Receta Keto 2
              </p>
            </div>
          </div>

          <div className="card dalgona-coffee">
            <div className="card-image"></div>
            <div className="card-body">
              <p className="card-text">
              Receta Keto 3
              </p>
            </div>
          </div>

          <div className="card keto-brownies">
            <div className="card-image"></div>
            <div className="card-body">
              <p className="card-text">
              Receta Keto 4
              </p>
              
            </div>
          </div>
        </div>
        
      </section>
      </div>



     
      
      
    );
  
}


export default Cards;