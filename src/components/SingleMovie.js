import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import addMovie from "../shared/addMovie";

class SingleMovie extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const { naziv, godina, slika, comments } = this.props.location.state;

        const noviKomentar = {
            user: e.target.name.value,
            comment: e.target.comment.value
        };
        const komentari = comments ? [...comments, noviKomentar] : [noviKomentar];
        addMovie(naziv, godina, slika, komentari);
    };

    render() {
        let komentariJsx;
        try {
            komentariJsx = this.props.location.state.comments.map((k, i) => (
                <div key={i}>
                    <small>{k.user}</small>
                    <p>{k.comment}</p>
                </div>
            ));
        } catch (error) {
            komentariJsx = <p>Budite prvi koji će ostaviti komentar</p>;
        }

        return (
            <>
                <Link to="/">&lt; Back</Link>
                <Movie podaci={this.props.location.state} />
                <p>{this.state.comm}</p>
                {komentariJsx}
                <form onSubmit={this.handleSubmit} className="single-movie-form">
                    <label>Korisnik: </label><br />
                    <input name="name" /><br />
                    <label>Komentar: </label><br />
                    <textarea name="comment"></textarea>
                    <input type="submit" value="Pošalji" />
                </form>
            </>
        );
    }
}

export default SingleMovie;
