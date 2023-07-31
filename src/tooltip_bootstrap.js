/* Tooltip with bootstrap 5 
    usage:
    v-tooltip="(string)title"    
*/
export const Tooltip = {
    bind: function (el, binding) {
        let title = null;
        if (typeof binding.value == 'string') {
            title = binding.value;
        }
        if (title) {
            el.setAttribute('data-bs-toggle', 'tooltip');
            el.setAttribute('data-bs-title', title)
            el.setAttribute('data-bs-original-title', title)
        }
        bootstrap.Tooltip.getOrCreateInstance(el);
    },

    update: function (el, binding,) {
        let title = binding.value;
        let bsTitle = el.getAttribute('data-bs-title');
        if (title != bsTitle) {
            el.setAttribute('data-bs-title', title);
            el.setAttribute('data-bs-original-title', title);
            let inst = bootstrap.Tooltip.getInstance(el);
            if(inst && !title) inst.dispose();
            if(inst && title) inst.setContent({'.tooltip-inner': title} );
            if(!inst && title) bootstrap.Tooltip.getOrCreateInstance(el);
        }
    }
}
// global declaration
Vue.directive('tooltip', Tooltip);