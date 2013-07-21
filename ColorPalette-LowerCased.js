// Standard CSS color names gathered from various freely available sources

var colorPalette = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#FF00FF",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgreen: "#90EE90",
    lightgrey: "#D3D3D3",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    red: "#FF0000",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FFFF00",
    yellowgreen: "#9ACD32"
};

/**
 *
 * Everything below here is of limited general interest - just grab the
 * object above for personal use
 *
 */

var fg_color = "black";
var bg_color = "white";
var font_weight = "normal";
var sample_message = "The quick brown fox jumps over the lazy dog";
var valid_weights = ["normal", "bold", "bolder"];

cb.onMessage( function (msg) {

    var x = msg['m']; // convenience


    if ( x.match( /^fg /i ) != null ) {
        fg_color = x.substr( 3 ).toLowerCase();
    }
    if ( x.match( /^bg /i ) != null ) {
        bg_color = x.substr( 3 ).toLowerCase();
    }
    if ( x.match( /^sample /i ) != null ) {
        sample_message = x.substr( 7 );
    }
    if ( x.match( /^fw /i ) != null ) {
        if ( valid_weights.indexOf( x.substr( 3 ) ) != -1 ) {
            font_weight = x.substr( 3 ).toLowerCase();
        }
    }
    if ( x.match( /^demo /i ) != null ) {
        demoMode( x.substr( 5 ).toLowerCase() );
    } else {
        cb.chatNotice( sample_message, "", colorPalette[bg_color], colorPalette[fg_color], font_weight );
    }

    return msg;
} );

function instructions() {

    var txt;

    txt = "Type the following (without quotes):\n\n";
    txt += "fg 'color name' or \n";
    txt += "bg 'color name' or \n";
    txt += "fw 'normal, bold, bolder' to set font weight\n\n ";
    txt += "demo 'xx' for a sampling of various color/weight combos:\n";
    txt += "(where 'xx' = fg, bg, or fw to see how the currently\n";
    txt += "selected colors look with different fg, bg, or weights\n\n";

    cb.chatNotice( txt );

}

function init() {

    instructions();

}

init();

function demoMode(mode) {

    if ( typeof mode == "undefined" ) {
        mode = "bg"; // a modest default
    }

    if ( mode == "fw" ) {
        for ( var i = 0; i < valid_weights.length; i++ ) {
            cb.chatNotice( "fg color = " + fg_color + ", bg color = " + bg_color +
                ", font weight = " + valid_weights[i], "", bg_color, fg_color,
                valid_weights[i] );
        }

    } else {
        for ( col in colorPalette ) {
            if ( colorPalette.hasOwnProperty( col ) ) {
                if ( mode == "fg" ) {
                    cb.chatNotice( "fg color = " + col + ", bg color = " + bg_color +
                        ", font weight = " + font_weight, "", bg_color, colorPalette[col],
                        font_weight );
                } else {
                    if ( mode == "bg" ) {
                        cb.chatNotice( "fg color = " + fg_color + ", bg color = " + col +
                            ", font weight = " + font_weight, "", colorPalette[col], fg_color,
                            font_weight );
                    }
                }


            }
        }
    }

}

Object.size = function (obj) {
    var size = 0, key;
    for ( key in obj ) {
        if ( obj.hasOwnProperty( key ) ) size++;
    }
    return size;
};