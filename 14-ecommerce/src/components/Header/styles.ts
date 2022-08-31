import styled, { css } from "styled-components";


export const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0.75rem 1rem;
  justify-content: space-between;

  @media (min-width: 840px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 49px;

  @media (min-width: 500px) {
    font-size: 2.25rem;
  }

  @media (min-width: 840px) {
    font-size: 2.25rem;
  }

  > strong {
    color: var(--text-orange);
  }
`;

export const SearchInput = styled.div`
  display: none;
  position: relative;
  width: 25rem;

  @media (min-width: 840px) {
    display: flex;
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
  right: 12px;
  top: 12px;
  cursor: pointer;
`;


export const LinkShop = styled.a`
  color: black;

  &:hover{
    color: var(--text-orange);
  }
`;

export const SignIn = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: var(--text-orange);
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  border: 1px solid var(--text-orange);

  @media (min-width: 840px) {
    display: flex;
  }

  &:hover {
    background: var(--text-orange);
    color: white;
  }
`;


export const ButtonIconMenu = styled.button`
  border: none;
  background: transparent;
  @media (min-width: 840px) {
    display: none;
  }
`;


