<template>
  <div :style="{ height: '908px', width: '100%' }">
    <antd-generate-form ref="generateFormRef" :data="widgetForm">
      <slot><a-button type="primary" @click="handleSubmit">查询</a-button></slot>
    </antd-generate-form>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  import { defineComponent, reactive, toRefs } from 'vue';
  import { AntdGenerateForm } from 'vue-form-create';
  export default defineComponent({
    name: 'Luru',
    components: { AntdGenerateForm },
    setup() {
      const state = reactive({
        generateFormRef: null,
        widgetForm: {
          list: [
            {
              label: '月份',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: 'e0def61848bb4c90a4230b03f601baf0',
              model: 'month',
              rules: [],
            },
            {
              label: '案件来源',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: 'c85a048b234f42359082c3fa6c7878ed',
              model: 'source',
              rules: [],
            },
            {
              label: '处理结果',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: 'fa07b21f4c94436a94f0dba6f6966250',
              model: 'end',
              rules: [],
            },
            {
              label: '案件标签',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: 'b4428a2ea18248dab5eb5dc71b458875',
              model: 'tag',
              rules: [],
            },
            {
              label: '所、处裁',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: '00e97ef062054f50bfe7ab948e206f85',
              model: 'suocai',
              rules: [],
            },
            {
              label: '案由',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: 'd868909dfe224a64bf64f13dcc01fd37',
              model: 'why',
              rules: [],
            },
            {
              label: '各所队',
              type: 'select',
              options: {
                defaultValue: [],
                width: '200px',
                mode: null,
                placeholder: '',
                remote: false,
                showLabel: false,
                showSearch: false,
                clearable: false,
                disabled: false,
                props: { label: 'label', value: 'value' },
                options: [
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ],
                remoteOptions: [],
                remoteFunc:
                  'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                rules: {
                  trigger: 'blur',
                  enum: '',
                  message: '',
                  pattern: '',
                  required: false,
                  type: 'any',
                },
              },
              key: '945b60dbb4ac4656b2e598c4ddb45e18',
              model: 'suodui',
              rules: [],
            },
          ],
          config: {
            size: 'default',
            hideRequiredMark: false,
            layout: 'vertical',
            labelAlign: 'right',
            labelCol: { span: 0, offset: 0 },
          },
        },
      });

      const handleSubmit = () => {
        state.generateFormRef
          .getData()
          .then((data) => {
            console.log(data);
            // data success
            // data 表单数据
          })
          .catch(() => {
            // data failed
          });
      };

      return {
        ...toRefs(state),
        handleSubmit,
      };
    },
  });
</script>
