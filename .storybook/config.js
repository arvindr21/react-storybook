import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

addDecorator(checkA11y);
addDecorator(withInfo({
  // https://github.com/storybooks/storybook/tree/master/addons/info#options-and-defaults
  header: true, 
  inline: false,
  source: true,

}));

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
