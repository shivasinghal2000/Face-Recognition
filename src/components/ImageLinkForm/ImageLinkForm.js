import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {
          'This Magic Brain Will Detect Faces in Uploaded Picture. Give It A Try..!!'
        }
      </p>
      <div className='center '>
        <div className=' pa4 br4 shadow-5' class='form'>
          <input
            className='f4 mt3 pa2 w-70 br4 center'
            type='tex'
            onChange={onInputChange}
          />
          <button
            className='w-30 mt1 mb3 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  )
};

export default ImageLinkForm
