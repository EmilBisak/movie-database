import React, { Component } from 'react';

export default class Movie extends Component {

    deleteMovie = () => {
        const { naziv, _id } = this.props.podaci
        if (window.confirm(`Delete movie: "${naziv}" ?`)) {
            fetch('https://baza-podataka.herokuapp.com/obrisi-film/' + _id)
            alert("Movie  deleted")
            window.location.reload()
        }
    }

    titleLengthStyleFixer = () => {
        const { naziv } = this.props.podaci;
        let tooLong;
        if (naziv.length > 18 && window.innerWidth < 990) {
            tooLong = "tooLong";
            return tooLong;
        } else {
            return ""
        }
    }
    
    render() {
        const { naziv, godina, slika } = this.props.podaci

            // this.titleLengthStyleFixer()
            
        return (
            <div>
                {/* <div className="col-8 offset-2 col-sm-10 offset-sm-1"> */}
                <h3 className={this.titleLengthStyleFixer()}>{naziv}</h3>
                <img src={slika} alt={naziv} className="movieImg" />
                <p>{godina}</p>
                <button onClick={this.deleteMovie}>Delete</button>
                {/* </div> */}
            </div>
        )
    }
}