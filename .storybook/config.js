import { configure, addDecorator } from '@storybook/react';
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import Theme from './theme'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const ThemeDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);

