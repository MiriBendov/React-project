import React, { useState } from 'react';

import image1 from "./imgs/1.jpg"
import image2 from "./imgs/2.jpg"
import image3 from "./imgs/3.jpg"
import image4 from "./imgs/4.jpg"
import image5 from "./imgs/5.jpg"
import image6 from "./imgs/6.jpg"


const MyComponent = () => {
   const [image, setVariableMessage] = useState([image1,image2,image3,image4,image5,image6]);
   const [index,setindex]=useState(1);
   return(
   
   < div>
   <button onClick={() => setindex(index+1)}> → </button> 
   <button onClick={() => setindex(index-1)}> ← </button>

   <img src={image[index]}></img>

   </div>
    
   )
};

export default MyComponent