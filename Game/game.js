/**
 * 
 * This game was designed with a different font in mind, install the Star Jedi Rounded font here: http://www.fontspace.com/category/star%20wars
 * Once installed, restart your browser to immerse yourself in the experience. :D
 * 
 */

/**
   ▄█   ▄█▄    ▄████████ ▀█████████▄     ▄████████  ▄█  
  ███ ▄███▀   ███    ███   ███    ███   ███    ███ ███  
  ███▐██▀     ███    █▀    ███    ███   ███    ███ ███▌ 
 ▄█████▀     ▄███▄▄▄      ▄███▄▄▄██▀    ███    ███ ███▌ 
▀▀█████▄    ▀▀███▀▀▀     ▀▀███▀▀▀██▄  ▀███████████ ███▌ 
  ███▐██▄     ███    █▄    ███    ██▄   ███    ███ ███  
  ███ ▀███▄   ███    ███   ███    ███   ███    ███ ███  
  ███   ▀█▀   ██████████ ▄█████████▀    ███    █▀  █▀   
  ▀                                                     
________             _________            __________                     
___  __ \__________________  /___  _________  /___(_)____________________
__  /_/ /_  ___/  __ \  __  /_  / / /  ___/  __/_  /_  __ \_  __ \_  ___/
_  ____/_  /   / /_/ / /_/ / / /_/ // /__ / /_ _  / / /_/ /  / / /(__  ) 
/_/     /_/    \____/\__,_/  \__,_/ \___/ \__/ /_/  \____//_/ /_//____/  

- ⠠⠠⠉⠕⠙⠑⠀⠠⠠⠊⠎⠀⠠⠠⠏⠕⠑⠞⠗⠽ - C O D E  I S  P O E T R Y = -.-. --- -.. .   .. ...   .--. --- . - .-. -.-- =
 */

/** --- CONSTANTS --- **/
var NUMBER_OF_ARCS = 37;
var MENU_STAR_SIZE = 2;
var MENU_LOGO_INCREASE = 8;

/** --- DYNAMIC GLOBAL VARIABLES --- **/
var currScreen = "loading";
var transitionFill = 0;
var transition = null;
var transitionFirstTime = false;
var keys = [];
var mouseOverButton = "";
var cacheImageNo = 0;
var menuStarsPos = [];
for(var i = 0; i < 300; i++) {
    menuStarsPos.push({x: random(0, width), y: random(0, height)});
}
var menuLogoSize = 0;
var playLogoSize = 3.5;

/** --- UTILITY FUNCTIONS --- **/
var button = function(x, y, w, h, r, t, ts, tf, htf, f, hf) {
    if(dist(x, y, mouseX, mouseY) < w / 2) {
        if(mouseIsPressed) {
            mouseOverButton = t;
        }
        fill(hf);
    } else {
        fill(f);
    }
    noStroke();
    ellipse(x, y, w, h);
    if(dist(x, y, mouseX, mouseY) < w / 2) {
        fill(htf);
    } else {
        fill(tf);
    }
    textAlign(CENTER, CENTER);
    textSize(ts);
    text(t, x, y);
};
var cacheImage = function(imgFunction, w, h) {
    var c = createGraphics(w, h, JAVA2D);
    if(!c) {
        return;
    }
    
    c = imgFunction(c);
    
    return(c.get());
};

