import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('Me renderize :c')
    return (
        <small>
            {value}
        </small>
    )
});

