import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3d3d3d;
  background: #e5e5e5;
`;

export const DwlC = styled.a`
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  color: #F1F2F4;
  background: blueviolet;

  &:hover{
    opacity: 0.7;
  }
`

export const Top = styled.button`
  position: fixed;
  border: none;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  background: transparent;
`

export const EventTag = styled.button`
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-direction: column;

  @media (min-width: 580px) {
    flex-direction: row;
  }
`;
export const ImageUser = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 50%;
`;
export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > strong {
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 33px;
  }
  > p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  > div {
    display: flex;
    gap: 1.625rem;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  flex-direction: column;

  @media (min-width: 580px) {
    flex-direction: row;
    gap: 12.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;

    > span {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
    }

    > p {
      font-size: 22px;
      line-height: 33px;
    }
  }
`;
