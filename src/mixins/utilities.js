export const utilities = {
    methods: {
        iconColor(color, counter, isNew) {
            let r = color.r 
            let g = color.g 
            let b = color.b
            
            if(counter >= 10) {
              r = 158
              g = 190
              b = 255
            }
            
            if(counter >= 50) {
              r = 208
              g = 235
              b = 197
            }
            
            if(counter >= 150) {
              r = 235
              g = 228
              b = 160
            }
            
            if(counter >= 200) {
              r = 245
              g = 212
              b = 122
            }
            
            if(counter >= 500) {
              r = 255
              g = 122
              b = 105
            }

            if(isNew) {
              r = 214
              g = 255
              b = 233
            }
            
            return `rgb(${r}, ${g}, ${b})`
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