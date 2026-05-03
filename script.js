window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(){
    let darkButton = document.getElementById("btn-modeSwitch")
    darkButton.addEventListener("click", toggleDark);
}
function toggleDark(){
    document.body.classList.toggle("darkmode");
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const div = document.querySelector(".typing");


async function startTyping(){
    const response = await fetch('data.json');
    const data =  await response.json();
    const roles = data.descriptions;

    let roleIndex = 0;
    let charIndex = 0;
    const target = document.querySelector(".typing");

    function type(){
        if (charIndex < roles[roleIndex].length) {/*if there are more characters in role add one more character*/
            target.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    function erase() {
        if (charIndex > 0) {
            // Backspacing effect (optional)
            target.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            // Move to next word in the JSON array
            roleIndex = (roleIndex + 1) % roles.length; 
            type();
        }
    }

    type();
    
}
startTyping();
