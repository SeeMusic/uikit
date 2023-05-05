import { ElTag } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElTag> = {
  title: 'Data/Tag 标签',
  component: ElTag,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ['large', 'default', 'small']
    },
  },
  args: {
    closable: false,
    size: 'large'
  }
};

export default meta;

type Story = StoryObj<typeof ElTag>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElTag,
    },
    setup() {
      return {
        args,
      };
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
      }
    },
    methods: {
      removeItem(index) {
        this.list.splice(index, 1);
      },
    },
    template: `
      <div
        style="margin-bottom: 24px; width:200px;"
      >
        <ElTag
          v-for="(item, index) in list"
          :key="index"
          v-bind="args"
          @close="removeItem(index)"
        >
          {{ item.name }}
        </ElTag>
      </div>

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
  }),
}
