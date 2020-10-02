import React from "react";
class Footer extends React.Component {
    render() {
        return (
                <footer className="bg-dark text-light text-center text-md-left" id='footer'>
                    <div className="container">
                        <hr/>
                        <p className="text-center text-secondary border-top border-secondary py-4">
                            CodingBeast © 2020
                        </p>
                    </div>
                </footer>
                );
            }
        }
export default Footer;