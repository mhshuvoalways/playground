import styled from "styled-components";
import styles from "./home.module.scss";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const index = () => {
  return (
    <>
      <Title>I am style</Title>
      <h1 className={styles.primarycss}>I am scss</h1>
    </>
  );
};

export default index;
