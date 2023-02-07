import { ElInputNumber } from 'element-plus';

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElInputNumber> = {
  title: 'Form/Input Number 数字输入框',
  component: ElInputNumber,
  argTypes: {
    size: {
      options: ['large', 'default', 'small'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    controls: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
    controls: true,
    size: 'default'
  }
}

export default meta;

type Story = StoryObj<typeof ElInputNumber>;

const CommonRender = (args) => ({
  components: {
    ElInputNumber,
  },
  data() {
    return {
      value: 0,
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElInputNumber
      v-model="value"
      v-bind="args"
    />
  `,
});

export const Overview:Story = {
  render: CommonRender,
}
