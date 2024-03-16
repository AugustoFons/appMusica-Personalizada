import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video: { id , snippet }, setIdCd, mode }) => {
    
    const handleCd = () => {
        setIdCd(snippet?.playlistId);
    };

    return (
    <Card sx={{ width: { xs: '100%', sm: '188px', md: "220px", }, boxShadow: "none", borderRadius: 0 }} onClick={handleCd}>
        <Link to={`/video/${snippet?.resourceId?.videoId}`}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                alt={snippet?.title} 
                sx={{ width: { xs: '100%', sm: '100%'}, height: 122 }} 
            />
        </Link>
        <CardContent sx={{ backgroundColor: mode ? 'green2019d' : 'blue2022d', height: '86px'}}>
            <Link to={`/video/${snippet?.resourceId?.videoId}`}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,60)}
                </Typography>
            </Link>
            <Link to={'https://www.youtube.com/@bernardoschiavi2798'}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle}
                    <CheckCircleIcon sx={{ fontSize:12, color: 'gray', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
)};

export default VideoCard