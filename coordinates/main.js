const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

//사진이 로드 되기전 발생되는 현상 방지
addEventListener('load',()=>{
    document.addEventListener('mousemove',(event)=>{
        const x = event.clientX;
        const y = event.clientY;
        const targetRect = target.getBoundingClientRect();
        const targetHalfWidth = targetRect.width/2;
        const targetHalfHeight = targetRect.height/2;
    
        console.log(`${x} ${y}`);
        //성능 개선을 위해 left,top(layout 변경) -> tranform사용
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;
    
        target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
    
        tag.style.transform = `translate(${x}px,${y}px)`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
    
        tag.innerHTML = `${x}px,${y}px`
    })
})
