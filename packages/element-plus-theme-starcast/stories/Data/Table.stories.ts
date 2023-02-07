import { ElTable, ElTableColumn } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElTable> = {
  title: 'Data/Table 表格',
  component: ElTable,
  args: {
    stripe: true,
  },
}

export default meta;

type Story = StoryObj<typeof ElTable>;

const defaultArgs = {
  data: [
    {
      id: 0,
      user_name: '看见网络科技（上海）有限公司',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '未生效',
    },
    {
      id: 0,
      user_name: '看见网络科技（上海）有限公司看见网络科技（上海）有限公司',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '生效中',
    },
    {
      id: 0,
      user_name: 'NeoBaran',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '已过期',
    },
  ],
};

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElTable,
      ElTableColumn,
    },
    setup() {
      return { args };
    },
    template: `
      <ElTable
        v-bind="args"
      >
        <ElTableColumn
          prop="user_name"
          label="用户名"
        />

        <ElTableColumn
          prop="user_email"
          label="账号"
        />

        <ElTableColumn
          prop="client_id"
          label="Client_ID"
        />

        <ElTableColumn
          prop="type"
          label="身份类型"
        />

        <ElTableColumn
          label="审核状态"
          prop="status"
        />
      </ElTable>
    `,
  }),
  args: defaultArgs,
};

Overview.args = {
  data: [
    {
      id: 0,
      user_name: '看见网络科技（上海）有限公司',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '未生效',
    },
    {
      id: 0,
      user_name: '看见网络科技（上海）有限公司看见网络科技（上海）有限公司',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '生效中',
    },
    {
      id: 0,
      user_name: 'NeoBaran',
      client_id: 'HW1719-J012',
      user_email: 'abc@kanjian.com',
      type: '国内大合同',
      status: '已过期',
    },
  ],
};

export const Empty: Story = {
  render: (args) => ({
    components: {
      ElTable,
      ElTableColumn,
    },
    setup() {
      return { args };
    },
    template: `
      <ElTable
        v-bind="args"
      >
        <ElTableColumn
          prop="user_name"
          label="用户名"
        />

        <ElTableColumn
          prop="user_email"
          label="账号"
        />

        <ElTableColumn
          prop="client_id"
          label="Client_ID"
        />

        <ElTableColumn
          prop="type"
          label="身份类型"
        />

        <ElTableColumn
          label="审核状态"
          prop="status"
        />
      </ElTable>
    `,
  }),
  args: {
    emptyText: '暂无数据',
    data: [],
  },
};
