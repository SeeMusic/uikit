// @todo 边界问题
// 多选选中后展示的 ElTag 数量很多时，会折行。
// 当前用 .el-tag + .el-tag 控制左边距，导致换行的第一个元素左边有空白
// 可以参考 element 的写法，改成全部右边距，但是同级的 last-child 元素 margin-right 归 0 的写法

import { ElSelect, ElOption } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElSelect> = {
  title: 'Form/Select 选择器',
  component: ElSelect,
  args: {
    disabled: false,
    size: 'large'
  }
};

export default meta;

type Story = StoryObj<typeof ElSelect>;

const Template = (args) => ({
  components: {
    ElSelect,
    ElOption
  },
  data() {
    return {
      optionArea: '',
      options: [
        {
          value: '6',
          label: '阿尔巴尼亚'
        },
        {
          value: '7',
          label: '安道尔'
        },
        {
          value: '8',
          label: '奥地利'
        },
        {
          value: '9',
          label: '澳大利亚'
        },
        {
          value: '10',
          label: '阿尔及利亚'
        },
        {
          value: '11',
          label: '苏维埃共和国苏维埃共和国'
        }
      ]
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElSelect
      v-model="optionArea"
      v-bind="args"
      placeholder="请选择"
      :popper-options="{
        modifiers:[
          {
            name: 'offset',
            options: {
              offset: [0, 0],
            }
          }
        ]
      }"
    >
      <ElOption
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
  `
});

export const Overview:Story = {
  render: Template
};


export const MultipleSelect:Story = {
  render: Template,
  args: {
    multiple: true,
    collapseTags: true,
    collapseTagsTooltip: true
  }
};
