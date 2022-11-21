import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.
    backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Color Picker' />
      <div className='text-center'>
        <div
          id='preview'
        />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div className='mw-full'>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <div>
              <ColorPickerComponent
                id='inline-pallete'
                mode='Palette'
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
          <div className='mw-full'>
            <p className='text-2xl font-semibold mt-2 mb-4'>Color Pallete</p>
            <div>
              <ColorPickerComponent
                id='inline-palette'
                mode='Picker'
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker