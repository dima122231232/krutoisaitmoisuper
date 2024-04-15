document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById('osnovaText');
    var telegramHeader = document.querySelector('.header__telegram');
    var parallaxImg = document.querySelector('.header__main-img');
    var cursor = document.querySelector('.cursor');
    var cursorDelayed = document.querySelector('.cursor-delayed');
    var lastDistance;
    var timer;
    var i = true;

    setTimeout(function() {
        text.style.opacity='1';
        var letters = text.textContent.split('');
            text.textContent = '';

            letters.forEach(function(letter, index) {
                var span = document.createElement('span');
                span.textContent = letter;
                span.classList.add('letter'); 
                text.appendChild(span);
            });
            var letterSpans = document.querySelectorAll('.letter');
            letterSpans.forEach(function(letterSpan, index) {
                setTimeout(function() {
                    letterSpan.classList.add('visible');
                }, index * 250);
            setTimeout(function() {
                text.style.animation = 'transformstart .8s'
            }, 3500);
            setTimeout(function() {
                text.style.fontSize = 'calc(var(--index)*9)';
                text.style.transform = 'translateX(-50%) translateY(40%)';
            }, 4300);
            setTimeout(function() {
                document.querySelector('.header').style.animation = 'header 1s';
            }, 4900);
            setTimeout(function() {
                text.style.animation = 'transformstart1 1s'
                document.querySelector('.header').style.top = '-100vh';
                document.getElementById('canvas').style.animation = 'fadeIn 3s';
                document.getElementById('canvas').style.opacity ='1';
                document.querySelector('.start_osnova').style.visibility ='visible';
                document.querySelector('.start_osnova').style.animation ='fadeIn 1.5s';
                document.querySelector('.start_osnova').style.opacity='1';
                
                
            }, 5300);
            setTimeout(function() {
                text.style.letterSpacing = "2.2vw";
                document.querySelector('.start_osnova').style.animation ='fadeNeIn 1s';
                document.querySelector('.osnova__text-clone').style.opacity = '1';
                document.querySelector('.start').style.opacity='1';
                document.querySelector('.start_osnova').style.opacity='0';
                // document.querySelector('.telegram-invis').style.opacity ='1';
                text.style.animation ='fadeNeIn 1s';
                text.style.opacity='0';
            }, 6300);
        });
    }, 1000);

    document.querySelector('.start_osnova').addEventListener('mouseenter', function() {
        setTimeout(function() {
            cursorDelayed.style.animation = 'curse .5s';
            cursorDelayed.style.height = 'calc(var(--index)*3.6)';
            cursorDelayed.style.width = 'calc(var(--index)*3.6)';
            cursorDelayed.style.opacity = '.8';
            // document.querySelector('.start').style.animation ='start 3s';
            // document.querySelector('.start').style.color ='#6f9576';
        }, 100);
        i = false;
    });

    document.querySelector('.start_osnova').addEventListener('mouseleave', function() {
        cursorDelayed.style.animation = 'curseEnd .25s';
        cursorDelayed.style.height = 'calc(var(--index)*1.2)';
        cursorDelayed.style.width = 'calc(var(--index)*1.2)';
        cursorDelayed.style.opacity = '1';
        // document.querySelector('.start').style.animation ='end 1s';
        // document.querySelector('.start').style.color ='#8AFF2F';
        i = true;
    });

    // telegramHeader.addEventListener('mouseenter', function() {
    //     setTimeout(function() {
    //         cursorDelayed.style.animation = 'curse .5s';
    //         cursorDelayed.style.height = 'calc(var(--index)*3.6)';
    //         cursorDelayed.style.width = 'calc(var(--index)*3.6)';
    //         cursorDelayed.style.opacity = '.8';
    //     }, 100);
    //     i = false;
    // });

    // telegramHeader.addEventListener('mouseleave', function() {
    //     cursorDelayed.style.animation = 'curseEnd .25s';
    //     cursorDelayed.style.height = 'calc(var(--index)*1.2)';
    //     cursorDelayed.style.width = 'calc(var(--index)*1.2)';
    //     cursorDelayed.style.opacity = '1';
    //     i = true;
    // });

    const hoverElements = document.querySelectorAll('.cursor-hover');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.querySelector('a').style.color = '#ff2d37'; 
        });

        element.addEventListener('mouseleave', function() {
            this.querySelector('a').style.color = '#080910';
        });
    });

    document.addEventListener('mousemove', function(e) {
        let moveX = (e.clientX - window.innerWidth / 2) / 150;
        let moveY = (e.clientY - window.innerHeight / 2) / 100;

        parallaxImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousemove', function(e) {
        setTimeout(function() {
            cursorDelayed.style.left = e.clientX + 'px';
            cursorDelayed.style.top = e.clientY + 'px';

        }, 70);
    });

    document.addEventListener('mousemove', function(e) {
        if (i) {
            var cursorRect = cursor.getBoundingClientRect();
            var cursorDelayedRect = cursorDelayed.getBoundingClientRect();

            var distanceX = cursorDelayedRect.left - cursorRect.left;
            var distanceY = cursorDelayedRect.top - cursorRect.top;
            var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            lastDistance = distance;

            if (distance < 29) {
                cursorDelayed.style.height = 'calc(var(--index)*1.2)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            } else if (distance > 29 && distance <= 59) {
                cursorDelayed.style.height = 'calc(var(--index)*1.05)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            } else if (distance > 60 && distance <= 89) {
                cursorDelayed.style.height = 'calc(var(--index)*0.9)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            } else if (distance > 90 && distance <= 120) {
                cursorDelayed.style.height = 'calc(var(--index)*0.8)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            } else {
                cursorDelayed.style.height = 'calc(var(--index)*0.7)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            }

            var deltaX = e.clientX - cursorDelayedRect.left;
            var deltaY = e.clientY - cursorDelayedRect.top;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            cursorDelayed.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
        }

    });

    document.addEventListener('mousemove', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            if (i) {
                cursorDelayed.style.height = 'calc(var(--index)*1.2)';
                cursorDelayed.style.width = 'calc(var(--index)*1.2)';
                cursorDelayed.style.opacity = '1';
            }
        }, 20);
    });

    parallaxImg.addEventListener('mouseenter', function() {
        parallaxImg.style.animation = 'rotate 1s';
        parallaxImg.addEventListener('animationend', function() {
            parallaxImg.style.animation = 'rotateEnd .5s';
        }, {
            once: true
        });
    });

    const rand = function(min, max) {
        return Math.random() * (max - min) + min;
    }

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'lighter';
    });

    let backgroundColors = ['#000', '#000'];
    let colors = [
        ['rgba(142, 255, 54, 0.65)', 'rgba(174, 244, 119, 0.65)'],
        ['rgba(66, 146, 4, 0.65)', 'rgba(39, 228, 155, 0.65)'],
        ['rgba(107, 202, 33, 0.65)', 'rgba(225, 240, 213, 0.65)']
    ];
    let count = 25; // Уменьшение количества частиц
    let blur = [5, 25]; // Уменьшение разброса радиуса размытия
    let radius = [1, 50]; // Уменьшение разброса радиуса частиц

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    let grd = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
    grd.addColorStop(0, backgroundColors[0]);
    grd.addColorStop(1, backgroundColors[1]);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let items = [];

    while (count--) {
        let thisRadius = rand(radius[0] * 3, radius[1] * 3);
        let thisBlur = rand(blur[0], blur[1]);
        let x = rand(0, canvas.width); // Изменено, чтобы частицы не появлялись за пределами экрана
        let y = rand(0, canvas.height); // Изменено, чтобы частицы не появлялись за пределами экрана
        let colorIndex = Math.floor(rand(0, 299) / 100);
        let colorOne = colors[colorIndex][0];
        let colorTwo = colors[colorIndex][1];

        ctx.beginPath();
        ctx.filter = `blur(${thisBlur}px)`;
        let grd = ctx.createLinearGradient(x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius);

        grd.addColorStop(0, colorOne);
        grd.addColorStop(1, colorTwo);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.arc(x, y, thisRadius, 0, Math.PI * 2);
        ctx.closePath();

        let directionX = Math.round(rand(-99, 99) / 100);
        let directionY = Math.round(rand(-99, 99) / 100);

        items.push({
            x: x,
            y: y,
            blur: thisBlur,
            radius: thisRadius,
            initialXDirection: directionX,
            initialYDirection: directionY,
            initialBlurDirection: directionX,
            colorOne: colorOne,
            colorTwo: colorTwo,
            gradient: [x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius],
        });
    }

    function changeCanvas(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let adjX = .5; // Уменьшение скорости анимации
        let adjY = .5; // Уменьшение скорости анимации
        let adjBlur = .5; // Уменьшение скорости анимации
        items.forEach(function(item) {
            if (item.x + (item.initialXDirection * adjX) >= canvas.width && item.initialXDirection !== 0 || item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0) {
                item.initialXDirection = item.initialXDirection * -1;
            }
            if (item.y + (item.initialYDirection * adjY) >= canvas.height && item.initialYDirection !== 0 || item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0) {
                item.initialYDirection = item.initialYDirection * -1;
            }

            if (item.blur + (item.initialBlurDirection * adjBlur) >= radius[1] && item.initialBlurDirection !== 0 || item.blur + (item.initialBlurDirection * adjBlur) <= radius[0] && item.initialBlurDirection !== 0) {
                item.initialBlurDirection *= -1;
            }

            item.x += (item.initialXDirection * adjX);
            item.y += (item.initialYDirection * adjY);
            item.blur += (item.initialBlurDirection * adjBlur);
            ctx.beginPath();
            ctx.filter = `blur(${item.blur}px)`;
            let grd = ctx.createLinearGradient(item.gradient[0], item.gradient[1], item.gradient[2], item.gradient[3]);
            grd.addColorStop(0, item.colorOne);
            grd.addColorStop(1, item.colorTwo);
            ctx.fillStyle = grd;
            ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        });
        window.requestAnimationFrame(changeCanvas);
    }

    window.requestAnimationFrame(changeCanvas);
});

function push(){
    console.log('asd');
    document.querySelector('.cursor-delayed').style.animation ='aboba .6s';
    document.querySelector('.cursor-delayed').style.height = 'calc(var(--index)*100)';
        document.querySelector('.cursor-delayed').style.width = 'calc(var(--index)*100)';
        document.querySelector('.cursor-delayed').style.opacity = '1';
        document.querySelector('.cursor-delayed').style.zIndex ='9999';
        
}