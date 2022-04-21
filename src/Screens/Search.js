import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    render() {
        return (
            <div>
            <ul class="menu">
              <li title="home"><Link to="/" class="home">home</Link></li>
              <li title="search"><Link to="/search" class="active search">search</Link></li>
              <li title="pencil"><Link to="/products" class="pencil">pencil</Link></li>
              <li title="about"><Link to="/products" class="about">about</Link></li>
              <li title="archive"><Link to="/products" class="archive">archive</Link></li>
              <li title="contact"><Link to="/products" class="contact">Linked</Link></li>
            
            </ul>


            <div>
                <center>
                    SEARCH
                </center>
            </div>
            </div>
        );
    }
}

export default Search;