/** --- RENDERING & INPUT --- **/
var PreCache = {
    starWarsLogo: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(0);
        c.pushMatrix();
        c.scale(0.7);
        c.translate(230, -30);
        //s & t
        c.beginShape();
            c.vertex(193,112);
            c.vertex(71,112);
            c.bezierVertex(47,115,46,142,71,162);
            c.vertex(2,162);
            c.vertex(2,191);
            c.vertex(87,191);
            c.bezierVertex(130,171,91,136,91,136);
            c.vertex(127,136);
            c.vertex(127,191);
            c.vertex(158,191);
            c.vertex(158,136);
            c.vertex(193,136);
            c.vertex(193,110);
        c.endShape();
        //a
        c.beginShape();
            c.vertex(206,112);
            c.vertex(182,191);
            c.vertex(211,191);
            c.vertex(216,179);
            c.vertex(242,179);
            c.vertex(246,191);
            c.vertex(277,191);
            c.vertex(252,112);
            c.vertex(205.0,112);
        c.endShape();
        c.beginShape();
            c.vertex(230,137);
            c.vertex(223,156);
            c.vertex(236,156);
            c.vertex(230,137);
        c.endShape();
        //R
        c.beginShape();
            c.vertex(284,112);
            c.vertex(284,191);
            c.vertex(314,191);
            c.vertex(314,170);
            c.vertex(338,191);
            c.vertex(395,191);
            c.vertex(395,162);
            c.vertex(351,162);
            c.bezierVertex(376,140,360,118,351,112);
            c.vertex(282,112);
        c.endShape();
        c.beginShape();
            c.vertex(316,133);
            c.vertex(336,133);
            c.bezierVertex(339,138,336,143,336,143);
            c.vertex(316,143);
            c.vertex(316,131);
        c.endShape();
        //translate(0,25);
        //W
        c.beginShape();
            c.vertex(36,199);
            c.vertex(1,199);
            c.vertex(29,280);
            c.vertex(55,280);
            c.vertex(65,250);
            c.vertex(75,280);
            c.vertex(103,280);
            c.vertex(125,199);
            c.vertex(96,199);
            c.vertex(91,217);
            c.vertex(84,199);
            c.vertex(48,199);
            c.vertex(42,217);
            c.vertex(36,199);
        c.endShape();
        //a
        c.pushMatrix();
        c.translate(-64,87);
        c.beginShape();
            c.vertex(206,112);
            c.vertex(182,192);
            c.vertex(211,192);
            c.vertex(216,179);
            c.vertex(242,179);
            c.vertex(246,192);
            c.vertex(277,192);
            c.vertex(252,112);
            c.vertex(205.0,112);
        c.endShape();
        c.beginShape();
            c.vertex(230,137);
            c.vertex(223,156);
            c.vertex(236,156);
            c.vertex(230,137);
        c.endShape();
        c.popMatrix();
        c.pushMatrix();
        c.translate(-63,88);
        //R
        c.beginShape();
            c.vertex(284,112);
            c.vertex(284,191);
            c.vertex(314,191);
            c.vertex(314,170);
            c.vertex(338,191);
            c.vertex(416,191);
            c.bezierVertex(416,191,456,172,419,137);
            c.vertex(457,137);
            c.vertex(457,112);
            c.vertex(408,112);
            c.bezierVertex(362,120,388,155,395,162);
            c.vertex(351,162);
            c.bezierVertex(376,140,360,118,351,112);
            c.vertex(282,112);
        c.endShape();
        c.beginShape();
            c.vertex(316,133);
            c.vertex(336,133);
            c.bezierVertex(339,138,336,143,336,143);
            c.vertex(316,143);
            c.vertex(316,131);
        c.endShape();
        c.popMatrix();
        c.popMatrix();
        
        return c;
    },
    red: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 0, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    green: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(13, 255, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    blue: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(0, 21, 255);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    yellow: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 234, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    orange: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 170, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    }
};
var Cache = {
    Bitmap: {
        
    },
    Sound: {
    }
};
var Loading = {
    draw: function() {
        background(0, 0, 0);
        
        var counter = 0;
        for(var i in PreCache) {
            if(counter === cacheImageNo) {
                Cache.Bitmap[i] = cacheImage(PreCache[i], width, height);
                cacheImageNo++;
                break;
            }
            counter++;
        }
        strokeCap(SQUARE);
        colorMode(HSB);
        // Gives the Shadow
        stroke(frameCount * 0.2 % 255, 255, 255, 80);
        strokeWeight(3);
        // Draws the Shadow
        for(var i = 1; i < NUMBER_OF_ARCS; i++) {
            arc(width / 2, height / 2, (NUMBER_OF_ARCS + 1) * 20 + -i * 15, (NUMBER_OF_ARCS + 1) * 20 + -i * 15, frameCount / 2 * i % 360 - 180, frameCount / 2 * i % 360);
        }
        strokeWeight(3);
        // Controls Color
        stroke(frameCount * 0.2 % 255, 255, 255);
        noFill();
        // Draws the main arcs
        for(var i = 1; i < NUMBER_OF_ARCS; i++) {
            arc(width / 2, height / 2, (NUMBER_OF_ARCS + 1) * 20 + -i * 15, (NUMBER_OF_ARCS + 1) * 20 + -i * 15, frameCount / 2 * i % 360 - 180, frameCount / 2 * i % 360);
        }
        colorMode(RGB);
        var counter2 = 0;
        for(var i in Cache.Bitmap) {
            if(counter2 === cacheImageNo - 1) {
                image(Cache.Bitmap[i], width / 2, 300, 120, 120);
                if(counter2 === Object.keys(PreCache).length-1) {
                    currScreen = "menu";
                    transitionFill -= 5;
                }
                break;
            }
            counter2++;
        }
    }
};
var Menu = {
    draw: function() {
        background(0, 0, 0);
        fill(255, 255, 255);
        for(var i = 0; i < menuStarsPos.length; i++) {
            ellipse(menuStarsPos[i].x, menuStarsPos[i].y, MENU_STAR_SIZE, MENU_STAR_SIZE);
        }
        image(Cache.Bitmap.starWarsLogo, width / 2, height / 2, menuLogoSize, menuLogoSize);
        fill(255, 232, 31);
        textSize(40);
        text("The Final Frontier", 300, 220);
        button(300, 350, 125, 125, 10, "Play", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0));
        button(180, 350, 80, 80, 10, "options", 15, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0));
        button(420, 350, 80, 80, 10, "Credits", 15, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0));
        if(menuLogoSize < width) {
            menuLogoSize += MENU_LOGO_INCREASE;
        }
    }
};
var Play = {
    draw: function() {
        background(0, 0, 0);
        fill(255, 255, 255);
        for(var i = 0; i < menuStarsPos.length; i++) {
            ellipse(menuStarsPos[i].x, menuStarsPos[i].y, MENU_STAR_SIZE, MENU_STAR_SIZE);
        }
        pushMatrix();
            translate(width / 2, height / 2 + width / 4 * playLogoSize);
            scale(playLogoSize);
            image(Cache.Bitmap.starWarsLogo, 0, 0);
        popMatrix();
        if(playLogoSize > 0) {
            playLogoSize -= 0.01 * playLogoSize;
        }
    }
};
var GameHandler = {
    transitionScene: function(scene) {
        if(transitionFill < 255 && transition) {
            transitionFill += 2;
        } else if(transitionFill > -1 && transition === false) {
            transitionFill -= 2;
        } else if(transitionFill >= 255 && transition) {
            transition = false;
        } else if(transitionFill <= -3 && transition === false) {
            transition = null;
        } else if(transition === null && transitionFill < -1) {
            transition = true;
        }
        if(!transition && transitionFill > -3) {
            scene.draw();
        }
        fill(0, 0, 0, transitionFill);
        rect(width / 2, height / 2, width, height);
    },
    update: function() {
        // Default Styling
        noStroke();
        strokeWeight(1);
        rectMode(CENTER);
        imageMode(CENTER);
        textAlign(CENTER, CENTER);
        textFont(createFont("Star Jedi Rounded"));
        mouseOverButton = "";
        
        switch(currScreen) {
            case "loading":
                Loading.draw();
                break;
            case "menu":
                this.transitionScene(Menu);
                break;
            case "play":
                this.transitionScene(Play);
                break;
        }
    }
};
mouseReleased = function() {
    if(mouseOverButton !== "") {
        currScreen = mouseOverButton.toLowerCase();
        transitionFill -= 5;
    }
};
draw = function() {
    GameHandler.update();
};
var setLoopThrowTimer = function() {
    this[["KAInfiniteLoopSetTimeout"][0]](40000);
};
setLoopThrowTimer();
