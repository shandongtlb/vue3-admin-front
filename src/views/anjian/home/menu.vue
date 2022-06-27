<template>
  <div :style="{ height: '20px', width: '100%' }">
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
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 4,
                  list: [
                    {
                      label: '案件分析条件：',
                      type: 'date',
                      options: {
                        defaultValue: '',
                        width: '150px',
                        placeholder: '请选择时间',
                        format: 'YYYY-MM-DD',
                        readonly: false,
                        allowClear: true,
                        disabled: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '8f84089f5fc0490cae85b8153a906ffa',
                      model: 'date_8f84089f5fc0490cae85b8153a906ffa',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 4,
                  list: [
                    {
                      label: '',
                      type: 'date',
                      options: {
                        defaultValue: '',
                        width: '150px',
                        placeholder: '请选择时间',
                        format: 'YYYY-MM-DD',
                        readonly: false,
                        allowClear: true,
                        disabled: false,
                        rules: {
                          trigger: 'blur',
                          enum: 'iii',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '3f2bb7a9a8934bb0ad4d4d65f6319d5d',
                      model: 'date_3f2bb7a9a8934bb0ad4d4d65f6319d5d',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 4,
                  list: [
                    {
                      label: '',
                      type: 'select',
                      options: {
                        defaultValue: [],
                        width: '150px',
                        mode: null,
                        placeholder: '裁决单位',
                        remote: false,
                        showLabel: false,
                        showSearch: false,
                        clearable: false,
                        disabled: false,
                        props: {
                          label: 'label',
                          value: 'value',
                        },
                        options: [
                          {
                            label: 'Option 1',
                            value: 'Option 1',
                          },
                          {
                            label: 'Option 2',
                            value: 'Option 2',
                          },
                          {
                            label: 'Option 3',
                            value: 'Option 3',
                          },
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
                      key: '9b0599ba22dc40f08923051e84ee2a6a',
                      model: 'select_9b0599ba22dc40f08923051e84ee2a6a',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 4,
                  list: [
                    {
                      label: '',
                      type: 'select',
                      options: {
                        defaultValue: [],
                        width: '150px',
                        mode: null,
                        placeholder: '案由',
                        remote: false,
                        showLabel: false,
                        showSearch: false,
                        clearable: false,
                        disabled: false,
                        props: {
                          label: 'label',
                          value: 'value',
                        },
                        options: [
                          {
                            label: 'Option 1',
                            value: 'Option 1',
                          },
                          {
                            label: 'Option 2',
                            value: 'Option 2',
                          },
                          {
                            label: 'Option 3',
                            value: 'Option 3',
                          },
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
                      key: 'dfd88c8e6c38405c8b1561fff50a0c3c',
                      model: 'select_dfd88c8e6c38405c8b1561fff50a0c3c',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 4,
                  list: [
                    {
                      label: '',
                      type: 'select',
                      options: {
                        defaultValue: [],
                        width: '150px',
                        mode: null,
                        placeholder: '案件类别',
                        remote: false,
                        showLabel: false,
                        showSearch: false,
                        clearable: false,
                        disabled: false,
                        props: {
                          label: 'label',
                          value: 'value',
                        },
                        options: [
                          {
                            label: 'Option 1',
                            value: 'Option 1',
                          },
                          {
                            label: 'Option 2',
                            value: 'Option 2',
                          },
                          {
                            label: 'Option 3',
                            value: 'Option 3',
                          },
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
                      key: '8e0ea1b4f7be465da41f4b5b6a168bd4',
                      model: 'select_8e0ea1b4f7be465da41f4b5b6a168bd4',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 4,
                  list: [
                    {
                      label: '',
                      type: 'select',
                      options: {
                        defaultValue: [],
                        width: '150px',
                        mode: null,
                        placeholder: '处理结果',
                        remote: false,
                        showLabel: false,
                        showSearch: false,
                        clearable: false,
                        disabled: false,
                        props: {
                          label: 'label',
                          value: 'value',
                        },
                        options: [
                          {
                            label: 'Option 1',
                            value: 'Option 1',
                          },
                          {
                            label: 'Option 2',
                            value: 'Option 2',
                          },
                          {
                            label: 'Option 3',
                            value: 'Option 3',
                          },
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
                      key: 'cc80ad1e854b47cd805135f19866b330',
                      model: 'select_cc80ad1e854b47cd805135f19866b330',
                      rules: [],
                    },
                  ],
                },
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
              },
              key: 'da4a2e8706b94932a4fefc73bb88b26c',
              model: 'grid_da4a2e8706b94932a4fefc73bb88b26c',
              rules: [],
            },
          ],
          config: {
            size: 'default',
            hideRequiredMark: false,
            layout: 'horizontal',
            labelAlign: 'left',
            labelCol: {
              span: 0,
              offset: 0,
            },
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
