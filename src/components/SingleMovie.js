import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import './SingleMovie.css';
import { withAppContext } from '../store/AppContext';
import Movie from "./Movie";
import addMovie from "../shared/addMovie";
import getSingleMovie from "../shared/getSingleMovie";

class SingleMovie extends Component {
    state = { movie: {} };

    componentDidMount() {
        this.props.global.handleFooterPositioning(true);
        const path = this.props.location.pathname;
        const id = path.split('/singleMovie/')[1]
        getSingleMovie(id)
            .then(movie => {
                this.setState({ movie })
                this.props.global.handleFooterPositioning(false);
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { naziv, godina, slika, comments } = this.props.location.state;

        const noviKomentar = {
            user: e.target.name.value,
            comment: e.target.comment.value
        };
        const komentari = comments ? [...comments, noviKomentar] : [noviKomentar];
        addMovie(naziv, godina, slika, komentari);
        window.location.reload()
    };

    render() {
        let komentariJsx;
        if (!!this.props.location.state) {
            try {
                komentariJsx = this.props.location.state.comments.map((k, i) => (
                    <div key={i}>
                        <p><small>Komentari:</small></p>
                        <div className="comment-holder">
                            <p><b>{k.user}</b></p>
                            <p>{k.comment}</p>
                        </div>
                    </div>
                ));
            } catch (error) {
                komentariJsx = <p>Budite prvi koji će ostaviti komentar</p>;
            }
        } else {

            try {
                komentariJsx = this.state.movie.comments.map((k, i) => (
                    <div key={i}>
                        <p><small>Komentari:</small></p>
                        <div className="comment-holder">
                            <p><b>{k.user}</b></p>
                            <p>{k.comment}</p>
                        </div>
                    </div>
                ));
            } catch (error) {
                komentariJsx = <p>Budite prvi koji će ostaviti komentar</p>;
            }
        }

        return (
            <div className="single-movie">
                <div>
                    <div className="movieBox">
                        <Movie podaci={this.props.location.state} movie={this.state.movie} />
                    </div>
                    <div>
                        {komentariJsx}
                    </div>
                    <form onSubmit={this.handleSubmit} className="single-movie-form">
                        <label>Korisnik: </label>
                        <input name="name" /><br />
                        <label>Komentar: </label>
                        <textarea name="comment"></textarea>
                        <input type="submit" value="Pošalji" />
                    </form>
                    <Link to="/" className="back-button">&lt; Back</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(withAppContext(SingleMovie));
