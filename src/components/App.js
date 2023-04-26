import React, { Component, useState } from "react";
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import InputQuery from './components/InputQuery';
import SubmitButton from './components/SubmitButton';

import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;
