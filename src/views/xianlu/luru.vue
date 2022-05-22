<template>
  <div>
    <antd-generate-form ref="generateFormRef" :data="widgetForm"> </antd-generate-form>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </div>
</template>

<script lang="ts">
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
                  span: 12,
                  list: [
                    {
                      label: '单行文本',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '5c899508e9404d299902208677cefda9',
                      model: 'input_5c899508e9404d299902208677cefda9',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 12,
                  list: [
                    {
                      label: '单行文本',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '698eae5990ee4cf18f7857ed68c3abab',
                      model: 'input_698eae5990ee4cf18f7857ed68c3abab',
                      rules: [],
                    },
                  ],
                },
              ],
              options: { gutter: 0, justify: 'start', align: 'top' },
              key: '02609eb189a7405bb91feaf986cdee8a',
              model: 'grid_02609eb189a7405bb91feaf986cdee8a',
              rules: [],
            },
          ],
          config: {
            size: 'default',
            hideRequiredMark: false,
            layout: 'horizontal',
            labelAlign: 'right',
            labelCol: { span: 3, offset: 0 },
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
