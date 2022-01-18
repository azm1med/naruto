function details__pagination() {
    var items = $(".shinobi__list .shinobi__item-block");
    var numItems = items.length;
    var perPage = 8;
    
    items.slice(perPage).hide();
    
    $('#shinobi__control').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "<i class='fal fa-chevron-left'></i>",
        nextText: "<i class='fal fa-chevron-right'></i>",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            // $('#relics__today').html(pageNumber);
        }
    });
    // $('#relics__page').html( $('#relics__control').pagination('getPagesCount'));
    // $('#relics__today').html( $('#relics__control').pagination('getCurrentPage'));
}
details__pagination();