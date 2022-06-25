import React from "react";
import { FaCocktail, FaLeaf } from "react-icons/fa";
import { GiCupcake, GiHotMeal, GiSlicedBread } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/maincourse"}>
        <GiHotMeal />
        <h4>Main Course</h4>
      </SLink>
      <SLink to={"/cuisine/bread"}>
        <GiSlicedBread />
        <h4>Bread</h4>
      </SLink>
      <SLink to={"/cuisine/soup"}>
        <TbSoup />
        <h4>Soup</h4>
      </SLink>
      <SLink to={"/cuisine/appetizer"}>
        <GiCupcake />
        <h4>Appetizer</h4>
      </SLink>
      <SLink to={"/cuisine/salad"}>
        <FaLeaf />
        <h4>Salad</h4>
      </SLink>
      <SLink to={"/cuisine/drink"}>
        <FaCocktail />
        <h4>Drink</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
