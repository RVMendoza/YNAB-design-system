import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { YNABButton } from '../components/YNABComponents';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Primary', () =>
    <YNABButton variant="primary">Button</YNABButton>
  )

  .add('Hollow On Dark', () => (
    <div
      sx={{
        backgroundColor: `main.dark`,
        p: 3,
      }}
    >
      <YNABButton variant="hollowOnDark">Button</YNABButton>
    </div>
  ))

  .add('Hollow On Light', () =>
    <div
      sx={{
        backgroundColor: `main.white`,
      }}
    >
      <YNABButton variant="hollowOnLight">Button</YNABButton>
    </div>
  )

  ;
