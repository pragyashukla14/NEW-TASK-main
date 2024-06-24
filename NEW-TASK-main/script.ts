var alertbutton: HTMLElement | null = document.getElementById('alertButton');
if (alertbutton) {
    alertbutton.addEventListener('mouseover', function(this: HTMLElement) 
    {
        this.style.backgroundColor = 'black';
    });
    alertbutton.addEventListener('mouseout', function(this: HTMLElement) 
    {
        this.style.backgroundColor = '';
    });
}
else {
    console.log("Button not found");
}




