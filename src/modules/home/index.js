import React from "react";
import BaseComponent from '../baseComponent'
import HomeComponent from './homeComponent'
import Utils, {dispatchAction} from "../../utility";
import {connect} from "react-redux";
import {actionsConst, apiFailureConstants, cookiesConstants, pathConstants} from "../../constants";
import {sessionManager} from "../../managers/sessionManager";

class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }

    onChangeEvent = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    render() {
        return (

            <HomeComponent
                onChangeEvent={this.onChangeEvent}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user, userDetails: state.user.userDetails, isLoggedIn: state.user.isLoggedIn}
};

export default connect(mapStateToProps, {dispatchAction})(Home);
