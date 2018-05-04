const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['radio', input.class];

    return {
        classes,
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function handleClick() {
    if (!this.state.disabled) {
        emitAndFire(this, 'radio-change');
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick
});
