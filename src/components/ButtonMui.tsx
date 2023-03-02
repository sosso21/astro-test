 

import Box from '@mui/material/Box';
 
import Button from '@mui/material/Button'; 

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';






type View = 'stock' | 'rating';


export const ButtonReact =() => {
    
  const [view, setView] = useState<View>('stock');

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        


        <ToggleButtonGroup
          style={{ position: 'absolute', top: 0 }}
          color="primary"
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
        >
          <ToggleButton value="stock">Stock</ToggleButton>
          <ToggleButton value="rating">Rating</ToggleButton>
        </ToggleButtonGroup>


      </div> 
    </Box>
  );
}