import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q3 = () => {
    const [isActive, setIsActive] = useState(false);

    const show = (anything) => {
        document.querySelector('.textBox').value = anything;
    };

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    return (
        <StyledWrapper>
            <StyledContainer>
                <Title>
                    <h3>
                        <span>Task 3:</span> Build a dropdown
                    </h3>
                    <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank"><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank"><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                    <Contents>
                        <DropdownContainer className={`dropdown ${isActive ? 'active' : ''}`} onClick={toggleDropdown}>
                            <DropdownInput type="text" name="" readOnly className="textBox" id="" placeholder="Dropdown" required="" />
                            <DropdownBefore />
                            <OptionContainer className="option">
                                <OptionItem onClick={() => show('Mountain')}>Mountain</OptionItem>
                                <OptionItem onClick={() => show('Forest')}>Forest</OptionItem>
                                <OptionItem onClick={() => show('Ocean')}>Ocean</OptionItem>
                                <OptionItem onClick={() => show('Desert')}>Desert</OptionItem>
                            </OptionContainer>
                        </DropdownContainer>
                    </Contents>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Q3

const StyledWrapper = styled(Wrapper)`

background: #e1e8f8;
`
const Title = styled.div`
h3{
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
const QuestionsGrid = styled.div`

`
const StyledContainer = styled(Container)`
margin-top:0;
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const Contents = styled.div`
display: flex;
justify-content: center;
min-height: 500px;
align-items: center;
`

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius : .75em;
`;

const DropdownBefore = styled.div`
  content: '';
  position: absolute;
  right: 20px;
  top: 18px;
  z-index: 1000;
  width: 8px;
  height: 8px;
  border: 2px solid #333;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(-45deg);
  transition: .5s;
  pointer-events: none;

  ${DropdownContainer}.active & {
    transform: rotate(-225deg);
    top: 22px;
  }
`;

const DropdownInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #fff;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius : .75em;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  font-size :1.25em;
`;

const OptionContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  background: #fafafa;
  box-shadow: 0 30px 30px rgba(0,0,0,0.05);
  border-radius: 10px;
  overflow: hidden;
  display: none;
  padding: 1em;

  ${DropdownContainer}.active & {
    display: block;
  }
`;

const OptionItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1.25em;
  border-radius : 12px;

  &:hover {
    background: #e1e8f8;
  }
`;
