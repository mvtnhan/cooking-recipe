import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [isInstructionsTab, setIsInstructionsTab] = useState(true);

  let params = useParams();

  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const dataDetails = await data.json();
    setDetails(dataDetails);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={isInstructionsTab ? "active" : ""}
          onClick={() => setIsInstructionsTab(true)}
        >
          Instructions
        </Button>
        <Button
          className={isInstructionsTab ? "" : "active"}
          onClick={() => setIsInstructionsTab(false)}
        >
          Ingredients
        </Button>
        {isInstructionsTab ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {details.extendedIngredients?.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  img {
    border-radius: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;

    li {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;

  h3 {
    font-size: 1rem;
  }
`;

export default Recipe;
