$(document).ready((e) => {

    $("#vmap").vectorMap({
        map: 'world_en',
        selectedColor: '#ffff',
        backgroundColor: "none",
        hoverColor: '#FFE27D',
        color: '#797979',

        onRegionClick: function (element, code, region) {

            let zones = moment.tz.zonesForCountry(code)[0]
            let hour = moment().tz(zones).format('HH')
            let min = moment().tz(zones).format('mm')
            $("#hour").text(hour)
            $("#min").text(min)
            $(".country").text(region)
        },
        onLoad: function () {
            let zones = moment.tz.zonesForCountry("SE")[0]
            let hour = moment().tz(zones).format('HH')
            let min = moment().tz(zones).format('mm')
            $("#hour").text(hour)
            $("#min").text(min)
            $(".country").text("Sweden")
        }
    });

})
