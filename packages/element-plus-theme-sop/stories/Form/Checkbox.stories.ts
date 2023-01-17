import { ElCheckbox, ElCheckboxGroup, ElCheckboxButton } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElCheckbox> = {
  title: 'Form/Checkbox 多选框',
  component: ElCheckbox,
  args: {
    disabled: false,
  },
}

export default meta;

type Story = StoryObj<typeof ElCheckbox>;

const Template = (args) => ({
  components: {
    ElCheckboxGroup,
    ElCheckbox,
  },
  data() {
    return {
      checkedlist: [1],
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElCheckboxGroup
      v-model="checkedlist"
      v-bind="args"
    >
      <ElCheckbox
        :label="1"
      >
        唱片公司或厂牌
      </ElCheckbox>
      <ElCheckbox
        :label="2"
      >
        个人工作室
      </ElCheckbox>
      <ElCheckbox
        :label="3"
      >
        版权代理机构
      </ElCheckbox>
    </ElCheckboxGroup>
  `,
});

export const Overview:Story = {
  render: Template
};


const ButtonTemplate = (args) => ({
  components: {
    ElCheckboxGroup,
    ElCheckboxButton,
  },
  data() {
    return {
      checkedlist: [1],
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElCheckboxGroup
      v-model="checkedlist"
      v-bind="args"
    >
      <ElCheckboxButton
        :label="1"
      >
        唱片公司或厂牌
      </ElCheckboxButton>
      <ElCheckboxButton
        :label="2"
      >
        个人工作室
      </ElCheckboxButton>
      <ElCheckboxButton
        :label="3"
      >
        版权代理机构
      </ElCheckboxButton>
    </ElCheckboxGroup>
  `,
});

export const CheckboxButtonGroup:Story = {
  render: ButtonTemplate
};
