import React from 'react'

const imageHelper = ({product}) => {
    const imageUrl = product ? product.image
    : `https://www.pexels.com/photo/2519813/`
    return (
        <div className='rounded border boder-success p-2'>
            <img src={imageUrl}
            style={{ maxHeight:'100%', maxWidth:'100%' }}
            className='mb-3 rounded'
            alt=''/>
            
        </div>
    )
}


export default imageHelper