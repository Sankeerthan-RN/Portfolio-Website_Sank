import { ReactTyped } from "react-typed";

export default function TypedComponent(){
    return (
        <div>
        <ReactTyped
            strings={['Software Engineer.', 'Full Stack Developer.']}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        </div>
    );
};


