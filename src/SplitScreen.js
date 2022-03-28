import styled from "styled-components";

export const SplitScreen = ({ children, leftSize, rightSize }) => {
  const Container = styled.div`
    display: flex;
  `;

  const LeftSide = styled.div`
    flex: ${leftSize};
  `;

  const RightSide = styled.div`
    flex: ${rightSize};
  `;

  const [leftChild, rightChild] = children;
  return (
    <>
      <Container>
        <LeftSide>{leftChild}</LeftSide>
        <RightSide>{rightChild}</RightSide>
      </Container>
    </>
  );
};
