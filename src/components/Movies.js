import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import filmovi from '../data/filmovi.json';
import './Movies.css';
import Movie from './Movie';
import { withAppContext } from '../store/AppContext';
import { getUrl } from '../config.api/api';


class Movies extends Component {

    state = {
        filmovi: [],
        filtered: [],
        sortMoviesVisible: false,
        isLoaded: false,
    }

    componentDidMount() {
        this.props.global.setFooterToBottom(true);
        fetch(getUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    filmovi: json,
                    filtered: json,
                    isLoaded: true,
                })
                this.props.global.setFooterToBottom(false);
            })
    }

    toogleSortMovies = () => {
        this.setState({ sortMoviesVisible: !this.state.sortMoviesVisible })
    }

    sortByAtoZAsc = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            let x = a.naziv.toLowerCase();
            let y = b.naziv.toLowerCase();

            if (x < y) {
                return -1;
            }
            if (y < x) {
                return 1
            }
            return 0;
        })
        this.setState({ filtered: arr })
    }

    sortByAtoZADec = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            let x = a.naziv.toLowerCase();
            let y = b.naziv.toLowerCase();

            if (x > y) {
                return -1;
            }
            if (y > x) {
                return 1
            }
            return 0;
        })
        this.setState({ filtered: arr })
    }

    sortByYearFromNewest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return b.godina - a.godina
        })
        this.setState({ filtered: arr })
    }

    sortByYearFromOldest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return a.godina - b.godina
        })
        this.setState({ filtered: arr })
    }

    searchMovies = event => {
        let movieName = event.target.value;
        let filtered = this.state.filmovi.filter(movie => {
            return movie.naziv.toLowerCase().indexOf(movieName.toLowerCase()) > -1
        })

        this.setState({ filtered })
        
        if (!!!filtered.length) {
            this.props.global.setFooterToBottom(true);
        } else {
            this.props.global.setFooterToBottom(false);
        }

    }

    render() {
        const filmoviJSX = this.state.filtered.map(film => {
            const { naziv, godina, slika, _id, comments } = film
            return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={_id}>
                    <div className="movieBox">
                        <Link to={{
                            pathname: `singleMovie/${_id}`,
                            state: {
                                naziv, godina, slika, _id, comments
                            }
                        }}>
                            <Movie podaci={{ naziv, godina, slika, _id, comments }} />
                        </Link ></div></div>
            )
        })

        return (
            <div>
                <input type="text" placeholder="Pretraži filmove" className="search-movie" onChange={this.searchMovies} />
                <div className="sortMovies" style={this.state.sortMoviesVisible ? { display: "block" } : { display: "none" }}>
                    <ul className="clearfix">
                        <li onClick={this.sortByAtoZAsc}><span>A - Z</span></li>
                        <li onClick={this.sortByAtoZADec}><span>Z - A</span></li>
                        <li onClick={this.sortByYearFromNewest}><span>Najnoviji</span></li>
                        <li onClick={this.sortByYearFromOldest}><span>Najstariji</span></li>
                    </ul>
                </div>
                <input id="sortMoviesBtn" type="submit" onClick={this.toogleSortMovies} value={this.state.sortMoviesVisible ? "Sakrij meni" : "Sortiraj filmove"} />
                {
                    this.state.isLoaded ?
                        <div className="container-fluid moviesHolder">
                            <div className="row">
                                {filmoviJSX}
                            </div>
                        </div> :
                        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading" />
                }
            </div >
        )
    }
}

export default withAppContext(Movies);