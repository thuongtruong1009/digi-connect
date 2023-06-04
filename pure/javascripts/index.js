const navigation_toggle_close = document.querySelector('#navigation_toggle_close');
const navigation_toggle_open = document.querySelector('#navigation_toggle_open');
const mobile_list = document.querySelector('#mobile_navigation_list');

let isOpenToggle = false;

const openToogle = () => {
    isOpenToggle = true;
    mobile_list.style.display = 'flex';
    navigation_toggle_close.style.display = 'block';
    navigation_toggle_open.style.display = 'none';
}
const closeToogle = () => {
    isOpenToggle = false;
    mobile_list.style.display = 'none';
    navigation_toggle_close.style.display = 'none';
    navigation_toggle_open.style.display = 'block';
}

navigation_toggle_open.addEventListener('click', () => {
    isOpenToggle ? closeToogle() : openToogle();
})
navigation_toggle_close.addEventListener('click', () => {
    isOpenToggle ? closeToogle() : openToogle();
})

