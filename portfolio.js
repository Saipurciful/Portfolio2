// bring in all boxes
const boxes = document.querySelectorAll('.box');
// fire off the even when scroll, then have function of checkBoxes
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {

    // when scroll down, trigger point happen; boxes start to come in
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport/ DOMRect describes the size and position of a rectangle.
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')

        } else {
            box.classList.remove('show')
        }
    })
}