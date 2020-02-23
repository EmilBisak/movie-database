import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Form.css';
import addMovie from '../shared/addMovie';
import { withAppContext } from '../store/AppContext';

class Form extends Component {

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
        this.props.global.setIsLoaded(true);
        this.props.history.push("/addMovie");
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
        let src = this.state.movieImg ? this.state.movieImg : "camera_movie.png";
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

export default withRouter(withAppContext(Form))