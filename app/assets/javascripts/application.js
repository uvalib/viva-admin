// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require activestorage
//= require turbolinks
//= require_tree .
//= require src/loadingoverlay.js

/* main.js */

//Variables
var now = new Date();
var today = now.getFullYear()+"-"+ (now.getMonth()+1)+"-"+ now.getDate();
var last_month = ("0" + now.getMonth()).slice(-2);
var first_day_last_month = now.getFullYear()+"-"+(last_month)+"-01" ;
if (last_month == "00" ){
    last_month = "12";
    first_day_last_month = (now.getFullYear()-1)+"-"+(last_month)+"-01"
}
console.log('Original date: ', now.toString());
console.log('Today: ',today.toString());
console.log('last month: ', last_month.toString());
console.log('first_day_last_month: ', first_day_last_month.toString());

period = $('#period').val();
date = $('#date').val();
endDate = $('#endDate').val();
institution = $('#ins').val(); // example: lva, uva-sc

//Get Institution Name
function institution_fullname(institution){
    var fullname = "";
    if (institution === "apl") {
        fullname ="Alexandria Library";
    }
    if (institution === "au") {
        fullname ="Averett University";
    }
    if (institution === "bc") {
        fullname ="Bridgewater College";
    }
    if (institution === "wm") {
        fullname ="College of William and Mary";
    }
    if (institution === "cw") {
        fullname ="Colonial Williamsburg";
    }
    if (institution === "fcpl") {
        fullname ="Fairfax County Public Library";
    }
    if (institution === "gmu") {
        fullname ="George Mason University";
    }
    if (institution === "gh") {
        fullname ="Gunston Hall Library & Archives";
    }
    if (institution === "hrl") {
        fullname ="Handley Regional Library";
    }
    if (institution === "hu") {
        fullname ="Hollins University";
    }
    if (institution === "jmu") {
        fullname ="James Madison University";
    }
    if (institution === "lva") {
        fullname ="Library of Virgina";
    }
    if (institution === "lu") {
        fullname ="Longwood University";
    }
    if (institution === "mcc") {
        fullname ="Montgomery County Circuit Court";
    }
    if (institution === "npl") {
        fullname ="Norfolk Public Library";
    }
    if (institution === "odu") {
        fullname ="Old Dominion University";
    }
    if (institution === "rc") {
        fullname ="Roanoke College";
    }
    if (institution === "rpl") {
        fullname ="Roanoke Public Libraries";
    }
    if (institution === "ru") {
        fullname ="Radford University";
    }
    if (institution === "rmc") {
        fullname ="Randolph-Macon College";
    }
    if (institution === "scl") {
        fullname ="Shenandoah County Library";
    }
    if (institution === "tbl") {
        fullname ="Thomas Balch Library";
    }
    if (institution === "umw") {
        fullname ="University of Mary Washington";
    }
    if (institution === "ur") {
        fullname ="University of Richmond";
    }
    if (institution === "uva-cnhi") {
        fullname ="University of Virginia, The Center for Nursing Historical Inquiry";
    }
    if (institution === "uva-hs") {
        fullname ="University of Virginia, Health Sciences Library";
    }
    if (institution === "uva-law") {
        fullname ="University of Virginia, Law Library";
    }
    if (institution === "uva-music") {
        fullname ="University of Virginia, Music Library";
    }
    if (institution === "uva-sc") {
        fullname = "University of Virginia, Special Collections";
    }
    if (institution === "vcu-cab") {
        fullname ="Virginia Commonwealth University, James Cabell Library";
    }
    if (institution === "vcu-tm") {
        fullname ="Virginia Commonwealth University, Tompkins-McCaw Library";
    }
    if (institution === "vhs") {
        fullname ="Virginia Historical Society";
    }
    if (institution === "vmi") {
        fullname ="Virginia Military Institute";
    }
    if (institution === "vmfa") {
        fullname ="Virginia Museum of Fine Arts";
    }
    if (institution === "vt") {
        fullname ="Virginia Polytechnic Institute and State University";
    }
    if (institution === "vsll-scv") {
        fullname ="Virginia State Law Library, Supreme Court of Virginia";
    }
    if (institution === "vsu") {
        fullname ="Virginia State University";
    }
    if (institution === "vuu") {
        fullname ="Virginia Union University";
    }
    if (institution === "wl-law") {
        fullname ="Washington and Lee University, Law School";
    }
    if (institution === "wl-ley") {
        fullname ="Washington and Lee University, Leyburn Library";
    }
    if (institution === "wwplm") {
        fullname ="Woodrow Wilson Presidential Library &amp; Museum";
    }
    if (institution === "wcc") {
        fullname ="Wytheville Community College";
    }
    if (institution === "wchs") {
        fullname ="Wythe County Historical Society";
    }
    $('#institution_name').html(fullname);
    return fullname;
}


