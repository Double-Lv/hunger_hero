var Hero = cc.Sprite.extend({

    _animation:null,
    state:0,
    _fast:false,

    ctor:function () {
        this._super("#fly_0001.png"); 
        this._animation = new cc.Animation();
        for (var i = 1; i < 20; i++) {
            this._animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("fly_00" + (i<10?('0'+i):i) + ".png"));
        }
        this._animation.setDelayPerUnit(1/20);
        var action = cc.animate(this._animation).repeatForever();
        this.runAction(action);
        this._fast = false;

        return true;
    },

    toggleSpeed:function(fast) {
        if(fast == this._fast)
            return;
        this._fast = fast;

        this.stopAllActions();
        if(!fast)
            this._animation.setDelayPerUnit(1/20);
        else
            this._animation.setDelayPerUnit(1/60);
        var action = cc.animate(this._animation).repeatForever();
        this.runAction(action);
    },

    onExit: function () {
        this._super();
        this._animation.release();
    }

});