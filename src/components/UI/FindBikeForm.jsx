import React from "react";
import "../../styles/find-bike-form.css";
import "../../styles/find-bike-form.css";
import { Form, FormGroup } from "reactstrap";

const FindBikeForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Scooty</option>
            <option value="non-ac">Bike</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__bike-btn">Find Bike</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindBikeForm;
