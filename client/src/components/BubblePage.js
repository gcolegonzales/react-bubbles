import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWtihAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
      .then((result) => {
        setColorList(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
