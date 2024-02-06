import React from 'react';
import { FullScreenDiv } from '../../components/styles/Main/FullScreenDiv';
import { FlexDiv } from '../../components';
import { workPageInfo } from '../../media/data';

export const WorkPage = () => {
  return (
    <>
      <FullScreenDiv>
        <FlexDiv>
          {workPageInfo.main}
          {workPageInfo.technologies}
          {workPageInfo.projects}
        </FlexDiv>
      </FullScreenDiv>
    </>
  );
};
