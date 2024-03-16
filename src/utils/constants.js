//iconos, logo, categorias...
import KayakingIcon from '@mui/icons-material/Kayaking';
import AlbumIcon from '@mui/icons-material/Album';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BookIcon from '@mui/icons-material/Book';
import RecommendIcon from '@mui/icons-material/Recommend';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export const logo = 'https://res.cloudinary.com/ddgzljvfv/image/upload/v1697934842/logo-bernar_uy8kj5.png';
export const logo2022 = 'https://res.cloudinary.com/ddgzljvfv/image/upload/v1710446603/Untitled_Project__1_-removebg-preview_oid6ed.png';
export const navImg1 = 'https://res.cloudinary.com/ddgzljvfv/image/upload/v1697948135/1-_Capital_del_Carnaval._kfcu9z.jpg'

export const categories = [
    { name: 'Bio', icon: <KayakingIcon />, iconFeed: <KayakingIcon fontSize='large' />, search: 'Bernardo Schiavi'  },
    { name: 'Discografia', icon: <AlbumIcon />, iconFeed: <AlbumIcon fontSize='large' />, search: 'Bernardo Schiavi Ni Loco'  },
    { name: 'Lanzamientos', icon: <NewReleasesIcon />, iconFeed: <NewReleasesIcon fontSize='large' />, search: 'Bernardo Schiavi'},
    { name: 'Proximamente', icon: <QueuePlayNextIcon />, iconFeed: <QueuePlayNextIcon fontSize='large' />, search: 'Bernardo Schiavi'},
    { name: 'Playlists', icon: <QueueMusicIcon />, iconFeed: <QueueMusicIcon fontSize='large' />, search: 'Bernardo Schiavi Ay Sueño'},
    { name: 'Blog', icon: <BookIcon />, iconFeed: <BookIcon fontSize='large' />, search: 'Bernardo Schiavi'},
    { name: 'Redes', icon: <RecommendIcon />, iconFeed: <RecommendIcon fontSize='large' />, search: 'Bernardo Schiavi'},
    { name: 'Colaborar', icon: <CurrencyExchangeIcon />, iconFeed: <CurrencyExchangeIcon fontSize='large' />, search: 'Bernardo Schiavi Ni Loco'}
];