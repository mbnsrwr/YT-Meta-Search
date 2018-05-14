$('.1').hide(1000);
//search bar onFocus and onBlur animations
$(function () {

    var searchField = $("#query");
    var icon = $("#search-btn");

    $("#search-form").submit(function (event) {
        event.preventDefault();
        $(".lefter").show();
    });

    //focus event
    searchField.on("focus", function () {
        $(this).animate({
            width: "100%"
        }, 400);
        icon.animate({
            right: "10px"
        }, 400);
    });

    //blur event
    searchField.on("blur", function () {
        if (searchField.val() == "") {
            searchField.animate({
                width: "45%"
            }, 400);
            icon.animate({
                right: "360px"
            }, 400);
        }
    });

});


$('#a1').on('click',function(){
    $(".node1").toggle(500); 
});
$('#a2').on('click',function(){
    $(".node2").toggle(500); 
});
$('#a3').on('click',function(){
    $(".node3").toggle(500); 
});
$('#a4').on('click',function(){
    $(".node4").toggle(500); 
});
$('#a5').on('click',function(){
    $(".node5").toggle(500); 
});
$('#a6').on('click',function(){
    $(".node6").toggle(500); 
});
$('#a7').on('click',function(){
    $(".node7").toggle(500); 
});
$('#a8').on('click',function(){
    $(".node8").toggle(500); 
});

//search bar "search" functionality
function search() {
    //clear prev form results
    $("#results").html("");
    $("#buttons").html("");
    $("#tvshows").html("");
    $("#politics").html("");
    $("#music").html("");
    $("#sports").html("");
    $("#entertainment").html("");
    $("#technology").html("");
    $("#business").html("");
    $("#health").html("");
    $("#TVS").html("");
    $("#POL").html("");
    $("#MUS").html("");
    $("#SPO").html("");
    $("#ENT").html("");
    $("#TEC").html("");
    $("#BUS").html("");
    $("#HEA").html("");

    //get input from form
    var q = $("#query").val();

    //run "GET" request for the Youtube API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: q,
            type: "videos",
            maxResults: 10,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
            //key: "AIzaSyAcXtwKJ7xtmb2E2tPUE46GuvDzx0ygses"
             //AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4 
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = getOutput(item);
                

                //display results
                $("#results").append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $("#buttons").append(buttons);
        }
    );
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/0f2f9",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            var res = data.items.length;
            $("#TVS").append(res + " ");

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'1');

                //display results
                $("#tvshows").append(output);
            });

        }
    );
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/05qt0",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            var res = data.items.length;
            $("#POL").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'2');

                //display results
                $("#politics").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/04rlf",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#MUS").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'3');

                //display results
                $("#music").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/06ntj",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#SPO").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'4');

                //display results
                $("#sports").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/02jjt",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#ENT").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'5');

                //display results
                $("#entertainment").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/07c1v",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#TEC").append(res + " ");

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'6');

                //display results
                $("#technology").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/09s1f",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#BUS").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'7');

                //display results
                $("#business").append(output);
            });

        }
    );$.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            topicId: "/m/0kt51",
            q:q,
            type: "videos",
            maxResults: 3,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            var res = data.items.length;
            $("#HEA").append(res + " ");
            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = facetOutput(item,'8');
                //display results
                $("#health").append(output);
            });

        }
    );
}

//build output for facets
function facetOutput(item,val) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    //output string variable
    var out =  '<li class="node' + val +'" style="display: none;"> <a class="fancybox fancybox.iframe"  target="_blank" href="http://www.youtube.com/embed/' + videoId + '">' + title + '</a></li>';
    return out;
}

//build output
function getOutput(item) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var type = item.kind;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    //output string variable
    var output = "<li>" + "<div class='list-left'>" + "<img src='" + thumb + "'>" + "</div>" + "<div class='list-right'>" + "<h3 class='vTitle'><a class='fancybox fancybox.iframe'  target='_blank' href='http://www.youtube.com/embed/" + videoId + "'>" + title + "</a></h3>" + "<small>By <span class='cTitle'>" + channelTitle + "</span> on " + videoDate + type + "</small>" + "<p>" + description + "</p>" + "</div>" + "</li>" + "<div class='clearBoth'></div>" + "";

    return output;
}


//prev page function
function prevPage() {
    var token = $("#prev-button").data("token");
    var q = $("#prev-button").data("query");

    //clear prev form results
    $("#results").html("");
    $("#buttons").html("");

    //run "GET" request for the Youtube API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: q,
            type: "video",
            maxResults: 10,
            pageToken: token,
            key: "AIzaSyDh6EGz7qH2UGnFqybTSaaidsYCuj-f3s4"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = getOutput(item);

                //display results
                $("#results").append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $("#buttons").append(buttons);
        }
    );
}

//next page function
function nextPage() {
    var token = $("#next-button").data("token");
    var q = $("#next-button").data("query");

    //clear prev form results
    $("#results").html("");
    $("#buttons").html("");

    //run "GET" request for the Youtube API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: q,
            type: "video",
            maxResults: 10,
            pageToken: token,
            key: "AIzaSyAcXtwKJ7xtmb2E2tPUE46GuvDzx0ygses"
        },
        function (data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                //get output
                var output = getOutput(item);

                //display results
                $("#results").append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $("#buttons").append(buttons);
        }
    );
}



//build buttons
function getButtons(prevPageToken, nextPageToken) {
    var q = $("#query").val();

    if (!prevPageToken) {
        var btnoutput = "<div class='button-container'>" +
            "<button id='next-button' class='page-button' data-token='" + nextPageToken + "' data-query='" + q + "' onclick='nextPage();'>Next Page</button></div>";
    } else {
        var btnoutput = "<div class='button-container'>" +

            "<button id='prev-button' class='page-button' data-token='" + prevPageToken + "' data-query='" + q + "' onclick='prevPage();'>Prev Page</button>" +

            "<button id='next-button' class='page-button' data-token='" + nextPageToken + "' data-query='" + q + "' onclick='nextPage();'>Next Page</button></div>";
    }

    return btnoutput;
}
