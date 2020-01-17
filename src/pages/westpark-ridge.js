import React from 'react';

import LayoutWestRidge from '../components/layouts/LayoutWestRidge';

import WestparkridgeHook from '../hooks/contentful/properties/WestparkridgeHook';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Bold,
  P,

} from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';
import LayoutComponent1 from '../components/reusableStyles/propertySectionLayouts/LayoutComponent1';

const WestParkRidge = () => {
  const data = WestparkridgeHook();
  console.log(data.pictures);
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  // pulling out variables from the section
  const {
    title,
    subtitle,
    description: { json },
    pictures,
  } = data;

  const RTFBold = ({ children }) => <Bold>{children}</Bold>;
  const Text = ({ children }) => <P>{children}</P>;


  return (
    <LayoutWestRidge>
      <Section style = {{paddingTop: '1rem'}}>
        <LayoutComponent1 title = {title} subtitle = {subtitle} pictures = {pictures} />
      

     
      </Section>
    
    </LayoutWestRidge>
  );
};

export default WestParkRidge;
