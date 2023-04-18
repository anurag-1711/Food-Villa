import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        
        // console.log("Parent - constructor");
    }

    componentDidMount() {
        // Best place to make API call

        // console.log("Parent - componentDidMount");
    }

    render() {
        // console.log("Parent - render");
        return (
            <div className='text-center bg-rose-50 '>
                <h1 className='text-4xl font-bold m-4'>About Us</h1>
                <p className='font-sans m-2'>
                    Hi, I am Anurag, an undergraduate with a focus on React Development.
                </p>
                <Profile name={" First Child"} />
                {/* <ProfileFunctionalComponent /> */}
            </div>
        );
    }
}

export default About;

/*****
 * 
 * Parent constructor
 * Parent render
 * 
 *   render phase
 * 
    * Child - constructor First Child
    * Child - render First Child
    * 
    * Child - constructor Second Child
    * Child - render Second Child
    * 
*    commit phase
    * 
    * Child - componentDidMount First Child
    * Child - componentDidMount Second Child
 * 
 * Parent componentDidMount
 * 
 * 
 */

