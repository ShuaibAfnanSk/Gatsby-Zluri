import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                </Title>
                <HolderGrid>
                    <GridItem>
                        <h4>1st</h4>
                    </GridItem>
                    <GridItem>
                        <h4>2nd</h4>
                    </GridItem>
                    <GridItem>
                        <h4>3rd</h4>
                    </GridItem>
                    <GridItem>
                        <h4>4th</h4>
                    </GridItem>
                </HolderGrid>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const HolderGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-gap: 1em;

@media screen and (max-width: 1085px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  }
`

const GridItem = styled.div`
padding: 1em;
background-color: #222;
height: 300px;
border-radius: 1em;
border: 2px solid #00A5E3;
display: flex;
justify-content: center;
align-items: center;

h4 {
    fontsize: 2em;
    color: #fff;
}
`