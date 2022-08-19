import React from 'react'

const ColorPicker = () => {
  return (
    <div
    w="50px"
    h="50px"
    bg={color}
    borderRadius="3xl"
    onClick={() => inputRef.current.click()}
  >
    <input
      type="color"
      value={color}
      onChange={handleColorChange}
      ref={inputRef}
      hidden
    />
  </div>
  )
}

export default ColorPicker