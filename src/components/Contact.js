import React from "react";

export const Contact=()=> {

        return(
            <div className="ContactFormDiv">
            <form className="ContactForm">
                <h1>Send us your custom design request</h1>
                <label>Name</label>
                <input type="text" id="name" required ></input>
                <label>Email</label>
                <input type="email" id="email" name="email" required ></input>
                <label>Your custom request here:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        );
    };