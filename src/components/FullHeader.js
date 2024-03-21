import React from "react";
import styled from "styled-components";
import TextVector from '../components/TextVectors';
import TextHeader from '../components/TextHeader';

const Wrapper1 = styled.div`
    position: absolute;    
`;
const Wrapper2 = styled.div`
    position: relative;    
`;


const FullHeader = () => {
    return (
        <div>
                <Wrapper2>
                    <Wrapper1>
                        <TextHeader></TextHeader>
                    </Wrapper1> 
                    <Wrapper1>
                        <TextVector></TextVector> 
                    </Wrapper1>
                </Wrapper2>

   

                
        </div>
    )
}

export default FullHeader;

