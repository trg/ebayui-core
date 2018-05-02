const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['radio'];
    const iconWrapperClasses = ['radio__icon', 'radio__icon--inherit'];
    const inputTagClass = 'radio__control';

    if (input.class) {
        classes.push(input.class);
    }

    return {
        classes,
        inputTagClass,
        iconWrapperClasses,
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function handleClick(e) {
    if (!this.state.disabled) {
        emitAndFire(this, 'radio-change', { el: e.target });
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick
});
