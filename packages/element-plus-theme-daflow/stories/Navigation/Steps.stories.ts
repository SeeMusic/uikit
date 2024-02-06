import { ElSteps, ElStep } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElSteps> = {
  title: 'Navigation/Steps 步骤条',
  component: ElSteps,
  argTypes: {
    // type: {
    //   description: '类型',
    //   control: { type: 'select' },
    //   options: ['card', '']
    // }
  },
  args: {
    simple: true
    // type: 'card'
  }
};

export default meta;

type Story = StoryObj<typeof ElSteps>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElSteps,
      ElStep
    },
    setup() {
      return { args };
    },
    data() {
      return {
        active: 1
      };
    },
    template: `
      <ElSteps
        :active="active"
        v-bind="args"
        finish-status="success"
        align-center
      >
        <ElStep
          title="1. Upload"
        />

        <ElStep
          title="2. Release"
        />

        <ElStep
          title="3. Finish"
        />
      </ElSteps>
    `
  })
};
