export const utilities = {
    methods: {
        iconColor(color) {
            if(this.isNew) return `rgb(255, 205, 89)`
            let b = color.b

            b = Math.floor(Math.random() * ((b + 30) - (b - 30) + 1) + (b - 30))

            return `rgb(${color.r}, ${color.g}, ${b})`
        },
        compileSounds(array) {
            if (array.length <= 1) return array;
            return array.sort(function (a, b) {
              let titleA = a.displayText.toUpperCase();
              let titleB = b.displayText.toUpperCase();
              return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
            });
          },
    }
  }