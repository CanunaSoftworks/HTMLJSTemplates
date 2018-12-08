$(function(){
    $('#render-button').on('click', function(){
        renderContent();
    });
});

function renderContent(){
    var dataToRender = [{
        title: "title 1",
        content: "content for 1"
    },
    {
        title: "title 2",
        content: "content for 2"
    },
    {
        title: "title 3",
        content: "content for 3"
    }];
    
    var template = $('#example-template').html();
    var result = '';

    dataToRender.forEach(function(templateItem){
        result = result + template
        .replace('###TEMPLATETITLE###', templateItem.title)
        .replace('###TEMPLATECONTENT###', templateItem.content);
    });
    
    var contentLocation = $('#target-for-template');
    contentLocation.empty();
    contentLocation.append(result);
}