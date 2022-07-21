import window from "window";
import document from "document";
import Splide from "@splidejs/splide";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

var images = ["IMG_2818", "IMG_2825", "IMG_2827", "IMG_2828", "IMG_2829", "IMG_4456", "IMG_4460", "IMG_4512", "IMG_4514", "IMG_4518", "IMG_0901", "IMG_4476", "IMG_4504", "IMG_0837", "IMG_0836"];

function support_format_webp() {
    var elem = document.createElement("canvas");

    if (!!(elem.getContext && elem.getContext("2d"))) {
        // was able or not to get WebP representation
        return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
    } else {
        // very old browser like IE 8, canvas not supported
        return false;
    }
}

shuffle(images);
document.querySelectorAll(".p-img").forEach((el, i) => {
    var src = "/img/" + images[i] + (support_format_webp() ? ".webp" : ".jpg");
    el.src = src;
});

document.querySelectorAll(".splide").forEach((elm) => {
    new Splide(elm, {
        arrows: false,
        type: "loop",
        snap: true,
        perPage: 4,
        perMove: 1,
        gap: ".5rem",
        breakpoints: {
            640: {
                perPage: 2,
            },
            1280: {
                perPage: 3,
            },
        },
    }).mount();
});

// if native lazy loading is not handled by browser, fallback to intersection observer
var lazyImages = document.querySelectorAll(".splide");
let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var mapping = [];
            entry.target.querySelectorAll("img.lazyload").forEach((lazyImage) => {
                mapping.push(
                    new Promise(() => {
                        lazyImage.src = lazyImage.dataset.src;
                        delete lazyImage.dataset.src;
                        lazyImage.classList.remove("lazyload");
                    })
                );
                lazyImageObserver.unobserve(lazyImage);
            });
            Promise.all(mapping);
        }
    });
});

lazyImages.forEach((x) => {
    lazyImageObserver.observe(x);
});

var showingNav = false;
var showingHero = window.scrollY > 700;
var herobanner = document.querySelector(".hero-banner");
var navbar = document.querySelectorAll(".nav");

function resizeHero() {
    if (window.scrollY < 700) {
        if (showingHero) {
            herobanner.style["max-height"] = ((1000 - window.scrollY) / 1000) * 100 + "%";
            herobanner.style.bottom = "-" + window.scrollY / 4 + "px";
        } else {
            showingHero = true;
            herobanner.classList.remove("hidden");
        }
    } else {
        if (showingHero) {
            showingHero = false;
            herobanner.classList.add("hidden");
        }
    }
}

function toggleNav() {
    if (window.scrollY > 400 && !showingNav) {
        navbar.forEach((x) => x.classList.add("nav-fixed"));
        showingNav = true;
    } else if (window.scrollY < 400 && showingNav) {
        navbar.forEach((x) => x.classList.remove("nav-fixed"));
        showingNav = false;
    }
}

document.addEventListener("scroll", function (e) {
    resizeHero();
    toggleNav();
});

document.querySelectorAll("nav-link").forEach((x) =>
    x.addEventListener("click", function (e) {
        var divID = this.attributes["href"].value;
        //console.log(divID);
        var div = document.querySelector(`#${divID}`);

        window.scrollTo({ top: div.offsetTop - 40 });
    })
);

var isComing = "No";
var data = {
    Responses: []
};

var nameSection = document.querySelector('#rsvp .attendies');

var count = 2;

document.querySelector("#rsvp .show-rsvp-button").addEventListener("click", function (e) {
    delete e.target.nextElementSibling.dataset.state;
    e.target.dataset.state = "hidden";
});

document.querySelector("#rsvp .no-button").addEventListener("click", function (e) {
    var section = e.target.closest('.attendence-section');
    var nameSection = section.nextElementSibling;
    delete nameSection.dataset.state;
    section.dataset.state = "hidden";

    isComing = "No";

    nameSection.querySelector('.hidden-section').dataset.state = "hidden";    
});

document.querySelector("#rsvp .yes-button").addEventListener("click", function (e) {
    var section = e.target.closest('.attendence-section');
    delete section.nextElementSibling.dataset.state;
    section.dataset.state = "hidden";

    isComing = "Yes";

    document.querySelectorAll('#rsvp input[type="text"]').forEach(x => x.value = '');    
});


document.querySelector("#rsvp .add-button").addEventListener("click", function (e) {
    var copy = document.querySelector('#rsvp .attendie').cloneNode(true);
    var fieldset = copy.querySelector('fieldset');    
    fieldset.id = fieldset.id.split('-')[0] + '-' + count;
    var group = fieldset.id;

    fieldset.querySelectorAll('input').forEach(x => {
        x.id += count;
        x.attributes['name'].value = group;        
    });
    copy.querySelectorAll('input[type="text"]').forEach(x => {        
        x.value = '';  
    });
    fieldset.querySelectorAll('label').forEach(x => x.attributes['for'].value += count);
    

    count++;
    nameSection.appendChild(copy);
});

document.querySelector('#rsvp .review-button').addEventListener('click', function (e) {
    var section = e.target.closest('.name-section');
    var submitSection = section.nextElementSibling;    
    delete submitSection.dataset.state;
    document.querySelectorAll('.name-section .attendie').forEach(x => {
        var name = x.querySelector('input[name="Name"]').value;
        if (name){

            var dinnerOptions = x.querySelectorAll('.dinner-section input');        
            console.log(dinnerOptions);
            var dinner = "";
            for(var dinnerOption of dinnerOptions){
                console.log(dinnerOption);
                if (dinnerOption.checked){
                    dinner = dinnerOption.value;
                    break;
                }
            }

            var allergies = x.querySelector('input[name="Allergy"]').value;

            if (isComing == 'Yes') {
                data.Responses.push({
                    IsComing: isComing,
                    Name: name,
                    Dinner: dinner,
                    Allergies: allergies
                });       
            }else{
                data.Responses.push({
                    IsComing: isComing,
                    Name: name,            
                });       
            }
        }
    });

    
    var y = document.createElement('div');
    y.className = 'flex flex-col w-full'
    if (isComing == "No"){
        y.innerHTML = `<div>The following ${data.Responses.length} people can't come: </div>${data.Responses.map(x => '<div>' + x.Name + '</div>').join('\n')}`;
    } else {
        y.innerHTML = `<div>You are coming with ${data.Responses.length} people. You've submitted the following responses: </div>${data.Responses.map(x => '<div>' + x.Name + ' wants ' + x.Dinner + ' for dinner</div>').join('\n')}`;
    }

    submitSection.querySelector('.review-section').appendChild(y);

    section.dataset.state = "hidden";
});

document.querySelector('.submit-button').addEventListener("click", function (event) {
    event.preventDefault();    
    var message = document.querySelector('#submit-message');
    var submitSection = document.querySelector('.submit-section');

    if (data.Responses.length > 0) {   

    fetch("/api/RSVPForm", {
        method: "POST",        
        body: JSON.stringify(data),
    })
        .then(function (response) {
            submitSection.dataset.state = 'hidden';
            delete message.dataset.state;
            if (response.ok) {
                message.innerHTML = "Thank you for submitting an RSVP!";
                return;
            }
            message.innerHTML =
                'Something went wrong submitting your RSVP. Please refresh and try again';
            return Promise.reject(response);
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {            
            submitSection.dataset.state = 'hidden';
            delete message.dataset.state;
            message.innerHTML = "Thank you for submitting an RSVP!";
        });
    }
});

resizeHero();
toggleNav();
