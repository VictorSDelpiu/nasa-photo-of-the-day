import React from "react";
import styled from "styled-components";

const StyledHeadingOne = styled.h1`
    background: #d39f16;
    color: white;
    width: 40%;
    margin-left: 30%;
    margin-top: 1%;
    padding-top: 8px;
    padding-bottom: 10px;
`;

const StyledImage = styled.img`
    width: 700px;
    height: 600px;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 5px;
`;

const StyledHeadingThree = styled.h3`
  
`;

const StyledParagraph = styled.p`
    width: 60%;
    margin-left: 20%;
`;

const NasaCard = (props) => {
  return (
      <div className="NasaCard">
          <StyledHeadingOne>Astronomy Picture of the Day</StyledHeadingOne>
          <StyledImage src={props.hdurl}></StyledImage>
          <StyledHeadingThree>Date: {props.date}</StyledHeadingThree>
          <StyledParagraph>Explanation: {props.explanation}</StyledParagraph>
      </div>
  )
};

export default NasaCard;