//Number of Unique Visitors
function unique_visitors(period, date,endDate,institution) {
    if (endDate !== "") {
        $('#visitors').html("Not Available for custom date ranges");
    } else {
        $.ajax({
            url: get_url("VisitsSummary.getUniqueVisitors",period,date,endDate,institution),
            type: 'GET',
            dataType: 'json',
            success: function (visitor) {
                $('#visitors').html(visitor.value);
            }
        });
    }
}

//Common referrers
function common_referrers(period, date,endDate,institution) {
    $.ajax({
        url: get_url("Referrers.getReferrerType",period,date,endDate,institution),
        type: 'GET',
        dataType: 'json',
        success: function (ref) {
            $('#ref_tab tr').remove();
            $('#ref_tab').append('<tr> <th>Referrer</th> <th>Visits</th></tr>');
            if (ref.length === 0) {
                $('#ref_tab').append('<tr><td>' + "No referrer found" + '</td><td>' + "0" + '</td></tr>');
            } else {
                for (i = 0; i < ref.length; i++) {
                    $('#ref_tab').append('<tr><td>' + ref[i].label + '</td><td>' + ref[i].nb_visits + '</td></tr>');
                }
            }
        }
    });
}

/* User location- Jason output
 function locations(period, date) {
 $.ajax({
 url: get_url("UserCountry.getCountry",period,date,institution),
 type: 'GET',
 dataType: 'json',
 success: function (loc) {
 $('#location').html(loc[0].label + ": number of visits: " + loc[0].nb_visits + "; total time spent: " + loc[0].sum_visit_length
 +"; "+ loc[1].label + "; number of visits: " + loc[1].nb_visits + "; total time spent: " + loc[1].sum_visit_length);
 }
 });
 }
 */

//User Location bar graph
function locations_graph(period, date,endDate,institution) {
    var img = document.createElement("img");
    //  img.src = "https://analytics.lib.virginia.edu/?module=API&method=ImageGraph.get&apiAction=getCountry&apiModule=UserCountry&graphType=horizontalBar&width=500&height=250&idSite=9&period="+period+"&date="+date+"&format=JSON&segment=pageUrl=@docId="+institution;
    img.src = get_location_graph_url(period,date,endDate,institution);
    img.alt = "Visitors Location Graph";
    $('#locOfVisitors').html(img);
}

//Time Spent on Site
function time_spent(period, date,endDate,institution) {
    $.ajax({
        url: get_url("VisitsSummary.getSumVisitsLengthPretty", period,date,endDate,institution),
        type: 'GET',
        dataType: 'json',
        success: function (t) {
            $('#time').html(t.value);
        }
    });
}

//Number of Returning Visit
function returning_visit(period, date,endDate,institution) {
    $.ajax({
        url: get_url("VisitFrequency.get",period,date,endDate,institution),
        type: 'GET',
        dataType: 'json',
        success: function (r) {
            $('#return').html(r.nb_visits_returning);
        }
    });
}

//Top 5 Popular Finding Aids
var p = [];
function popular_finding_aids(period, date, endDate, institution) {
    $.ajax({
        url: get_url("Actions.getPageTitles",period, date, endDate, institution),
        type: 'GET',
        dataType: 'json',
        success: function (p) {
            $('#fa_tab tr').remove();
            $('#fa_tab').append('<tr><th>Finding Aid</th> <th>Visits</th></tr>');
            if (p.length === 0) {
                $('#fa_tab').append('<tr><td>' + "No Finding aids found" + '</td><td>' + "0" + '</td></tr>');
            } else {
                for (i = 0; i < p.length; i++) {
                    title = p[i].label.split(',')[0];
                    vah_search_link = "http://search.vaheritage.org/vivaxtf/search?text=" + escape(title) +"";
                    $('#fa_tab').append('<tr><td><a target="_blank" href=' + vah_search_link.toString() + '>'+ title + '</a></td><td>' + p[i].nb_visits + '</td></tr>');
                }
            }
        }
    })
}

