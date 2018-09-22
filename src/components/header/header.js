import React from 'react'
import { Link } from 'react-router'
import './header.scss'
import Logo from '../common/logo';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            searchUrl: '',
            apiKey: '87dfa1c669eea853da609d4968d294be'
        }
    }
    handleKeyUp(e){
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.state.apiKey;
            this.setState({searchUrl:searchUrl});
        }
    }
    handleChange(e){
        this.setState({searchTerm : e.target.value});    
    }
    render(){
        return(
            <header className="Header">
                <Logo />
                <div id="navigation" className="Navigation">
                    <nav>
                        <ul>
                            <li>Browse</li>
                            <li>My list</li>
                            <li>Top picks</li>
                            <li>Recent</li>
                        </ul>
                    </nav>
                </div>
                <div id="search" className="Search">
                    <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
                </div>
                <div className="UserProfile">
                    <div className="User">
                    <div className="name">Jack Oliver</div>
                    <div className="image"><img src="https://cryptoinbox.com/images/user-icon.svg" alt="profile" /></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
