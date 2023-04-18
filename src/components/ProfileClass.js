import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        // create state
        this.state = ({
            userInfo: {
                name: "dummy name"
            },
            count: 0
        })
        // console.log("Child - constructor" + this.props.name);
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/anurag-1711');
        const json = await data.json();

        // console.log(json);

        this.setState({
            userInfo: {
                name: json.name,
                avatar_url: json.avatar_url
            },
            count: 1
        })


        // console.log("Child -  componentDidMount" + this.props.name);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count != prevState.count) {
            // 
        }

        // this.timer = setInterval(() => {
        //     console.log("Anurag");
        // }, 1000);

        // console.log("ComponentDidUpdate");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        // console.log("ComponentWillUnmount");
    }

    render() {
        // console.log("Child - render" + this.props.name);

        return (
            <>
                <img className='w-56 rounded-full m-auto' src={this.state.userInfo.avatar_url} />
                {/* <h2>Profile Class Component by {this.state.userInfo.name}</h2> */}
            </>
        );
    }
}

export default Profile;