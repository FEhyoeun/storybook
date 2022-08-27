import MyTextarea from './Textarea.vue';

export default {
    title: 'Example/TextArea',
    component: MyTextarea,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm'],
        },
        content: '',
        placeholder: 'ex) somebody help me!',
        helperText: 'ex) somebody help me!',
        maxLength: 10,
        isDisabled: {
            control: { type: 'select' },
            options: ['true', 'false'],
        },
        isError: {
            control: { type: 'select' },
            options: ['true', 'false'],
        }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyTextarea },
    template: '<my-textarea v-bind="$props" />',
});

export const l = Template.bind({});
l.args = {
    size: 'l',
    content: '',
    placeholder: 'placeholder 내용입니다.',
    helperText: '이 부분을 참고하세요.',
    maxLength: 10,
    isDisabled: false,
    isError: false,
};

export const s = Template.bind({});
s.args = {
    size: 'm',
    content: '',
    placeholder: 'placeholder 내용입니다.',
    helperText: '이 부분을 참고하세요.',
    maxLength: 10,
    isDisabled: false,
    isError: false,
};
