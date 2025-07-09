export function handleResize(canvas){
    const resize = ()=>{
        var width = window.innerWidth - 0; // Adjust for any fixed sidebar or padding
        var height = window.innerHeight- 25; // Adjust for any fixed header or footer height
        
        // Resize the canvas to fill the window
        canvas.width = width;
        canvas.height = height;
    }
    resize();
    window.addEventListener('resize',resize);
}