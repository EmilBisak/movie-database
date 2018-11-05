import React, { Component } from 'react';
import './Form.css'

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
        fetch('https://baza-podataka.herokuapp.com/dodaj-film/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                naziv: this.state.movieName,
                godina: this.state.movieYear,
                slika: this.state.movieImg
            })
        })
            .then(res => {
                alert(`Movie " ${this.state.movieName.toUpperCase()}" has been updated to movie base.
        Thank you for updating!`)
                window.location.reload();
            }
            )
            .catch(e => alert('Doslo je do greske'))

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

    //   render() {
    //     let { visible } = this.state
    //     return (
    //       <div>
    //         <button onClick={this.togle}>Add Movie</button>
    //         <div style={visible ? { display: "block" } : { display: "none" }}>
    //           <form onSubmit={this.addMovie}>
    //             <input name="movieName" onBlur={this.handleInput} placeholder="Add title" required />
    //             <input name="movieYear" onBlur={this.handleInput} placeholder="Add year" required />
    //             <input name="movieImg" onBlur={this.handleInput} placeholder="Add img url" required />
    //             <input className="inputSubmit" type="submit" value="Confirm" />
    //           </form>
    //         </div>
    //       </div>
    //     )
    //   }

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