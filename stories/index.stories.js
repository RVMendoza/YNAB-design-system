import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { YNABButton } from '../components/YNABComponents';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () =>
    <YNABButton variant="primary" onClick={action('clicked')}>Hello Button</YNABButton>
  )
  .add('with some emoji', () => (
    <YNABButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </YNABButton>
  ));
