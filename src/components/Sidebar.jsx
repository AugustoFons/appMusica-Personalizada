import { Box, Stack } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({selected, setSelected}) => {

  const handleCategory = (category) => {
    setSelected(category.name)
  };

  return (
    <Stack direction='row' 
      sx={{overflowY:'auto', height: {sx:'auto', md:'95%'}, flexDirection: {md: 'column'}, backgroundColor: 'green2019d'}}
    >
      {categories.map((category) => (
        <button className='category-btn'
          onClick={() => handleCategory(category)}
          style={{
            background: category.name == selected && '#CBCF88',
            color: 'white'
          }}
          key={category.name}
        >
          <span style={{marginRight: '12px'}}>{category.icon}</span>
          <span style={{ opacity: category.name == selected ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar