function data(){
    return {
        open: null,
        start(){
            this.open = false
        },
        isOpen(){
            this.open = !this.open
        },
        close(){
            this.open = false
        }
    }
}