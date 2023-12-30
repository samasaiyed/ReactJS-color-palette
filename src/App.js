import './App.css';
import tinycolor from 'tinycolor2';
import React, {useState} from 'react';

function App() {
  const [baseColor, setBaseColor] = useState('#3498db');
  const [colorPalette, setColorPalette] = useState([]);

  const GeneratePalette = () => {
    const palette = [];
    const base = tinycolor(baseColor);

    for(let i = 0 ; i < 5 ; i++){
      palette.push({
      color: base.clone().brighten(i * 10).toString()
    });
    
    };

    setColorPalette(palette);
  };
  return (
    <div className="App">
      <h1> Color Palette Generator </h1>
      <div className='container'>
          <input 
            type='color' 
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
          />

          <div className='btn'>
            <button onClick={GeneratePalette}> Generate palette </button>
          </div>

          <div className='palette'>
            {colorPalette.map((color, index) => (
              <>
              <div 
                key={index}
                className={`color-box 
                  ${
                    tinycolor(color.color).isDark() ? 
                      'light-text' 
                    : 
                      'dark-text'}`}
                style={{backgroundColor: color.color}}  
              > 
                {color.color}
              </div>    
              </>
            ))}
          
          </div>
      </div>
      
    </div>
  )
}

export default App;
