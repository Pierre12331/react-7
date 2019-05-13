import React from 'react';
import '../../App.css';


class FormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const poster = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        };
    

        fetch(poster, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`film registered!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Error during the addition of the movie');
            });
        }

        render() {
            return (
                <div className="FormEmployee">
                    <h1>Favorite Movie</h1>

                    <form onSubmit={this.submitForm}>
                        <fieldset>
                            <legend>Informations</legend>
                            <div className="form-data">
                                <label htmlFor="name">Movie name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="poster">url of poster</label>
                                <input
                                    type="text"
                                    id="poster"
                                    name="poster"
                                    onChange={this.onChange}
                                    value={this.state.poster}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="comment">Comment</label>
                                <input
                                    type="text"
                                    id="comment"
                                    name="comment"
                                    onChange={this.onChange}
                                    value={this.state.comment}
                                    placeholder="Why do you like this movie?"
                                />
                            </div>
                            <hr />
                            <div className="form-data">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            );
        };
    };
export default FormEmployee;
