import React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import projects from '../data/projectData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
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
                    spaceBetween={20}
                    centeredSlides={false}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{ 
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        701: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1101: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
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
