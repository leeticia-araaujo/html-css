let dark = localStorage.getItem('dark'); //guarda o último modo
const button = document.getElementById('switch');

const onDark = () =>{
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active');
}

const offDark = () =>{
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null);
}

if(dark === "active") onDark()

button.addEventListener("click", () => {
    dark = localStorage.getItem('dark')
    dark !== "active" ? onDark() : offDark()
})