export function handleResize(canvas){
    const resize = ()=>{
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        // Resize the canvas to fill the window
        canvas.width = width;
        canvas.height = height;
    }
    resize();
    window.addEventListener('resize',resize);
}