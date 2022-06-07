import { ElRadio, ElRadioGroup, ElRadioButton } from 'element-plus';

export default {
  title: 'Form/Radio 单选框',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '禁用',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

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

export const RadioGroup = Template.bind({});

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

export const RadioButtonGroup = ButtonGroupTemplate.bind({});
