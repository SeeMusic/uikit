import { ElRadio, ElRadioGroup, ElRadioButton } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElRadio> = {
  title: 'Form/Radio 单选框',
  component: ElRadio,
  argTypes: {
    size: {
      options: ['large', 'normal', 'small'],
      control: {
        type: 'radio'
      }
    }
  },
  args: {
    disabled: false,
    size: 'large'
  }
};

export default meta;

type Story = StoryObj<typeof ElRadio>;

const ButtonGroupTemplate = (args) => ({
  components: {
    ElRadioButton,
    ElRadioGroup
  },
  data() {
    return {
      isChecked: 1
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElRadioGroup
      v-model="isChecked"
      v-bind="args"
    >
      <ElRadioButton
        :label="1"
      >
        Option A
      </ElRadioButton>
      <ElRadioButton
        :label="2"
      >
        Option b
      </ElRadioButton>
      <ElRadioButton
        :label="3"
      >
        Option C
      </ElRadioButton>
    </ElRadioGroup>
  `
});

export const RadioButtonGroup:Story = {
  render: ButtonGroupTemplate
};
