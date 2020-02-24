import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { deleteUrl } from '../config.api/api'

class Movie extends Component {
    deleteMovie = e => {
        e.preventDefault();
        const { naziv, _id } = this.props.podaci;
        if (window.confirm(`Delete movie: "${naziv}" ?`)) {
            fetch(deleteUrl, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: _id })
            })
                .then(res => res.text())
                .then(res => {
                    alert(res);
                    if (this.props.history.location.pathname === "/") {
                        this.props.getAllMovies();
                    } else {
                        this.props.history.push("/");
                    }
                });
        }
    };

    render() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        return !!this.props.podaci ? (
            <div>
                {isLoggedIn && <span onClick={this.deleteMovie} className="delete-btn" title="Obrisi film">X</span>}
                <h3 className={isLoggedIn ? "logged-in" : ""}>{this.props.podaci.naziv}</h3>
                <div className="image-holder">
                    <img src={this.props.podaci.slika} alt={this.props.podaci.naziv} className="movieImg" />
                </div>
                <p>{this.props.podaci.godina}</p>
            </div>
        )
            : !!this.props.movie ? (
                <div>
                    {isLoggedIn && <span onClick={this.deleteMovie} className="delete-btn" title="Obrisi film">X</span>}
                    <h3 className={isLoggedIn ? "logged-in" : ""}>{this.props.movie.naziv}</h3>
                    <div className="image-holder">
                        <img src={this.props.movie.slika} alt={this.props.movie.naziv} className="movieImg" />
                    </div>
                    <p>{this.props.movie.godina}</p>
                </div>
            )
                : (
                    <img className="loading" src="loading.gif" alt="Loading" />
                )
    }
}

export default withRouter(Movie)