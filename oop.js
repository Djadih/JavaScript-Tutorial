console.log('hello world')

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 2
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();

// Factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1)

console.log(circle);