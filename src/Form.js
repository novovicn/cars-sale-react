import React from "react";
import useForm from "./useForm";
import "./Form.css";
import validate from "./validateInfo";

function Form({submitForm}) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading">Add your car for sale!</h1>
      <div className="form__inputs">
        <label htmlFor="brand" className="form__label">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          className="form__input"
          placeholder="Brand"
          value={values.brand}
          onChange={handleChange}
        />
        {errors.brand && <p>{errors.brand}</p>}
      </div>
      <div className="form__inputs">
        <label htmlFor="model" className="form__label">
          Model
        </label>
        <input
          type="text"
          name="model"
          className="form__input"
          placeholder="model"
          value={values.model}
          onChange={handleChange}
        />
        {errors.model && <p>{errors.model}</p>}
      </div>
      <div className="form__inputs">
        <label htmlFor="year" className="form__label">
          Year
        </label>
        <input
          type="number"
          name="year"
          className="form__input"
          placeholder="year"
          value={values.year}
          onChange={handleChange}
        />
        {errors.year && <p>{errors.year}</p>}
      </div>
      <div className="form__inputs">
        <label htmlFor="imageURL" className="form__label">
          Image URL
        </label>
        <input
          type="text"
          name="imageURL"
          className="form__input"
          placeholder="imageURL"
          value={values.imageURL}
          onChange={handleChange}
        />
      </div>
      <div className="form__inputs">
        <label htmlFor="mileage" className="form__label">
          Mileage
        </label>
        <input
          type="number"
          name="mileage"
          className="form__input"
          placeholder="mileage"
          value={values.mileage}
          onChange={handleChange}
        />
      </div>
      <div className="form__inputs">
        <label htmlFor="vin" className="form__label">
          Vehicle identification number
        </label>
        <input
          type="text"
          name="vin"
          className="form__input"
          placeholder="vin"
          value={values.vin}
          onChange={handleChange}
        />
        {errors.vin && <p>{errors.vin}</p>}
      </div>
      <div className="form__inputs">
        <label htmlFor="price" className="form__label">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="form__input"
          placeholder="price"
          value={values.price}
          onChange={handleChange}
        />
        {errors.price && <p>{errors.price}</p>}
      </div>
      <button className="form__submit" type="submit">
        Add car
      </button>
    </form>
  );
}

export default Form;
