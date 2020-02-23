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
                    this.props.history.push("/");
                });
        }
    };

    render() {
        const { naziv, godina, slika } = this.props.podaci
        return (
            <div>
                <span onClick={this.deleteMovie} className="delete-btn" title="Obrisi film">X</span>
                <h3>{naziv}</h3>
                <div className="image-holder">
                    <img src={slika} alt={naziv} className="movieImg" />
                </div>
                <p>{godina}</p>
            </div>
        )
    }
}

export default withRouter(Movie)