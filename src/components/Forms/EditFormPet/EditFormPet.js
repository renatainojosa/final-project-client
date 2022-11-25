import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../../../api/project.api';

const EditFormPet = ({ loading, onSubmit, submitText }) => {
  const [isLoading, setisLoading] = useState(false);
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
  const {petId} = useParams()

  useEffect(() => {
    setisLoading(true);
    api
      .getOnePet(petId)
      .then((response) => {
        setName(response.name);
        setDescription(response.description);
        setCategory(response.category);
        setGender(response.gender);
        setBreed(response.breed);
        setAge(response.age);
        setColor(response.color);
        setCastrated(response.castrated);
        setVaccinated(response.vaccinated);
        setProfileImgUrl(response.profileImgUrl);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="category">Category:</label>
        <input
          type="radio"
          name="category"
          id="dog"
          value="dog"
          checked={category === "dog"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="dog">Dog</label>
        <input
          type="radio"
          name="category"
          id="cat"
          value="cat"
          checked={category === "cat"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="cat">Cat</label>
      </div>
      <div className="form-control">
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div className="form-control">
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="castrated">Castrated:</label>
        <input
          type="radio"
          name="castrated"
          id="isCastrated"
          value="Yes"
          checked={castrated === "Yes"}
          onChange={(e) => setCastrated(e.target.value)}
        />
        <label htmlFor="isCastrated">Yes</label>
        <input
          type="radio"
          name="castrated"
          id="isNotCastrated"
          value="No"
          checked={castrated === "No"}
          onChange={(e) => setCastrated(e.target.value)}
        />
        <label htmlFor="isNotCastrated">No</label>
      </div>
      <div className="form-control">
        <label htmlFor="vaccinated">Vaccinated:</label>
        <input
          type="radio"
          name="vaccinated"
          id="isVaccinated"
          value="Yes"
          checked={vaccinated === "Yes"}
          onChange={(e) => setVaccinated(e.target.value)}
        />
        <label htmlFor="isVaccinated">Yes</label>
        <input
          type="radio"
          name="vaccinated"
          id="isNotVaccinated"
          value="No"
          checked={vaccinated === "No"}
          onChange={(e) => setVaccinated(e.target.value)}
        />
        <label htmlFor="isNotVaccinated">No</label>
      </div>
      <div className="form-control">
        <label htmlFor="profileImgUrl">Profile Image:</label>
        <input
          type="file"
          onChange={(e) => setProfileImgUrl(e.target.files[0])}
        />
      </div>
      {loading ? isLoading : <button>{submitText}</button>}
    </form>
  );
};

export default EditFormPet;