import React,{Component} from "react";
import './dashboard.scss';
import {connect} from "react-redux"
import {Route, Switch} from "react-router-dom";
import {fetchUser} from "../../Actions/userAction";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Profile from "../Profile";
import Create from "../Create";
class Dashboard extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const {user}=this.props;
        return (
            <div className={"dashboard"}>
                <NavBar history={this.props.history} user={user}/>
                <Switch>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Route exact path={"/"} component={Create}/>
                </Switch>
                <div className="dashboard-content m-auto">
                    {/*------------------ To be done later ---------*/}
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {user:state.userReducer.user}
}
const mapDispatchToProps={
    fetchUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);