import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGauge = ({ value, stroke, className }) => {

    const calcColor = (percent, start, end) => {
        let a = percent / 100,
        b = (end - start) * a,
        c = b + start;

        // Return a CSS hsl color string
        return 'hsl(' + c + ', 100%, 50%)'
    }

    return (

        <CircularProgressbar
            className={className}
            value={value}
            text={`${value} %`}
            circleRatio={0.7}
            styles={{
                trail: {
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center'
                },
                path: {
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: stroke
                },
                text: {
                    fill: '#ddd'
                }
            }}
            strokeWidth={10}
        />
    )
}

export default CircularGauge