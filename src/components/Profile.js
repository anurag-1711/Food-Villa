import { useEffect, useState } from 'react';

const Profile = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        // API call

        const timer = setInterval(() => {
            console.log("Anurag");
        }, 1000);


        // this is called when unmounting the component. (componentWillUnmount())
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <h2>
                Profile Functional Component written by {props.name}
            </h2>
            <div>Count = {count}</div>
            <button onClick={() => {
                setCount(count + 1)
                setCount2(count2 + 1)
            }}>Button</button>
            <div>Count2 = {count2}</div>
        </>
    );
}

export default Profile;