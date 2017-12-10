import React, {Component} from 'react';

import {connect} from 'react-redux';
import {mstp} from "../redux/utils";
import shallowEqual from "react-redux/src/utils/shallowEqual";


@connect(mstp('settings'))
export default class Navbar extends Component {

    static defaultProps = {settings: {}};

    state = {
        showAllDomains: false,
        showOnlyVulnerable: false,
    };

    componentWillReceiveProps = (newProps) => this.setState({...newProps['settings']});

    onSettingChange = (cmp) => {
        let state = {[cmp]: !this.state[cmp]};

        this.setState(state)
    };

    render = () =>
        <ul id="slide-out" className="side-nav">
            <li>
                <div className="user-view">
                    <a href="#">
                        <div className="background">
                            <img src="/img/background_new.jpg"/>
                        </div>
                        <span className="white-text name">Settings</span>
                    </a>
                </div>
            </li>
            <li>
                <div className="switch">
                    <label>
                        <input id="show_all_domains" type="checkbox" checked={this.state.showAllDomains} onChange={() => this.onSettingChange('showAllDomains')}/>
                        <span className="lever"/>
                        Show all domains
                    </label>
                </div>
            </li>
            <li>
                <div className="switch">
                    <label>
                        <input id="show_only_vulnerable" type="checkbox" checked={this.state.showOnlyVulnerable} onChange={() => this.onSettingChange('showOnlyVulnerable')}/>
                        <span className="lever"/>
                        Show only vulnerable
                    </label>
                </div>
            </li>
            <li><div className="divider"/></li>
            <li><a href="#"><i className="material-icons delete">delete</i>Clear all Data</a></li>
        </ul>
}