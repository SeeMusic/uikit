import { ElCascader } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElCascader> = {
  title: 'Form/Cascader 级联菜单',
  component: ElCascader,
  args: {
    disabled: false,
  },
}

export default meta;

type Story = StoryObj<typeof ElCascader>;


// const groupOptions = [
//   {
//     label: '热门国家 / 地区',
//     options: [
//       {
//         value: 'Shanghai',
//         label: '上海',
//       },
//       {
//         value: 'Beijing',
//         label: '北京',
//       },
//     ],
//   },
//   {
//     label: 'A',
//     options: [
//       {
//         value: '1',
//         label: '阿尔巴尼亚',
//       },
//       {
//         value: '2',
//         label: '安道尔',
//       },
//       {
//         value: '3',
//         label: '奥地利',
//       },
//       {
//         value: '4',
//         label: '澳大利亚',
//       },
//       {
//         value: '5',
//         label: '阿尔及利亚',
//       },
//     ],
//   },
//   {
//     label: 'B',
//     options: [
//       {
//         value: '6',
//         label: '巴西',
//       },
//       {
//         value: '7',
//         label: '巴林',
//       },
//       {
//         value: '8',
//         label: '白俄罗斯',
//       },
//       {
//         value: '9',
//         label: '比利时',
//       },
//       {
//         value: '10',
//         label: '玻利维亚',
//       },
//       {
//         value: '11',
//         label: '荷兰加勒比区',
//       },
//       {
//         value: '12',
//         label: '英属维尔京群岛',
//       },
//     ],
//   },
// ];

const Template = (args) => ({
  components: {
    ElCascader,
  },
  data() {
    return {
      optionArea: [],
      options: [
        {
          value: 'Asia',
          label: '亚洲',
          children: [
            {
              value: 'cn',
              label: '中国',
            },
            {
              value: 'kr',
              label: '韩国',
            },
            {
              value: 'jp',
              label: '日本',
            },
          ]
        },
        {
          value: 'South America',
          label: '安道尔',
          children: [
            {
              value: 'br',
              label: '巴西',
            },
            {
              value: 'mx',
              label: '墨西哥',
            },
          ]
        },
      ],
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElCascader
      v-model="optionArea"
      :options="options"
      :props="{
        checkStrictly: true,
      }"
      placeholder="请选择"
    />
  `,
});

export const Overview:Story = {
  render: Template,
};
