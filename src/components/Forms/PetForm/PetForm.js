import "./PetForm.css";
import { useState } from "react";

const PetForm = ({ loading, onSubmit, submitText }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [castrated, setCastrated] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      category,
      gender,
      breed,
      age,
      color,
      castrated,
      vaccinated,
      profileImgUrl,
    });
  };

  return (
  <form classNameName="form-container" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="category" className="form-label">Category:</label>
      <input
        type="radio"
        name="category"
        id="dog"
        value={'dog'}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="dog" className="form-label">Dog</label>
      <input
        type="radio"
        name="category"
        id="cat"
        value={'cat'}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="cat" className="form-label">Cat</label>
    </div>
    <div className="mb-3">
      <label htmlFor="gender" className="form-label">Gender:</label>
      <input
        type="radio"
        name="gender"
        id="male"
        value='male'
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="male" className="form-label">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value='female'
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="female" className="form-label">Female</label>
    </div>
    <div className="mb-3">
      <label htmlFor="breed" className="form-label">Breed:</label>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">Age:</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="color" className="form-label">Color:</label>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="castrated" className="form-label">Castrated:</label>
      <input
        type="radio"
        name="castrated"
        id="isCastrated"
        value='Yes'
        onChange={(e) => setCastrated(e.target.value)}
      />
      <label htmlFor="isCastrated" className="form-label">Yes</label>
      <input
        type="radio"
        name="castrated"
        id="isNotCastrated"
        value='No'
        onChange={(e) => setCastrated(e.target.value)}
      />
      <label htmlFor="isNotCastrated" className="form-label">No</label>
    </div>
    <div className="mb-3">
      <label htmlFor="vaccinated" className="form-label">Vaccinated:</label>
      <input
        type="radio"
        name="vaccinated"
        id="isVaccinated"
        value='Yes'
        onChange={(e) => setVaccinated(e.target.value)}
      />
      <label htmlFor="isVaccinated" className="form-label">Yes</label>
      <input
        type="radio"
        name="vaccinated"
        id="isNotVaccinated"
        value='No'
        onChange={(e) => setVaccinated(e.target.value)}
      />
      <label htmlFor="isNotVaccinated" className="form-label">No</label>
    </div>
    <div className="mb-3">
      <label htmlFor="profileImgUrl" className="form-label">Profile Image:</label>
      <input
        type="file"
        onChange={(e) => setProfileImgUrl(e.target.files[0])}
      />
    </div>
    {loading ? "Loading..." : <button>{submitText}</button>}
  </form>
  )
};

export default PetForm;
