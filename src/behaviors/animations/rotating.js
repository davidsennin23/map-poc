import styled, { keyframes } from 'styled-components';
import React from 'react';

const rotationKeyframe = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`
function getDuration(rotationsPerSecond) {
    return 1/rotationsPerSecond;
}

function getRotationDiv(rotationsPerSecond) {

    return styled.div`
        position: relative;
        animation: ${rotationKeyframe} ${getDuration(rotationsPerSecond)}s linear 0s infinite;
        width: auto;
    `;

}

// function returnDisplay(RotationDiv, content) {
//     return <RotationDiv> {content} </RotationDiv>
// }

const rotation = (rotatiosPerSecond) =>
        (content) => class extends React.Component {
            
            contentRef = (node) => {
                if (!node) return;
                this.contentNode = node;
            }

            render() {
                const width = this.contentNode ? `${this.contentNode.offsetWidth}px` : 'auto';
                const height = this.contentNode ? `${this.contentNode.offsetHeight}px` : 'auto';
                const Div = getRotationDiv(rotatiosPerSecond);
                return (
                    <Div style={{width, height}}>
                        {React.cloneElement(
                            content,
                            {
                                ref: this.contentRef
                            }
                        )}
                    </Div>
                )
                // return returnDisplay(, content)
            }
        }
            

export default rotation;
