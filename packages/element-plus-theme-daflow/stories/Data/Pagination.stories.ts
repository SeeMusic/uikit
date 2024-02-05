import { ElPagination } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElPagination> = {
  title: 'Data/Pagination 分页',
  component: ElPagination,
  args: {
    background: true
  }
};

export default meta;

type Story = StoryObj<typeof ElPagination>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElPagination
    },
    setup() {
      return { args };
    },
    template: `
      <ElPagination
        v-bind="args"
        layout="slot, prev, pager, next, jumper, sizes"
        :total="10000"
        :page-sizes="[100, 200, 300, 400]"
      >
        <span class="el-pagination__text">
          Total: 1000
        </span>
      </ElPagination>
    `
  })
};

