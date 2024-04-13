import { Box, Stack, Container  } from '@mui/material'
import { categories } from '../utils/constants'
import { useTheme } from '@mui/material';


const Sidebar = ({ selected, setSelected, mode }) => {
    const theme = useTheme();

    const handleCategory = (category) => {
        setSelected(category.name)
        window.scrollTo(0, 0);
    };

    return (
        <Stack direction='row'
            sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' }, backgroundColor: mode ? 'green2019d' : 'blue2022d' }}
        >
            {categories.map((category) => (
                <button  className={mode ? 'categorias-btn2019' : 'categorias-btn2022'}
                    onClick={() => handleCategory(category)}
                    style={{
                        background: (mode && category.name === selected) ? theme.palette.green2019hover :
                            (!mode && category.name === selected) ? theme.palette.blue2022hover :undefined,
                        color: 'white'
                    }}
                    key={category.name}
                    >
                    <span style={{ marginRight: '12px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name == selected ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar