import React from 'react';
import { useHistory } from 'react-router-dom';
import { VideoCardGroupContainer, Title, ExtraLink, Button } from './styles';
import VideoCard from './components/VideoCard';
import config from '../../config';


import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  const history = useHistory();

  async function handleDeleteVideo(id) {
    
    const response = await fetch(`${config.URL_BACKEND_TOP}/videos/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        console.log('Video removido.');
        history.go(0);
      });
      console.log(response);
  } 
  

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.id}>
              
              <Button
              onClick={() => handleDeleteVideo(video.id)}
              >
                x
              </Button>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
