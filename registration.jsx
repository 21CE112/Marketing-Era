import React, { useState } from 'react';
import registration from './style.css'

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <>
      <h1>Course Registration</h1>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label htmlFor="birthdate">Select BirthDate:</label>
        <input type="date" id="birthdate" name="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        <label htmlFor="gender">Select a Gender</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Please Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">N/A</option>
        </select>

        <h2>Address</h2>
        <label htmlFor="streetAddress">Street Address</label>
        <input type="text" id="streetAddress" name="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} required />
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
        <label htmlFor="pincode">Pincode</label>
        <input type="number" id="pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />

        <h2>Course Selection</h2>
        <label htmlFor="course">Select a Course:</label>
        <select id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="">Select a course</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
          <option value="course3">Course 3</option>
        </select>

        <button type="submit" id="register-btn">Register</button>
      </form>

      <footer>
        <p>&copy; 2023 Course Registration Inc.</p>
      </footer>
    </>
  );
};

export default Registration;
