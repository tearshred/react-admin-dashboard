import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  border: 0;
  outline: 0;
  ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid black;    
    background: ${props => (props.currentColor)};
  `}
  ${({ isHover }) => isHover && `
  opacity: 0.5;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

// const types = ['Q1', 'Q2', 'Q3', 'Q4'];

const Tabs = ({ types, currentColor, className }) => {
    const [active, setActive] = useState(types[0]);

    const [Hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };

    const boxStyle = {
        //...
        backgroundColor: Hover ? 'black' : currentColor,
    };

    return (
        <>
            <div className='flex flex-row justify-between w-full'>
                {types.map(type => (
                    <Tab
                        className={className}
                        style={{ backgroundColor: currentColor }}
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        <div
                            className='w-full p-2'
                        >
                            {type}
                        </div>
                    </Tab>
                ))}
            </div>
        </>
    );
}

export default Tabs