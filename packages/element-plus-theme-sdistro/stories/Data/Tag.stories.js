import { ElTag } from 'element-plus';
// import TagMD from './Tag.md';

export default {
  title: 'Data/Tag 标签',
  argTypes: {
    closable: {
      control: { type: 'boolean' },
      // defaultValue: false,
      // description: '是否可移除',
      // table: {
      //   type: {
      //     summary: 'boolean',
      //   },
      //   defaultValue: {
      //     summary: 'false',
      //   },
      // },
    },
    effect: {
      description: '主题，仅支持 light，不设即可',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'light',
        },
      },
    },
    type: {
      description: '类型，仅支持缺省空值，不设即可',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    size: {
      description: '尺寸，仅支持缺省空值，不设即可',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        // component: TagMD,
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
      >
        {{ item.name }}
      </ElTag>
    </div>
  `,
});

export const Overview = Template.bind({});
// Overview.args = {
// }

// export const Closable = Template.bind({});
// Closable.args = {
//   closable: true,
// };

// Closable.argTypes = {
//   closable: {
//     control: false,
//   },
// };
