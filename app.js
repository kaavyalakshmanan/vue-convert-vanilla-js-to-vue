// VANILLA JS

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     console.log("add goal")
//     const enteredValue = inputEl.value;
//     console.log(enteredValue)
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.append(listItemEl);
//     inputEl.value = ''
// }

// buttonEl.addEventListener('click', addGoal);

// VUE.js

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app')
