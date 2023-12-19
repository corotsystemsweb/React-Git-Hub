import React, { useState } from 'react';
import imgMohan from "./img/mohan-lal.jpg";

const trainData = [
    {
        trainName : "ABC Exp",
        trainNumber : 600,
        destination: "Delhi"
},
{
    trainName : "JK Exp",
    trainNumber : 200,
    destination: "Jammu"
},
{
    trainName : "Rajdhani",
    trainNumber : 250,
    destination: "Mumbai"
}
]
const Card = () => {
        const [train, setTrain] = useState(trainData);

       
        const showTrainList = () => {
            const newTrainList = trainData.sort((a, b) => {
                return a.trainNumber - b.trainNumber; 
            });
            setTrain(newTrainList);
        }

    const cardStyle = {
        container: {
            width: "200px",
            height: "auto",
            margin: "20px auto",
            backgroundColor: "tomato",
            padding: "20px"
        },
        title: {
            font: "normal 22px arial",
            textAlign: "center",
            lingHieght: "30px",
            color: "#ffffff",
            margin: "0",
            padding: "0"
        },
        profilePic : {
            border: "5px solid #e2e2e2",
            display: "block",
            marginTop: "10px",
            margin: "auto"
        },
        desc: {
            font: "normal 16px arial",
            color: "#ffffff",
            paddingTop: "15px"
        }
    }
  return (
    <section style={cardStyle.container}>
      <h1 style={cardStyle.title}>Mohan</h1>
     <img style={cardStyle.profilePic} src={imgMohan} alt="Mohan" />
      <div style={cardStyle.desc}>Mohanlal made his acting debut at age 18, and worked around 400+ movies in varius indian languages.</div>
      <h2>Train List</h2>
      <div>
        {
            train.map((ele, index) => 
            <ul key={index}>
                <li>{ele.trainName}</li>
            </ul>
            )
        }
      </div>
      <button onClick={showTrainList}> Train List </button>

    </section>
  );
}

export default Card;
