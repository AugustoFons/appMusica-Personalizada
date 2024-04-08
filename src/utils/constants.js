//iconos, logo, categorias...
import KayakingIcon from '@mui/icons-material/Kayaking';
import AlbumIcon from '@mui/icons-material/Album';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BookIcon from '@mui/icons-material/Book';
import RecommendIcon from '@mui/icons-material/Recommend';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Papa from 'papaparse';

export const logo = 'https://res.cloudinary.com/ddgzljvfv/image/upload/v1697934842/logo-bernar_uy8kj5.png';
export const logo2022 = 'https://res.cloudinary.com/ddgzljvfv/image/upload/v1710446603/Untitled_Project__1_-removebg-preview_oid6ed.png';

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

export const DataBlog = async () => {
    try {
        const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS46Pc6kuSNeAeFYutkS0okAilbNfUztutHsDfp2Igz5DDCgh-oYdB00FLj5xS4x6H-vEJ_MOw0QrZw/pub?gid=0&single=true&output=csv');
        const csv = await res.text();
        console.log(csv)
        
        const { data } = Papa.parse(csv, { header: true });

        // Procesar cada fila del CSV
        const itemBlog = data.map(row => {
            const titulo = row['titulo'] ? row['titulo'].trim() : '';
            const fecha = row['fecha'] ? row['fecha'].trim() : '';
            const texto = row['texto'] ? row['texto'].trim() : '';
            const primerLetra = texto.substring(0, 1);
            const resaltado = texto.substring(1, 14);

            return { titulo, fecha, texto, primerLetra, resaltado };
        });

        return itemBlog;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error;
    }
};



/*         const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS46Pc6kuSNeAeFYutkS0okAilbNfUztutHsDfp2Igz5DDCgh-oYdB00FLj5xS4x6H-vEJ_MOw0QrZw/pub?gid=0&single=true&output=csv');
        const csv = await res.text();
        console.log(csv)
        const itemBlog = csv
        .split("\n")
        .slice(1)
        .map((row) => {
            const columns = row.split(",");
            
            const titulo = columns[0] ? columns[0].trim() : '';
            const fecha = columns[1] ? columns[1].trim() : '';
            const texto = columns[2] ? columns.slice(2).join(",").trim() : '';
            const primerLetra = texto.substring(1, 2);
            const resaltado = texto.substring(2, 14);
            return { titulo, fecha, texto, primerLetra, resaltado };
        });
        return itemBlog; */