# @seemusic/element-plus-theme-starcast

星球发行 前台 自定义 Element Plus 皮肤

本项目只包含当前公司设计规范中涉及到的组件（及组件子功能）的样式， **不会去做全功能兼容**

## 关于版本
Element Plus **经常** 会在版本更迭时 **破坏性** 的改变样式实现方式，这给自定义皮肤的使用带来了不少困扰，比如升级了 Element Plus，但是由于皮肤和组件库版本不匹配导致样式出问题。

基于这些情况，本项目发布时的版本号更迭，遵循以下规则：
* 和开发时使用的 Element Plus 版本号保持一致，如 `2.2.4`
* **不保证** 兼容所有 Element Plus 版本，即可能 `2.2.4` 的下一个版本为 `2.2.7`
* 如果某版本的实现有 BUG，可能会发布类似 `2.2.4-rc.1` 格式的版本去做修正（主版本和使用的 Element Plus 版本保持一致更重要）

这样，使用者可以通过版本号，清晰的知道本项目的适配范围。

## 本地预览

```
npm run storybook
```

## 支持组件列表

- [x] Button
- [ ] Cascader
- [x] Checkbox
- [x] CheckboxButton
- [x] CheckboxGroup
- [ ] DatePicker
- [x] Dialog
- [x] Drawer
- [x] Form
- [x] Input
- [x] Message
- [ ] Option
- [x] Pagination
- [x] Popconfirm
- [x] Popover
- [x] Radio
- [x] RadioButton
- [x] RadioGroup
- [ ] Select
- [x] Table
- [x] Tabs
- [x] Tag