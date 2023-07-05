import React from "react";
import styled from 'styled-components';
import { Container } from "./style";

const S5 = () => {
    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
            </Title>

            <CardsHolder>
                <Card>
                    <CardHead>
                        <h3>Growth</h3>
                        <p>Discover & manage all your apps in one place</p>
                    </CardHead>
                    <CardButton>Contact Sales</CardButton>
                    <CardTail>
                        <p>Complete Saas discovery</p>
                        <p>Unlimited App integration</p>
                        <p>Unlimited financial integrations</p>
                        <p>Complete user and app management</p>
                        <p>All financial transaction</p>
                        <p>Basic Reports</p>
                    </CardTail>
                </Card>
                <Card>
                    <CardHead>
                        <h3>Scale</h3>
                        <p>Complete SaaS optimization by leveraging license management & financial intelligence</p>
                    </CardHead>
                    <CardButton>Contact Sales</CardButton>
                    <CardTail>
                        <p>Complete license management</p>
                        <p>Complete vendor & renewal management</p>
                        <p>Cost optimization insights</p>
                        <p>Budgeting & chargebacks</p>
                        <p>Advanced Reports</p>
                    </CardTail>
                </Card>
                <Card>
                    <CardHead>
                        <h3>Enterprise</h3>
                        <p>Powerful automations, advanced security & access control that deliver robust & streamlined SaaSOps</p>
                    </CardHead>
                    <CardButton>Contact Sales</CardButton>
                    <CardTail>
                        <p>Workflow Automations</p>
                        <p>Employee App Store</p>
                        <p>Security and Compliance</p>
                        <p>Dedicated account manager</p>
                        <p>Audit logs</p>
                        <p>Custom reports</p>
                    </CardTail>
                </Card>
            </CardsHolder>
        </Container>
    )
}

export default S5

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
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`

const CardsHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2em;
min-height: 100vh; 
`

const Card = styled.div`
width: 400px;
background: #fff;
padding: 2em;
display: flex;
flex-direction: column;
height: 550px;
border-radius: 1em;
gap: 2em;

&:nth-child(1) {
    background: #cbffee;
}

  &:nth-child(2) {
    background: #ffeeb9;
    position: relative;
    border-radius: 0em 0em 1em 1em;
}

&:nth-child(2)::before {
    position: absolute;
    top: -40px;
    content: 'Most Popular';
    left: 0;
    background: #ffce70;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em 1em 0em 0em;
}

  &:nth-child(3) {
    background: #c9e8ff;
}
`

const CardHead = styled.div`
display: flex;
flex-direction: column;

h3 {
    font-size : 2em;
    text-transform : uppercase;
    font-weight: bold;
    line-height: 0px;
}

p {
    font-size: 1.2em;
}
`

const CardTail = styled.div`
display: flex;
flex-direction: column;

p {
    line-height: 0px;
    position: relative;
    margin-left: 2em;
}

p::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #222;
    top: -5px;
    left: -30px;
}
`

const CardButton = styled.div`
width: fit-content;
padding: 1em;
height: 50px;
border-radius: 2em;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.15em;
border: 1px solid rgba(0,0,0,0.3);
`
