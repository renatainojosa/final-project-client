import "./PetForm.css";
import { useState } from "react";

const PetForm = ({ loading, onSubmit, submitText }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [color, setColor] = useState("");
  const [castrated, setCastrated] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
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
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <input
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="gender">Gender:</label>
        <input
          type="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="breed">Breed:</label>
        <input
          type="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input
          type="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="color">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="castrated">Castrated:</label>
        <input
          type="castrated"
          value={castrated}
          onChange={(e) => setCastrated(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="vaccinated">Vaccinated:</label>
        <input
          type="vaccinated"
          value={vaccinated}
          onChange={(e) => setVaccinated(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="profileImgUrl">Profile Image:</label>
        <input
          type="file"
          onChange={(e) => setProfileImgUrl(e.target.files[0])}
        />
      </div>
      {loading ? "Loading..." : <button>{submitText}</button>}
    </form>
  );
};

export default PetForm;
