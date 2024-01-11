import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import book1 from "../assets/book (1).svg"
import book2 from "../assets/book (2).svg"
import book3 from "../assets/book (3).svg"
import book4 from "../assets/book (4).svg"
import genreImage1 from "../assets/genre-image (1).svg"
import genreImage2 from "../assets/genre-image (2).svg"
import genreImage3 from "../assets/genre-image (3).svg"
import genreImage4 from "../assets/genre-image (4).svg"
import genreImage5 from "../assets/genre-image (5).svg"
import genreImage6 from "../assets/genre-image (6).svg"
import popularBook1 from "../assets/popular-book (1).svg"
import popularBook2 from "../assets/popular-book (2).svg"
import popularBook3 from "../assets/popular-book (3).svg"
import popularBook4 from "../assets/popular-book (4).svg"
import popularBook5 from "../assets/popular-book (5).svg"
import heart from "../assets/icons/heart.svg"
// import star from "../assets/icons/star 1.svg"
import libraryImage from "../assets/library-image.svg"




function Service(){

    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const popularSlideLeft = () => {
        var popularSlider = document.getElementById("popularSlider")
        popularSlider.scrollLeft = popularSlider.scrollLeft - 500
    }

    const popularSlideRight = () => {
        var popularSlider = document.getElementById("popularSlider")
        popularSlider.scrollLeft = popularSlider.scrollLeft + 500
    }
    return(
        <section id="service-section">
            <div className="categories">
                <h1>We serve ebooks tools unveil<br/>your Imagination</h1>
                <div className="categories-books">
                        <div className="category-book">
                            <img src={book1} />
                            <p>Bestsellers Book </p>
                            <p><small>The contents of a book are its different chapters</small></p>
                        </div>

                        <div className="category-book">
                            <img src={book2} />
                            <p>Trending Book </p>
                            <p><small>The contents of a book are its different chapters</small></p>
                        </div>

                        <div className="category-book">
                            <img src={book3} />
                            <p>Preference Book </p>
                            <p><small>The contents of a book are its different chapters</small></p>
                        </div>

                        <div className="category-book">
                            <img src={book4} />
                            <p>Worldwide Book </p>
                            <p><small>The contents of a book are its different chapters</small></p>
                        </div>

                </div>
            </div>

            <div className="genre">
                <div className="genre-header">
                    <h1>Genre</h1>
                    <div className="scroll-btns">
                        <FaChevronLeft onClick={slideLeft} className="scroll"/>
                        <FaChevronRight onClick={slideRight} className="scroll"/>
                    </div>
                </div>
                
                <div className="carousel"  id="slider">
                    
                    <div className="each-genre">
                        <img src={genreImage1}/>
                        <p>Horror</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage2}/>
                        <p>Sci-fi</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage3}/>
                        <p>Romance</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage4}/>
                        <p>Fantasy</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage5}/>
                        <p>History</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage6}/>
                        <p>Genre</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage6}/>
                        <p>Genre</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage6}/>
                        <p>Genre</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage6}/>
                        <p>Genre</p>
                    </div>

                    <div className="each-genre">
                        <img src={genreImage6}/>
                        <p>Genre</p>
                    </div>
                
                </div>
            </div>

            <div className="popular">
                
                <div className="genre-header">
                    <h1>Popular Stories This Week</h1>
                    <div className="scroll-btns">
                        <FaChevronLeft onClick={popularSlideLeft} className="scroll"/>
                        <FaChevronRight onClick={popularSlideRight} className="scroll"/>
                    </div>
                </div>
                <div className="popular-books-carousel carousel" id="popularSlider">
                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <img src={heart} className="heart-icon" />
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        {/* <div className="star-rating">
                            <img src={star} className="star-icon" />
                            <img src={star} className="star-icon" />
                            <img src={star} className="star-icon" />
                            <img src={star} className="star-icon" />
                            <img src={star} className="star-icon" />
                        </div> */}
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>


                    <div className="popular-book">
                        <img src={popularBook1} />
                        <h6>The Secret Widow</h6>
                        <p>Sylvie Fox</p>
                        <p className="small">Whoever said that time heals all wounds.... lied. 
                        A decade after the death of her husband, Nari Yoon still mourns. 
                        On the ten-year anniversary of the worst day of herlife.....read more</p>
                        <button className="secondarybtn">Add to cart</button>
                    </div>

                </div>
            </div>

            <div className="libraries">
                <div className="libraries-left">
                    <img src={libraryImage} />
                </div>

                <div className="libraries-right">
                    <h3><span>Our</span> Libraries</h3>
                    <p>Your reading list is a good place to start, but you will be expected to read more widely too. 
                    use chyra to serach for information on your topic, and to find books,
                     journal articles and other materials in the library</p>
                     <button className="primarybtn">Learn more</button>
                </div>
            </div>

            {/* <div className="best-selling">
                <h1>Best-Selling Books Collection</h1>
                <div className="best-selling-books">
                    <div className="best-selling-book">
                        <img src={popularBook1} />
                        <p>Breathe</p>
                        <p><small>Sarah Crossan</small></p>
                    </div>

                    <div className="best-selling-book">
                        <img src={popularBook1} />
                        <p>Breathe</p>
                        <p><small>Sarah Crossan</small></p>
                    </div>

                    <div className="best-selling-book">
                        <img src={popularBook1} />
                        <p>Breathe</p>
                        <p><small>Sarah Crossan</small></p>
                    </div>

                    <div className="best-selling-book">
                        <img src={popularBook1} />
                        <p>Breathe</p>
                        <p><small>Sarah Crossan</small></p>
                    </div>

                    <div className="best-selling-book">
                        <img src={popularBook1} />
                        <p>Breathe</p>
                        <p><small>Sarah Crossan</small></p>
                    </div>
                </div>
            </div> */}

        </section>
    )
}

export default Service