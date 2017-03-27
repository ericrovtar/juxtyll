const Juxtyll = {
    install(Vue, options) {
        Vue.mixin({
            mounted() {
                console.log('Mounted!');
            }
        });
    }
};

export default Juxtyll;