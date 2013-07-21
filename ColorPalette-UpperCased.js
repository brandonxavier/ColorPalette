// Standard CSS color names gathered from various freely available sources

var colorPalette = {
    AliceBlue: "#F0F8FF",
    AntiqueWhite: "#FAEBD7",
    Aqua: "#00FFFF",
    Aquamarine: "#7FFFD4",
    Azure: "#F0FFFF",
    Beige: "#F5F5DC",
    Bisque: "#FFE4C4",
    Black: "#000000",
    BlanchedAlmond: "#FFEBCD",
    Blue: "#0000FF",
    BlueViolet: "#8A2BE2",
    Brown: "#A52A2A",
    BurlyWood: "#DEB887",
    CadetBlue: "#5F9EA0",
    Chartreuse: "#7FFF00",
    Chocolate: "#D2691E",
    Coral: "#FF7F50",
    CornflowerBlue: "#6495ED",
    Cornsilk: "#FFF8DC",
    Crimson: "#DC143C",
    Cyan: "#00FFFF",
    DarkBlue: "#00008B",
    DarkCyan: "#008B8B",
    DarkGoldenrod: "#B8860B",
    DarkGray: "#A9A9A9",
    DarkGreen: "#006400",
    DarkKhaki: "#BDB76B",
    DarkMagenta: "#8B008B",
    DarkOliveGreen: "#556B2F",
    DarkOrange: "#FF8C00",
    DarkOrchid: "#9932CC",
    DarkRed: "#8B0000",
    DarkSalmon: "#E9967A",
    DarkSeaGreen: "#8FBC8F",
    DarkSlateBlue: "#483D8B",
    DarkSlateGray: "#2F4F4F",
    DarkTurquoise: "#00CED1",
    DarkViolet: "#9400D3",
    DeepPink: "#FF1493",
    DeepSkyBlue: "#00BFFF",
    DimGray: "#696969",
    DodgerBlue: "#1E90FF",
    FireBrick: "#B22222",
    FloralWhite: "#FFFAF0",
    ForestGreen: "#228B22",
    Fuchsia: "#FF00FF",
    Gainsboro: "#DCDCDC",
    GhostWhite: "#F8F8FF",
    Gold: "#FFD700",
    Goldenrod: "#DAA520",
    Gray: "#808080",
    Green: "#008000",
    GreenYellow: "#ADFF2F",
    Honeydew: "#F0FFF0",
    HotPink: "#FF69B4",
    IndianRed: "#CD5C5C",
    Indigo: "#4B0082",
    Ivory: "#FFFFF0",
    Khaki: "#F0E68C",
    Lavender: "#E6E6FA",
    LavenderBlush: "#FFF0F5",
    LawnGreen: "#7CFC00",
    LemonChiffon: "#FFFACD",
    LightBlue: "#ADD8E6",
    LightCoral: "#F08080",
    LightCyan: "#E0FFFF",
    LightGoldenrodYellow: "#FAFAD2",
    LightGreen: "#90EE90",
    LightGrey: "#D3D3D3",
    LightPink: "#FFB6C1",
    LightSalmon: "#FFA07A",
    LightSeaGreen: "#20B2AA",
    LightSkyBlue: "#87CEFA",
    LightSlateGray: "#778899",
    LightSteelBlue: "#B0C4DE",
    LightYellow: "#FFFFE0",
    Lime: "#00FF00",
    LimeGreen: "#32CD32",
    Linen: "#FAF0E6",
    Magenta: "#FF00FF",
    Maroon: "#800000",
    MediumAquamarine: "#66CDAA",
    MediumBlue: "#0000CD",
    MediumOrchid: "#BA55D3",
    MediumPurple: "#9370DB",
    MediumSeaGreen: "#3CB371",
    MediumSlateBlue: "#7B68EE",
    MediumSpringGreen: "#00FA9A",
    MediumTurquoise: "#48D1CC",
    MediumVioletRed: "#C71585",
    MidnightBlue: "#191970",
    MintCream: "#F5FFFA",
    MistyRose: "#FFE4E1",
    Moccasin: "#FFE4B5",
    NavajoWhite: "#FFDEAD",
    Navy: "#000080",
    OldLace: "#FDF5E6",
    Olive: "#808000",
    OliveDrab: "#6B8E23",
    Orange: "#FFA500",
    OrangeRed: "#FF4500",
    Orchid: "#DA70D6",
    PaleGoldenrod: "#EEE8AA",
    PaleGreen: "#98FB98",
    PaleTurquoise: "#AFEEEE",
    PaleVioletRed: "#DB7093",
    PapayaWhip: "#FFEFD5",
    PeachPuff: "#FFDAB9",
    Peru: "#CD853F",
    Pink: "#FFC0CB",
    Plum: "#DDA0DD",
    PowderBlue: "#B0E0E6",
    Purple: "#800080",
    Red: "#FF0000",
    RosyBrown: "#BC8F8F",
    RoyalBlue: "#4169E1",
    SaddleBrown: "#8B4513",
    Salmon: "#FA8072",
    SandyBrown: "#F4A460",
    SeaGreen: "#2E8B57",
    Seashell: "#FFF5EE",
    Sienna: "#A0522D",
    Silver: "#C0C0C0",
    SkyBlue: "#87CEEB",
    SlateBlue: "#6A5ACD",
    SlateGray: "#708090",
    Snow: "#FFFAFA",
    SpringGreen: "#00FF7F",
    SteelBlue: "#4682B4",
    Tan: "#D2B48C",
    Teal: "#008080",
    Thistle: "#D8BFD8",
    Tomato: "#FF6347",
    Turquoise: "#40E0D0",
    Violet: "#EE82EE",
    Wheat: "#F5DEB3",
    White: "#FFFFFF",
    WhiteSmoke: "#F5F5F5",
    Yellow: "#FFFF00",
    YellowGreen: "#9ACD32"
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
        fg_color = x.substr( 3 );
    }
    if ( x.match( /^bg /i ) != null ) {
        bg_color = x.substr( 3 );
    }
    if ( x.match( /^sample /i ) != null ) {
        sample_message = x.substr( 7 );
    }
    if ( x.match( /^fw /i ) != null ) {
        if ( valid_weights.indexOf( x.substr( 3 ) ) != -1 ) {
            font_weight = x.substr( 3 );
        }
    }
    if ( x.match( /^demo /i ) != null ) {
        demoMode( x.substr( 5 ) );
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