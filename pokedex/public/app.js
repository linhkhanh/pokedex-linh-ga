const displayBottom = () => {
    $('.item').on('mouseover', (event) => {
        const $children = $(event.currentTarget).children();
        $children.eq(1).show();
        $children.eq(2).show();
    })
}
const hideBottom = () => {
    $('.item').on('mouseout', (event) => {
        const $children = $(event.currentTarget).children();
        $children.eq(1).hide();
        $children.eq(2).hide();
    })
}
const tab = () => {
    $( "#tabs" ).tabs();
}
$(() => {
    $('.top').hide();
    $('.bottom').hide();
    displayBottom();
    hideBottom();
    tab()
})