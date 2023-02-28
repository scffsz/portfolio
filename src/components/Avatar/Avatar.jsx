import React from 'react'

import './Avatar.scss'

/**
 * @param {number} width
 * @param {number} height
 * @param {string} borderRadius
 * @param {string} src
 * @param {boolean} isHexagon
 * @param {number} hexagonHeight
 * @param {number} imageLeft
*/

const Avatar = ({width, height, borderRadius, src, isHexagon, hexagonHeight, imageLeft}) => (
    <>
        {
            isHexagon ?
                <div className='hexagon' style={{
                    width: `${hexagonHeight * 0.645}px`,
                    height: `${hexagonHeight}px`,
                    borderRadius: hexagonHeight / 10
                }}>
                    <img style={{
                        position: 'absolute',
                        width: `${width}px`,
                        height:`${height}px`,
                        zIndex: '1',
                        clipPath: 'polygon(48.74% -1.54%, 94.7% 24.2%, 95.16% 76.05%, 50.4% 102.17%, 6.34% 75.5%, 6.08% 23.57%)',
                        borderRadius: '100%',
                        left: `${imageLeft}px`,
                    }}
                         src={src}
                         alt='ava'
                         className='image'
                    />
                </div>
                :
                <img style={{
                    width: `${width}px`,
                    height:`${height}px`,
                    borderRadius: `${borderRadius}`,
                }}
                     src={src}
                     alt='ava'
                />
        }
    </>
);

export default Avatar