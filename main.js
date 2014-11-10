cc.game.onStart = function () {
    cc.view.setDesignResolutionSize(1024, 768, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc._loaderImage = '';
    cc.LoaderScene.preload(g_resources, function () {
        cc.spriteFrameCache.addSpriteFrames(res.texture_plist);
        cc.director.runScene(new MenuScene());
    }, this);
};
cc.game.run();