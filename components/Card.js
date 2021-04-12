import {useEffect} from 'react';

export default function Card(props){

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.y > 0 && rect.y < window.innerHeight); 
    }

    useEffect(() => {

        document.onreadystatechange = () => {
            for(let ele of document.getElementsByClassName("work-hero-card")){
                ele.style.display = 'block';
                if(isInViewport(ele)){
                    ele.classList.add("animated");
                }
            }
        }

        for(let ele of document.getElementsByClassName("work-hero-card")){
            ele.style.display = 'block';
            if(isInViewport(ele) && !ele.classList.contains("animated")){
                ele.classList.add("animated");
            }
        }

        document.addEventListener('scroll', () => {
            if(window.location.href.includes('work')){
                for(let ele of document.getElementsByClassName("work-hero-card")){
                    if(isInViewport(ele)){
                        if(!ele.classList.contains("animated")){
                            ele.classList.add("animated");
                        }
                    }
                }
            }
        })
    }, []);

    function cards(item){
        return (
            <div className={`work-hero-card`} key={item.id}>
                <a href={item.url}>
                    <img className="work-card-hero-img" src={item.src} alt={item.alt} />
                    <h1>{item.h1}</h1>
                    <div id="work-text">{item.type}</div>
                </a>
            </div>
        );
    }
    return (
        <div className="card-container">
            {props.data.map(cards)}
        </div>
    );
}

