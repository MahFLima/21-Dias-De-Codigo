import styled, { css } from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 20px;

  @media (min-width: 840px) {
    display: none;
  }
  > input {
    width: 100%;
    padding: 14.5px 54px 14.5px 20px;
    border-radius: 1.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 28px;
  top: 20px;
  cursor: pointer;
`;


export const Filter = styled.div`
  display: none;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;

  @media (min-width: 720px) {
    display: flex;
  }
`;


export const FilterResponsive = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 2rem;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 27px;
  }

  > button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    padding: 0.5rem 1rem;
    border: none;
    background: #f2f2f2;

    &:hover {
      background: var(--text-orange);
      color: white;
    }
  }

  @media (min-width: 720px) {
    display: none;
  }
`;

export const ListProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem 0;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 3rem;

  @media(min-width: 720px){
    padding: 0 6rem;
  }
`

export const MenuFilter = styled.div`
  display: flex;
  flex-direction: column;
`;