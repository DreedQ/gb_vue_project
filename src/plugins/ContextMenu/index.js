export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true
        this.caller = null;

        Vue.prototype.$contextMenu = {
            EventBus: new Vue(),

            show({ items, event }) {
                // debugger
                const caller = event.target
                    // console.log(event.target)
                if (this.caller !== caller) {
                    this.caller = caller;
                    this.EventBus.$emit('shown', { items, caller })
                } else this.hide()
            },

            hide() {
                this.EventBus.$emit('hide')
                this.caller = null
            },
            changeMenu(item) {
                this.EventBus.$emit('shownChangeItem', item)
            },
        }
    }

}