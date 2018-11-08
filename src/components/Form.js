import React, { Component } from 'react';
import './Form.css';
import addMovie from '../shared/addMovie';

export default class Form extends Component {

    state = {
        movieName:"",
        movieImg:"",
        movieYear:"",
        visible:false,
       }


    handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    // handleInput = (event) => {
    //     const target = event.target;
    //     this.setState({
    //         [target.name]: target.value
    //     });
    // }

    addMovie = (e) => {
        e.preventDefault();
        const {movieName, movieImg, movieYear} = this.state
        addMovie(movieName, movieYear, movieImg)
    }



    imagePreview = (event) => {
        let src = event.target.value;
        this.setState({
            movieImg : src
        })
    }

    eventHandler = (event) => {
        this.handleInput(event);
        this.imagePreview(event);
    }

    render() {
        let src = this.state.movieImg ? this.state.movieImg : "http://icons-for-free.com/free-icons/png/512/283043.png";
        return (
            <div className="newMovie">
                <h1>Dodaj Film</h1>
                <form method="post" onSubmit={this.addMovie}>
                    <label>Naziv Filma</label>
                    <input type="text" name="movieName" onChange={this.handleInput} placeholder="Dodaj naslov" required />
                    <label>Godina</label>
                    <input type="text" name="movieYear" onChange={this.handleInput} placeholder="Dodaj godinu" required />
                    <label>Slika</label>
                    <input type="text" name="movieImg" onChange={this.eventHandler} placeholder="Dodaj url slike" required />
                    <div className="imagePlaceholder">
                        <img src={src} alt="movieImg"/>
                    </div>
                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        )


    }
}