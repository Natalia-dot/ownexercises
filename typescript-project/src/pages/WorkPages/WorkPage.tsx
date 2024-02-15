import React from 'react';
import { FullScreenDiv } from '../../components/styles/Main/FullScreenDiv';
import { FlexDiv, ProjectCard } from '../../components';
import { projects, workPageInfo } from '../../media/data';
import { useNavigate } from 'react-router-dom';
import ScrollToSectionButton from '../../components/ScrollButton';
import { title } from 'process';

export const WorkPage = () => {
  let projectList = Object.keys(projects)
  return (
    <>
      <FullScreenDiv>
        <FlexDiv $w='70vw'>
          <FlexDiv $w='50vw'>
          {workPageInfo.main}
          </FlexDiv>
          <FlexDiv $w='100%' $row $wrap='wrap' >
          <ScrollToSectionButton sectionId='technologies'> Technologies </ScrollToSectionButton> 
          <ScrollToSectionButton sectionId='projects'> Projects </ScrollToSectionButton> 
          <ScrollToSectionButton sectionId='languages'> Other Languages </ScrollToSectionButton> 
          </FlexDiv>

          <FlexDiv $small $w='100%' $row $wrap='wrap' id='technologies' >
          {workPageInfo.technologies}
          </FlexDiv>
          <FlexDiv $small $w='100%' $row $wrap='wrap' id='projects'>
          {workPageInfo.projects}
          {projectList.map((item) => (
              <ProjectCard
                key={item}
                title={projects[item].title}
                desc={projects[item].desc}
                img={projects[item].img}
                alt={projects[item].alt}
              />
            ))}
          </FlexDiv>          
          <FlexDiv $small $w='100%' $row $wrap='wrap' id='languages'>
          {workPageInfo.otherLanguages}
          </FlexDiv>
        </FlexDiv>
      </FullScreenDiv>
    </>
  );
};

