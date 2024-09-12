import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ProjectCard from './ProjectCard';
import projects from '../data/projectData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/projects-style.css'

const Projects = () => {
    const minWidth = useMediaQuery('(max-width:600px)');
    const medWidth = useMediaQuery('(min-width:601px) and (max-width:1200px)');
    const maxWidth = useMediaQuery('(min-width:1201px)');

    const itemsToShow = minWidth ? 1 : medWidth ? 2 : maxWidth ? 3 : 0;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px 20px',
                margin: '0 auto',
                minHeight: '100vh',
                gap: 2,
            }}
        >
            <Box
                sx={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '300px',
                    width: '100%',
                }}
            >
                <Typography variant="h4" component="h2" textAlign="center" >
                    My Projects
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', width: '100%', overflow: 'hidden' }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={itemsToShow}
                    centeredSlides={true}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ display: 'flex', width: '100%', maxWidth: '1200px', overflow: 'hidden', paddingBottom: '50px'}}

                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }} >
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default Projects;
