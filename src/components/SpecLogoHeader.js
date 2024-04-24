import React from "react";
import styled from "styled-components";

const SpecLogo = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top: 0;
    margin-bottom: 0;
`;

const Image = styled.img`
    display: block;
    width: 35rem;
    height: auto;
    @media only screen and (max-width: 768px){
        width: 17.5rem;
    }
    @media only screen and (max-width: 600px){
        width: 15rem;
    }
`;

const SpecLogoHeader = () => {
    return (
        <div>
            <SpecLogo><a href="https://www.columbiaspectator.com/"><Image src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator logo" ></Image></a></SpecLogo>
        </div>
    )
}

export default SpecLogoHeader;