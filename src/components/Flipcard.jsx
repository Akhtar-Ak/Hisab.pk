import React,{useState} from 'react'
import Card from "./Cardsdata";
import cn from 'classnames';


const FlipCard = () => {

  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (Card.variant === "click") { 
      setShowBack(!showBack); 
    } 
  }
  
  function handleFocus() { 
    if (Card.variant === "focus") { 
      setShowBack(true); 
    } 
  } 

  function handleBlur() { 
    if (Card.variant === "focus") { 
      setShowBack(false); 
    } 
  }  
  return (
    <>
        <div
      tabIndex={Card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": Card.variant === "focus" 
      })} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    ></div>
     <div
      className="flip-card-outer"
      onClick={handleClick} 
    >

    </div>
      
        <div
        className={cn("flip-card-inner", {
          showBack, 
          "hover-trigger": Card.variant === "hover"
        })}
      ></div>
    

    <div className="flip-card-outer">
      <div className="flip-card-inner">
        <div className="card front">
          <div className="card-bod">
           
          {Card.map((card) => (
            <>
            <div className="cardbody_logo">
                  <img src={card.logo} alt="" />
              </div>
              <div className="cardbody_title">
              
                <h1> {card.title} </h1>
              </div>
              <div className="cardbody_pera">
                <p>{card.discr}</p>
              </div>
              </>
        ))}
          </div>
        </div>
        <div className="card_back">
          <div className="card-body d-flex justify-content-center align-items-center">
          {Card.map((card) => (
            <>
            <div className="cardbody_logo">
                 
              </div>
              <div className="cardbody_title">
              
                <h1> {card.title2} </h1>
              </div>
              <div className="cardbody_pera">
                <p>{card.discr2}</p>
              </div>
              </>
        ))}
          </div>
        </div>
      </div>
    </div>
</>
  );
}

export default FlipCard;


