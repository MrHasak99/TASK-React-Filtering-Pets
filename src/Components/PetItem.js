import { useState } from "react";

function PetItem({ pet, adopt }) {
  const [petImage, setPetImage] = useState(pet.image);

  const changeImage = () => {
    if (petImage === pet.image) {
      setPetImage(pet.image2);
    } else {
      setPetImage(pet.image);
    }
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={changeImage}>
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => adopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
