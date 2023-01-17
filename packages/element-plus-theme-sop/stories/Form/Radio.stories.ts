import { ElRadio, ElRadioGroup, ElRadioButton } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElRadio> = {
  title: 'Form/Radio 单选框',
  component: ElRadio,
  args: {
    disabled: false,
  },
}

export default meta;

type Story = StoryObj<typeof ElRadio>;

const Template = (args) => ({
  components: {
    ElRadio,
    ElRadioGroup,
  },
  data() {
    return {
      isChecked: 1,
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
      <ElRadio
        :label="1"
      >
        唱片公司或厂牌
      </ElRadio>
      <ElRadio
        :label="2"
      >
        个人工作室
      </ElRadio>
      <ElRadio
        :label="3"
      >
        版权代理机构
      </ElRadio>
    </ElRadioGroup>
  `,
});

export const RadioGroup:Story = {
  render: Template
};

const ButtonGroupTemplate = (args) => ({
  components: {
    ElRadioButton,
    ElRadioGroup,
  },
  data() {
    return {
      isChecked: 1,
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
        唱片公司或厂牌
      </ElRadioButton>
      <ElRadioButton
        :label="2"
      >
        个人工作室
      </ElRadioButton>
      <ElRadioButton
        :label="3"
      >
        版权代理机构
      </ElRadioButton>
    </ElRadioGroup>
  `,
});

export const RadioButtonGroup:Story = {
  render: ButtonGroupTemplate
};
