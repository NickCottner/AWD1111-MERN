import React from "react";

const NumStars = ({value, text}) =>
{
    return (
        <div className="numstars">
            <span>
                <i className= {value >= 1 ? 'fas fa-star' : value > .5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 2 ? 'fas fa-star' : value > 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 3 ? 'fas fa-star' : value > 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 4 ? 'fas fa-star' : value > 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 5 ? 'fas fa-star' : value > 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 6 ? 'fas fa-star' : value > 5.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 7 ? 'fas fa-star' : value > 6.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 8 ? 'fas fa-star' : value > 7.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                <i className= {value >= 9 ? 'fas fa-star' : value > 8.5 ? 'fas fa-star-half-alt' : 'far fa-star'}>

                </i>
            </span>

            <span>
                {text && text}
            </span>
        </div>
    )
}
export default NumStars