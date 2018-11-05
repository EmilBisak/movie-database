import React, { Component } from 'react';
import Movie from './Movie';
import {Link} from 'react-router-dom';
import './SingleMovie.css';


export default class SingleMovie extends Component {

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.name.value);
        console.log(event.target.comment.value);
        

    }

    render() {
        // let film = this.props.location.state;
        // console.log(film);
        // let {naziv, godina, slika, _id} = this.props.location.state

        return (
            <>
            <Link to="/">&lt; back</Link>
            <Movie podaci={this.props.location.state}/>

            <form onSubmit={this.handleSubmit} className="single-movie-form">
            <label>Ime: </label><br/>
                <input name="name"/><br/>
            <label>Komentar: </label><br/>
                <textarea name="comment"></textarea>
                <input type="submit" value="Pošalji"/>
                </form>
            </>
        )
    }
}