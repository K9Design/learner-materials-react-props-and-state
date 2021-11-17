

function Card(props) {
  const {name,species,favFoods,birthYear,photo,alt} = props.catData;
  
  return (
      <div className="card" key={props.id} >
          <h3 className="card__text card__header">{name}</h3>
          <img className="card__image" src={photo} alt={alt}></img>
          <p className="card__text">Species: {species}</p>
          <p className="card__text">Favourite Food(s): {favFoods.toString()}</p>
          <p className="card__text">Birth Year: {birthYear}</p>
      </div>
  )
}

export default Card