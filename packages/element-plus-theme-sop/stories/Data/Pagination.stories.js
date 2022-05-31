import { ElPagination } from 'element-plus';

export default {
  title: 'Data/Pagination 分页',
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
      background
    >
      <span class="el-pagination__text">
        共 100 张专辑，仅显示前 500 页结果
      </span>
    </ElPagination>
  `,
});

export const Overview = Template.bind({});
