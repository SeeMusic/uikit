import { ElPagination } from 'element-plus';

export default {
  title: 'Data/Pagination 分页',
  argTypes: {
    background: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: '是否使用带有背景色的分页',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '目前设计规范中， 固定使用背景色模式。',
      },
    },
  },
};

const Template = (args) => ({
  components: {
    ElPagination,
  },
  setup() {
    return { args };
  },
  data() {
    return {
      size: 20,
      total: 100,
      cur: 0,
    };
  },
  template: `
    <ElPagination
      layout="slot, prev, pager, next, jumper, sizes"
      :total="10000"
      :page-sizes="[100, 200, 300, 400]"
    >
      <span class="el-pagination__text">
        共 100 张专辑，仅显示前 500 页结果
      </span>
    </ElPagination>
  `,
});

export const Overview = Template.bind({});
