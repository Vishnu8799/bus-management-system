import React, { useState, useEffect } from "react";
import { saveData, getData } from "../Utils/Storage";
import { Input, Row, Col } from "reactstrap";
import "./Form.css";

const AddBusForm = () => {
  const [busInfo, setBusInfo] = useState({
    name: "",
    degree: "",
    year: "",
    place: "",
    city: "",
  });

  const [buses, setBuses] = useState([]); // State to hold bus data list

  // Fetch the bus data from localStorage when component mounts
  useEffect(() => {
    const storedBuses = getData("buses") || [];
    setBuses(storedBuses);
  }, []);

  const handleChange = (e) => {
    setBusInfo({ ...busInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let buses = getData("buses") || [];
    buses.push(busInfo);
    saveData("buses", buses);
    setBuses(buses); // Update the bus list state
    alert("Bus info added!");
    setBusInfo({ name: "", degree: "", year: "", place: "", city: "" });
  };

  return (
    <div className="containers">
      <Row className="input">
        <form >
          <Row>
            <Col>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={busInfo.name}
                onChange={handleChange}
                required
                style={{ margin: "10px" }}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="degree"
                placeholder="Degree"
                value={busInfo.degree}
                onChange={handleChange}
                required
                style={{ margin: "10px" }}
              />
            </Col>
            <Col>
              <Input
                type="number"
                name="year"
                placeholder="Year"
                value={busInfo.year}
                onChange={handleChange}
                required
                style={{ margin: "10px" }}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="place"
                placeholder="Place"
                value={busInfo.place}
                onChange={handleChange}
                required
                style={{ margin: "10px" }}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={busInfo.city}
                onChange={handleChange}
                required
                style={{ margin: "10px" }}
              />
            </Col>
          </Row>
          <Row className="button">
          <button onClick={handleSubmit} style={{width:'20%',height:'40px',backgroundColor:'green',color:'white',fontWeight:'bold',fontSize:'18px'}}>Submit</button>
          </Row>
        </form>
      </Row>

      {/* Display the bus data in a table */}
      <Row className="table">
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          Students Information List
        </h3>
        {buses.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Degree</th>
                <th>Year</th>
                <th>Place</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus, index) => (
                <tr key={index}>
                  <td>{bus.name}</td>
                  <td>{bus.degree}</td>
                  <td>{bus.year}</td>
                  <td>{bus.place}</td>
                  <td>{bus.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingTop: "10px",
              height: "auto",
            }}
          >
            No bus data available
          </p>
        )}
      </Row>
    </div>
  );
};

export default AddBusForm;
