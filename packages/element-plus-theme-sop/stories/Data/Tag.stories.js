import { ElTag } from 'element-plus';

export default {
  title: 'Data/Tag 标签',
  argTypes: {
    closable: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '是否可移除',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    size: {
      control: { type: 'select' },
      description: '尺寸',
      options: ['large', 'default', 'small'],
      defaultValue: 'small',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '当前只对公司设计规范定义的场景进行覆写：<br>设计规范只使用到了 `size: small` 的定义。（可以使用 element-plus 支持的其他尺寸，但是外观表现不保证协调）<br>element-plus 移除了 disabled 属性，现在要使用其他颜色的背景，请直接使用 color 属性实现',
      },
    },
  },
};

const Template = (args) => ({
  components: {
    ElTag,
  },
  setup() {
    return { args };
  },
  data() {
    return {
      list: [
        {
          name: '标签1',
        },
        {
          name: '标签2',
        },
        {
          name: '标签3',
        },
        {
          name: '标签4',
        },
      ],
    };
  },
  methods: {
    removeItem(index) {
      this.list.splice(index, 1);
    },
  },
  template: `
    <div>
      <ElTag
        v-for="(item, index) in list"
        :key="index"
        v-bind="args"
        @close="removeItem(index)"
      >
        {{ item.name }}
      </ElTag>
    </div>
  `,
});

export const Overview = Template.bind({});
