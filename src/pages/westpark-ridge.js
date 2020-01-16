import React from 'react';
import Layout from '../components/layouts/Layout';
import WestparkridgeHook from '../hooks/contentful/properties/WestparkridgeHook';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Bold,
  P,
  H2,
} from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';

const WestParkRidge = () => {
  const data = WestparkridgeHook();
  console.log(data);
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
    <Layout>
      <Section>
        <H2>{title}</H2>
        {documentToReactComponents(json, options)}
      </Section>
    </Layout>
  );
};

export default WestParkRidge;
