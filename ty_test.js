Feature('testeryou');

var page = 'http://automationpractice.com/index.php';

Scenario('test login', (I) => {

    I.amOnPage(page);

    var login = "//*[contains(@class,'login')]";

    I.click(login);

    var name = {name: 'email'};

    I.fillField(name, 'neslihan.keles@isik.edu.tr');

    var password = {name: 'passwd'};

    I.fillField(password, '123456');

    var loginButton = {xpath: '//*[@id="SubmitLogin"]'}; 

    I.click(loginButton);

    pause();

});


Scenario('Search for an Item', (I) => {

    I.amOnPage(page);

    var search = {name: 'search_query'};

    I.fillField(search, 'Blouse');

    I.click({name: 'submit_search'});

    pause();




});


Scenario('Add to Cart', (I) => {

    I.amOnPage(page);

    I.click({xpath: '//*[@id="block_top_menu"]/ul/li[2]/a'});

    var dresses = {xpath: '//*[@id="categories_block_left"]/div/ul/li[3]/a'}

    I.click(dresses);

    var summer = "//*[contains(@class,'button ajax_add_to_cart_button btn btn-default')]";

    I.click(summer);

    var add = "//*[contains(@class,'btn btn-default button button-medium')]";

    I.click(add);

    pause();


});