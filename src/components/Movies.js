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
        selectedFilter: "",
    }

    componentDidMount() {
        this.getAllMovies();
    }

    getAllMovies = () => {
        this.props.global.handleFooterPositioning(true);
        fetch(getUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    filmovi: json,
                    filtered: json,
                    isLoaded: true,
                })
                this.props.global.handleFooterPositioning(false);
            })
            .catch(error => {
                console.log(error)
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
        this.setState({
            filtered: arr,
            selectedFilter: "A-Z"
        })
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
        this.setState({
            filtered: arr,
            selectedFilter: "Z-A"
        })
    }

    sortByYearFromNewest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return b.godina - a.godina
        })
        this.setState({
            filtered: arr,
            selectedFilter: "newest"
        })
    }

    sortByYearFromOldest = () => {
        let arr = this.state.filmovi.sort((a, b) => {
            return a.godina - b.godina
        })
        this.setState({
            filtered: arr,
            selectedFilter: "oldest"
        })
    }

    searchMovies = event => {
        let movieName = event.target.value;
        let filtered = this.state.filmovi.filter(movie => {
            return movie.naziv.toLowerCase().indexOf(movieName.toLowerCase()) > -1
        })

        this.setState({ filtered })

        if (!!!filtered.length) {
            this.props.global.handleFooterPositioning(true);
        } else {
            this.props.global.handleFooterPositioning(false);
        }

    }

    render() {
        const { selectedFilter } = this.state
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
                            <Movie podaci={{ naziv, godina, slika, _id, comments }} getAllMovies={this.getAllMovies} />
                        </Link ></div></div>
            )
        })

        let selectedFilterTitle;

        switch (selectedFilter) {
            case "A-Z":
                selectedFilterTitle = selectedFilter
                break;
            case "Z-A":
                selectedFilterTitle = selectedFilter
                break;
            case "newest":
                selectedFilterTitle = "Najnoviji"
                break;
            case "oldest":
                selectedFilterTitle = "Najstariji"
                break;

            default:
                selectedFilterTitle = ""
                break;
        }

        return (
            <div>
                <input type="text" placeholder="Pretraži filmove" className="search-movie" onChange={this.searchMovies} />
                <div className="sortMovies" style={this.state.sortMoviesVisible ? { display: "block" } : { display: "none" }}>
                    <ul>
                        <li className={selectedFilter === "A-Z" ? "selected-filter" : ""} onClick={this.sortByAtoZAsc}><span>A - Z</span></li>
                        <li className={selectedFilter === "Z-A" ? "selected-filter" : ""} onClick={this.sortByAtoZADec}><span>Z - A</span></li>
                        <li className={selectedFilter === "newest" ? "selected-filter" : ""} onClick={this.sortByYearFromNewest}><span>Najnoviji</span></li>
                        <li className={selectedFilter === "oldest" ? "selected-filter" : ""} onClick={this.sortByYearFromOldest}><span>Najstariji</span></li>
                    </ul>
                </div>
                <p id="sortMoviesBtn" onClick={this.toogleSortMovies} >
                    {this.state.sortMoviesVisible ? "Sakrij filtere" : "Sortiraj filmove"}
                    {this.state.sortMoviesVisible ? "" : <span className="selected-filter-title"><small>{selectedFilterTitle}</small></span>}
                </p>
                {
                    this.state.isLoaded ?
                        <div className="container-fluid moviesHolder">
                            <div className="row">
                                {filmoviJSX}
                            </div>
                        </div> :
                        <img className="loading" src="loading.gif" alt="Loading" />
                }
            </div >
        )
    }
}

export default withAppContext(Movies);