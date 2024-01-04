
import bookIcon from "../assets/icons/book-icon.svg"
import scatteredBooks from "../assets/scattered-books.svg"

function Community(){
    return(
        <section id="community">
            <div className="orange">
                <div className="book-type">
                    <div className="icn">
                        <img src={bookIcon} />
                    </div>
                    <p>85,456</p>
                    <p>ebooks</p>
                </div>

                <div className="book-type">
                    <div className="icn">
                        <img src={bookIcon} />
                    </div>
                    <p>85,456</p>
                    <p>ebooks</p>
                </div>

                <div className="book-type">
                    <div className="icn">
                        <img src={bookIcon} />
                    </div>
                    <p>85,456</p>
                    <p>ebooks</p>
                </div>

                <div className="book-type">
                    <div className="icn">
                        <img src={bookIcon} />
                    </div>
                    <p>85,456</p>
                    <p>ebooks</p>
                </div>
            </div>

            <div className="banner">
                <div className="banner-content">
                    <h2>Join our community</h2>
                    <p>Learn more with people who share  your common
                        intrest and give your thought on the book you read
                        sign up to join the community
                    </p>
                    <button className="primarybtn">Learn more</button>
                </div>
            </div>

            <div className="orange donate">
                <h2>Support our library<br />Donate today</h2>
                <div className="amounts">
                    <div className="amount"><p>N2000</p></div>
                    <div className="amount"><p>N1000</p></div>
                    <div className="amount"><p>N500</p></div>
                    <div className="amount"><p>Other</p></div>
                </div>
            </div>

            <div className="signup">
                <div className="signup-content">
                    <h2>Start Reading Now</h2>
                    <button className="primarybtn">Sign Up</button>
                </div>
                <img src={scatteredBooks} />
            </div>

        </section>
    )
}

export default Community