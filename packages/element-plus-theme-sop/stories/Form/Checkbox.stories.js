import { ElCheckbox, ElCheckboxGroup, ElCheckboxButton } from 'element-plus';

export default {
  title: 'Form/Checkbox 多选框',
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

export const Overview = Template.bind({});


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

export const CheckboxButtonGroup = ButtonTemplate.bind({});
