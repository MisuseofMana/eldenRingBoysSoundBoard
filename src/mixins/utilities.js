export const utilities = {
    methods: {
        iconColor(color) {
            if(this.isNew) return `rgb(255, 205, 89)`
            let b = color.b

            b = Math.floor(Math.random() * ((b + 30) - (b - 30) + 1) + (b - 30))

            return `rgb(${color.r}, ${color.g}, ${b})`
        }
    }
  }