//Top search term
function top_search_term(period, date, endDate, institution) {
    $.ajax({
        // url: get_url("Actions.getSiteSearchKeywords",period,date,institution),
        // get top keywords
        url: get_url("Referrers.getKeywords",period, date, endDate, institution),
        type: 'GET',
        dataType: 'json',
        success: function (term) {
            $('#top_term').html(term.value);
        }
    });
}

//Generate API calls
function get_url(method,period,date,endDate,institution) {
    if (endDate !== "" ) {
        return "https://analytics.lib.virginia.edu/?module=API&method="+method+"&idSite=9&period=range&date="+date+","+endDate+"&format=JSON&segment=pageUrl=@docId="+institution;
    } else {
        return "https://analytics.lib.virginia.edu/?module=API&method="+method+"&idSite=9&period="+period+"&date="+date+"&format=JSON&segment=pageUrl=@docId="+institution;
    }
}

function get_location_graph_url(period,date,endDate,institution) {
    if (endDate !== "" ) {
        return "https://analytics.lib.virginia.edu/?module=API&method=ImageGraph.get&apiAction=getCountry&apiModule=UserCountry&graphType=horizontalBar&width=500&height=250&idSite=9&period=range&date="+date+","+endDate+"&format=JSON&segment=pageUrl=@docId="+institution;;
    } else {
        return "https://analytics.lib.virginia.edu/?module=API&method=ImageGraph.get&apiAction=getCountry&apiModule=UserCountry&graphType=horizontalBar&width=500&height=250&idSite=9&period="+period+"&date="+date+"&format=JSON&segment=pageUrl=@docId="+institution;;
    }
}

//Gernerate message related to the time period picked
function get_message(period,date,endDate) {
    var message = "";
    if (period == "day") {
        message = " " + date;
    }
    else if (period == "month") {
        var d = new Date(date);
        var y = d.getUTCFullYear();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var n = month[d.getUTCMonth()];
        message = n +" of " + y;
    }
    else if (period == "year") {
        var d = new Date(date);
        var y = d.getUTCFullYear();
        message = " " + y;
    }
    else if (period == "range") {
        message = date + " to " + endDate;
    }
    else {
        message = "...";
    }
    return message;
}

//Display or hide the End date picker
$(function() {
    $('#dateSelectEnd').hide();
    $('#period').change(function(){
        if($('#period').val() == 'range') {
            $('#dateSelectEnd').show();
        } else {
            $('#dateSelectEnd').hide();
            $('#endDate').val("");
        }
    });
});


$(document).ready(function(){
    //Add loading overlay with customized text message when API call sent
   // if ($('#user_signed_in').val() == 'true') {
        $(document).ajaxStart(function () {
            //   ins = institution_fullname($('#ins').val());
            msg = "Loading data from " + get_message($('#period').val(), $('#date').val(), $('#endDate').val());
            $.LoadingOverlay("show", {
                image: "",
                text: msg,
                textResizeFactor: 0.2
            });
        });
        //Hide loading overlay when API call finishes
        $(document).ajaxStop(function () {
            $.LoadingOverlay("hide");
        });

        //Initialization of the page, display data of last month
        institution_fullname($('#ins').val());
        $('#date').val(first_day_last_month);
        $('#msg').html(get_message($('#period').val(), $('#date').val(), $('#endDate').val()));
        unique_visitors($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        common_referrers($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        locations_graph($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        time_spent($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        returning_visit($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        top_search_term($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());
        popular_finding_aids($('#period').val(), first_day_last_month, $('#endDate').val(), $('#ins').val());

        //Page load when go button is clicked
        $('#go').click(function () {
            console.log('period: ', $('#period').val());
            console.log('End date: ', $('#endDate').val());
            institution_fullname($('#ins').val());
            $('#msg').html(get_message($('#period').val(), $('#date').val(), $('#endDate').val()));
            unique_visitors($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            common_referrers($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            locations_graph($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            time_spent($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            returning_visit($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            top_search_term($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
            popular_finding_aids($('#period').val(), $('#date').val(), $('#endDate').val(), $('#ins').val());
        })
   // }
})
