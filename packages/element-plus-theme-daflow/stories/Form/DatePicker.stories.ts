import { ElDatePicker } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElDatePicker> = {
  title: 'Form/DatePicker 日期选择器',
  component: ElDatePicker,
}

export default meta;

type Story = StoryObj<typeof ElDatePicker>;

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
    <div>
      <ElDatePicker
        v-model="basic"
      />
      <p>{{ basic }}</p>
    </div>
  `,
});

export const Basic:Story = {
  render: Template,
}

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
    <div>
      <ElDatePicker
        v-model="range"
        type="daterange"
        range-separator="～"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      <p>{{ range }}</p>
    </div>
  `,
});


export const DateRange:Story = {
  render: DateRangeTemplate,
}
