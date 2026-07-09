import {useEffect,useRef,useState} from "react";

function CountUp({end,duration=2000,suffix=""}){
    const [count,setCount]=useState(0);
    const [started,setStarted]=useState(false);
    const ref=useRef(null);

    useEffect(()=>{
        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setStarted(true);
                    observer.disconnect();
                }
            },
            {threshold:0.5}
        );

        if(ref.current){
            observer.observe(ref.current);
        }

        return()=>observer.disconnect();
    },[]);

    useEffect(()=>{
        if(!started)return;

        let startTime;

        function animate(time){
            if(!startTime)startTime=time;

            const progress=Math.min((time-startTime)/duration,1);

            setCount(Math.floor(progress*end));

            if(progress<1){
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    },[started,end,duration]);

    return(
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default CountUp;