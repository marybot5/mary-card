import { html } from 'lit';
import '../src/mary-card.js';

export default {
  title: 'MaryCard',
  component: 'mary-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <mary-card
      style="--mary-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </mary-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
