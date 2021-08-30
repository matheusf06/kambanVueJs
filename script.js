const app = new Vue({
    el: '#app',
    data() {
        return {
            toDoList: [
                { text: 'Teste', completed: false }
            ],
            InProgressList: [],
            DoneList: [],
            toDo: ''
        }
    },
    methods: {
        save() {
            if (!this.toDo) return
            else {
                this.toDoList.push({ text: this.toDo, completed: false })
                this.toDo = ''
            }
        },
        toInProgressList(td) {
            this.InProgressList.push({ text: td.text, completed: false })
            const index = this.toDoList.indexOf(td)
            this.toDoList.splice(index, 1)
        },
        toDoneList(td) {
            this.DoneList.push({ text: td.text, completed: true })
            const index = this.InProgressList.indexOf(td)
            this.InProgressList.splice(index, 1)
        },
        backToDoList(td) {
            this.toDoList.push({ text: td.text, completed: false })
            const index = this.InProgressList.indexOf(td)
            this.InProgressList.splice(index, 1)
        }
    },
    mounted() {
        this.$refs.toDoInput.focus()
    },
    updated() {
        this.$refs.toDoInput.focus()
    }
})