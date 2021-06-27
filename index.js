class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.items = options.items

        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

        this.$el.addEventListener('click', e => {
            if (e.target.classList.contains('dropdown__label')) {
                this.$el.classList.contains('open')
                ? this.close()
                : this.open()
            } else if (e.target.tagName.toLowerCase() === 'li') {
                this.select(e.target.dataset.id)
            }
        })

        const itemsHTML = this.items.map(i => { // map - возвращ. массив
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ') //join - для получения строки и избавиться от запятых

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').textContent = item.label
        this.close()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}




const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'},
    ]
})