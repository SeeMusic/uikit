import { ElDatePicker } from 'element-plus';

// 奇怪的设定：
// 单日期的数据，不指定 value-format 的话是 JS Date 对象，一般和后端交互需要转 ISO.
// 范围数据的数组，里面的起止时间则是已经格式化好的 ISO 8601 字符串
// 另外，JSON.stringify(value) 即可得出 ISO 8601 格式，但是还是建议用 dayjs
export default {
  title: 'Form/DatePicker 日期选择器',
};

const Template = (args) => ({
  components: {
    ElDatePicker,
  },
  data() {
    return {
      basic: '',
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElDatePicker
      v-model="basic"
      :prefix-icon="null"
    />
  `,
});

export const Basic = Template.bind({});

const DateRangeTemplate = (args) => ({
  components: {
    ElDatePicker,
  },
  data() {
    return {
      range: [],
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElDatePicker
      v-model="range"
      type="daterange"
      range-separator="～"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
  `,
});

export const DateRange = DateRangeTemplate.bind({});
