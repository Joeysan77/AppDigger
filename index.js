var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    document.getElementById("container").style.paddingTop = "60px"
  } else {
  document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    a = 0
    document.getElementById("container").style.paddingTop = "10px"
    document.getElementById("header").style.top = "-53px";
  }
  prevScrollpos = currentScrollPos;
}
a = 1
function turn() {
    if (a == 1) {
        document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    document.getElementById("container").style.paddingTop = "10px"
    document.getElementById("header").style.top = "-53px";
    a = 0
    }
    else if (a == 0) {
        document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    document.getElementById("container").style.paddingTop = "60px"
    }
}
function darke() {
    dark = document.getElementById("dark")
    dark.style.display = "block"
    function dark1() {
        dark.style.background = "rgb(0,0,0,0.5)"
        dark.style.backdropFilter = "blur(10px)"
    }
   setTimeout(dark1 , 50)
}

function darkk() {
    dark = document.getElementById("dark")
    dark.style.background = "transparent"
    dark.style.backdropFilter = "blur(0px)"
    function darkk1() {
        
        dark.style.display = "none"
    }
   setTimeout(darkk1 , 500)
}
function men() {
    menn = document.getElementById("menu")
    sediv = document.getElementById("search-div")
    too = document.getElementById("tool")
    pla = document.getElementById("platf")
    too2 = document.getElementById("tool2")
    menn.style.display = "block"
    function mer() {
    menn.style.opacity = "1"
    menn.style.left = "0"
    setTimeout(men1 , 300)
        function men1() {
        too.style.opacity = "1"
        setTimeout(men2 , 300)
        function men2() {  
            too2.style.opacity = "1"
            setTimeout(men3 , 300)
            function men3() {
            sediv.style.opacity = "1"
                
                setTimeout(men4 , 300)
                function men4() {
                    pla.style.opacity = "1"
                }
            }
        }
    }
  }
    darke()
    setTimeout(mer , 50)
}
function closer() {
    menn = document.getElementById("menu")
    sediv = document.getElementById("search-div")
    too = document.getElementById("tool")
    pla = document.getElementById("platf")
    too2 = document.getElementById("tool2")
    sediv.style.opacity = "0"
    too.style.opacity = "0"
    pla.style.opacity = "0"
    too2.style.opacity = "0"
    function menn1() {
        menn.style.left = "100%"
        menn.style.opacity = "0"
        function menn2() {
            menn.style.display = "none"
        }
        setTimeout(menn2 , 500)
    }
    setTimeout(menn1 , 150)
    setTimeout(darkk , 150)
}
function sear() {

    sediv = document.getElementById("seh")
    seh = document.getElementById("sec")
   seh.style.position = "fixed"
   sediv.style.display = "flex"
    function searc() {
    seh.style.height = "100%"
    seh.style.width = "100%"
    seh.style.top = "0"
    seh.style.backdropFilter = "blur(20px)"
    seh.style.opacity = "1"
    sediv.style.opacity = "1"
    }
    setTimeout(searc ,100)
}
function searr() {

    seh = document.getElementById("sec")
    sediv = document.getElementById("seh")
    seh.style.height = ""
    seh.style.width = "100%"
    seh.style.backdropFilter = "blur(0px)"
    sediv.style.opacity = "0"
    seh.style.top= "32.5%"
    function searc() {
    seh.style.position = ""
   sediv.style.display = "none"
    }
    setTimeout(searc ,250)
}
function showsub() {
    sub = document.getElementById("sub")
    sub.style.display = "block"
    function ssub() {
        sub.style.opacity = "1"
        sub.style.bottom = "0"
        
    }
    setTimeout(ssub , 50)
}
function hidesub() {
    sub = document.getElementById("sub")
    
    sub.style.opacity = "0"
        sub.style.bottom = "-80%"
    function hsub() {
        sub.style.display = "none"
        
    }
    setTimeout(hsub , 300)
}
function minec() {
    document.getElementById("subimg").src = "game-images/small-minecraft.jpg"
    document.getElementById('subp').innerHTML = "MOJANG - Minecraft Bedrock (MCPE)"
    document.getElementById("minfo").innerHTML = 'Dive into an open world of building, crafting and survival. Gather resources, survive the night, and build whatever you can imagine one block at a time. Explore and craft your way through a completely open world where you can play with friends, build a city, start a farm, mine deep into the ground, face mysterious enemies, or just experiment to the limits of your imagination!'
}
function freef() {
    document.getElementById("subimg").src = "game-images/small-freefire.jpg"
    document.getElementById('subp').innerHTML = "GARENA - FreeFire - mobile"
    document.getElementById("minfo").innerHTML = 'Free Fire is a world-famous survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible. Drive vehicles to explore the vast map, hide in the wild, or become invisible by proning under grass or rifts. Ambush, snipe, survive, there is only one goal: to survive and answer the call of duty.'
    showsub()
    darke()
}
function pugbm() {
    document.getElementById("subimg").src = "game-images/small-pugb.jpg"
    document.getElementById('subp').innerHTML = "PUGB - mobile"
    document.getElementById("minfo").innerHTML = "PUBG MOBILE offers the most intense multiplayer battles on your mobile phone. Join the battle, gear up, and play to win. Survive in epic 100-player battles in Classic Mode, Payload , fast-paced 4v4 Arena battles, and Infection Mode. Survival is all that matters. Be the last one standing. Accept missions and fire at will!"
    showsub()
    darke()
}