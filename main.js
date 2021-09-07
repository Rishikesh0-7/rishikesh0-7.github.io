const typed = new Typed("#typing-stuff", {
    strings: ["Programmer", "Python Developer ", "Discord Bot Developer","Tech Savvy" , "Web Developer"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
});


particlesJS.load('particles-js', 'particlesjs-config.json', () => {
    console.log('Particles.js config loaded!');
});



function gotoa() {
    document.getElementById('about-me').scrollIntoView(true);
}
function gotos() {
    document.getElementById('skills').scrollIntoView(true);
}
function gotop() {
    document.getElementById('projects').scrollIntoView(true);
}
function gotoc() {
    document.getElementById('contact').scrollIntoView(true);
}

function bars(){
    document.getElementById("navbar").style.width = "100%";
}

function closeNav(){
    document.getElementById("navbar").style.width = "0%";
}


function sendEmail() {
    const sub = document.getElementById("sub").value
    const mes = document.getElementById("message").value
    window.open(`mailto:rishikeshanandh@gmail.com?subject=${sub}&body=${mes}`)
}