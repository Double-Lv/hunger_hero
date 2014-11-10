var res = {
    texture_plist : "res/graphics/texture.plist",
    texture_img : "res/graphics/texture.png",
    bgWelcome_img : "res/graphics/bgWelcome.jpg",
    bgLayer_img : "res/graphics/bgLayer.jpg",
    font_fnt : "res/fonts/font.fnt",
    font_img : "res/fonts/font.png",
    eat_plist : "res/particles/eat.plist",
    partitexture_img : "res/particles/texture.png",
    mushroom_plist : "res/particles/mushroom.plist",
    coffee_plist : "res/particles/coffee.plist",
    wind_plist : "res/particles/wind.plist",
    wind_img : "res/particles/wind.png",
    bgWelcome_mp3 : "res/sounds/bgWelcome.mp3",
    bgGame_mp3 : "res/sounds/bgGame.mp3",
    eat_mp3 : "res/sounds/eat.mp3",
    coffee_mp3 : "res/sounds/coffee.mp3",
    mushroom_mp3 : "res/sounds/mushroom.mp3",
    hit_mp3 : "res/sounds/hit.mp3",
    hurt_mp3 : "res/sounds/hurt.mp3",
    lose_mp3 : "res/sounds/lose.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}