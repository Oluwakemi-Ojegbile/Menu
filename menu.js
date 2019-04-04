new Vue({
    el: '#main-body',
    
    data: {
        message: 'home'
    },

    methods: {
        makeMessage: function(item){
            this.message = item;
        }
    }
});