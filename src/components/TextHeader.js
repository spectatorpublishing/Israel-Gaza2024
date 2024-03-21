import React from "react";
import styled from "styled-components";

// const Vector = styled.div`
//     justify-content: left;
//     display: flex;
//     align-items: left;
//     padding-top: 3.813rem;
//     margin-bottom: 1.75rem;
// `;

const TextOverlay1 = styled.h1`
    font-family: Times;
    font-size: 5rem;
    color: white;
    font-weight: lighter;
    letter-spacing: 5px;
`;

const TextHeader = () => {
    return (
        <div>
            <TextOverlay1>THE ISRAEL-HAMAS</TextOverlay1>
        </div>
    )
}

export default TextHeader;

