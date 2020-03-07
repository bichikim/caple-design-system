import React from 'react';
import { linkTo } from '@storybook/addon-links';
import {
  Header,
  Text,
  Link
} from '../src';

export default {
  title: 'Introduce',
};

export const Default = () => {
  const components = [
    'Avatar', 
    'Badge', 
    'Breadcrumb', 
    'Button', 
    'Card', 
    'Checkbox', 
    'Collapse', 
    'Divider', 
    'Grid', 
    'Header', 
    'Icon', 
    'Input',
  ];

  return (
    <div style={{padding: 20}}>
      <Header level={2}>Styleguide</Header>
      <Text paragraph>
        Caple Design Language as its foundation, 
        the system consists of working code, 
        design tools and resources, 
        human interface guidelines by Cobalt, Inc.
      </Text>
      <ul>
        <li>
          <Link onClick={linkTo('Styleguide', 'Typography')}>Typography</Link>
        </li>
        <li>
          <Link onClick={linkTo('Styleguide', 'Color')}>Color</Link>
        </li>
        <li>
          <Link onClick={linkTo('Styleguide', 'Spacing')}>Spacing</Link>
        </li>
        <li>
          <Link onClick={linkTo('Styleguide', 'Motion')}>Motion</Link>
        </li>
        <li>
          <Link onClick={linkTo('Styleguide', 'Icon')}>Icon</Link>
        </li>
      </ul>

      <Header level={2}>Components</Header>
      <Text paragraph>
        Caple Design System UI for React components.
      </Text>
      <ul>
        {
          components.map((component, index) => (
            <li key={index}>
              <Link onClick={linkTo(component)}>{component}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};