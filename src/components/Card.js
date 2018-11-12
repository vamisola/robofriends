import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-pink dib br3 pa3 ma2 grow bw2 shaddow-5'>
            <img alt = "robots"
            src = {
                `https://robohash.org/${id}?100x100?`
            }
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;