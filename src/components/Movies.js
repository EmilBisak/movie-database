import React, { Component } from 'react';
// import filmovi from '../data/filmovi.json';
import './Movies.css';
import Movie from './Movie';
import { Link } from 'react-router-dom'


class Movies extends Component {

    state = {
        filmovi: [],
        isLoaded: false,
        sortMoviesVisible: false
    }

    componentDidMount() {
        fetch('https://baza-podataka.herokuapp.com/filmovi/')
            .then(res => res.json())
            .then(json => this.setState({
                filmovi: json,
                isLoaded: true
            }));
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
        this.setState({ filmovi: arr })
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
        this.setState({ filmovi: arr })
    }

    sortByYearFromNewest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return b.godina - a.godina
        })
        this.setState({ filmovi: arr })
    }

    sortByYearFromOldest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return a.godina - b.godina
        })
        this.setState({ filmovi : arr })
    }



    render() {
        const filmoviJSX = this.state.filmovi.map(film => {
            const { naziv, godina, slika, _id } = film
            return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={_id}>
                    <div className="movieBox">
                        <Link to={{
                            pathname: `singleMovie/${_id}`,
                            state: {
                                naziv, godina, slika, _id,
                            }
                        }}>
                            <Movie podaci={{ naziv, godina, slika, _id }} />
                        </Link ></div></div>
            )
        })

        return (
            <div>
                <div className="sortMovies" style={this.state.sortMoviesVisible ? { display: "block" } : { display: "none" }}>
                    <ul className="clearfix">
                        <li onClick={this.sortByAtoZAsc}><span>A - Z</span></li>
                        <li onClick={this.sortByAtoZADec}><span>Z - A</span></li>
                        <li onClick={this.sortByYearFromNewest}><span>Newest</span></li>
                        <li onClick={this.sortByYearFromOldest}><span>Oldest</span></li>
                    </ul>
                    <input type="text" placeholder="Search Movie" />
                </div>
                <input id="sortMoviesBtn" type="submit" onClick={this.toogleSortMovies} value={this.state.sortMoviesVisible ? "Hide" : "Sort Movie Menu"} />
                <h1>Pretrazi filmove</h1>
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

export default Movies;