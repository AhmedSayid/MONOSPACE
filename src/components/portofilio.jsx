import Task1 from "../assest/img/task11.png"
import Task2 from "../assest/img/tesk12.png"
import Task3 from "../assest/img/task13.png"
import Task4 from "../assest/img/task14.png"
import Task5 from "../assest/img/task15.png"
function Portifolio() {

    return (
        <>
            <div id="portfolio">
                <div className=" text-center flex-colmun ">
                <div className="subheading">our portfolio</div>
                <div className=" fw-bold text-dark fs-1">Our projects that we are proud of</div>
                </div>
                <div className="container mb-5">
                    <div className="d-flex justify-content-center text-center">
                        <div className="row">
                            <div className="col-12 col-md-4 col-sm-6 ">
                                <a href="https://research-design-studio.com/">
                                    <img className="mb-4" style={{ width: '300px', boxShadow: '0px  3px 5px rgba(0,0,0,0.10)', borderRadius: '15px' }} src={Task1} alt="" />
                                </a>
                            </div>
                            <div className="col-12 col-md-4 col-sm-6 ">
                                <a href="https://ncadre.com/">
                                    <img className="mb-4" style={{ width: '300px', boxShadow: '0px  3px 5px rgba(0,0,0,0.10)', borderRadius: '15px' }} src={Task2} alt="" />
                                </a>
                            </div>
                            <div className="col-12 col-md-4 col-sm-6 ">
                                <a href="https://nashmisouq.com/">

                                    <img className="mb-4" style={{ width: '300px', boxShadow: '0px  3px 5px rgba(0,0,0,0.10)', borderRadius: '15px' }} src={Task3} alt="" />
                                </a>
                            </div>
                            <div className="col-12 col-md-4 col-sm-6 ">
                                <a href="https://saudiclean.com.sa/">

                                    <img className="mb-4" style={{ width: '300px', boxShadow: '0px  3px 5px rgba(0,0,0,0.10)', borderRadius: '15px' }} src={Task4} alt="" />
                                </a>
                            </div>
                            <div className="col-12 col-md-4 col-sm-6 ">
                                <a href="https://www.rabwatalriyad.com/">

                                    <img className="mb-4" style={{ width: '300px', boxShadow: '0px  3px 5px rgba(0,0,0,0.10)', borderRadius: '15px' }} src={Task5} alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Portifolio;