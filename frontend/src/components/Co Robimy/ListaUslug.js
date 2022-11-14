import "../../sass/components/listauslug.css";
import eu from "../../images/eu.jpg";
import kurs from "../../images/kurs.jpg";
import sala from "../../images/sala.jpg";
const ListaUslug = () => {
    return (
        <div className="container">
            <div id="marketing" className="section" style={{backgroundImage:`url(${eu})`}}>
                <div className="content">
                    <h1>Dotacje</h1>
                </div>
                <div className="overlay"></div>
            </div>
            <div id="technology" className="section" style={{backgroundImage:`url(${kurs})`}}>
                <div className="content">
                    <h1>Projekty</h1>
                </div>
                <div className="overlay"></div>
            </div>
            <div id="advertising" className="section" style={{backgroundImage:`url(${sala})`}}>
                <div className="content">
                    <h1>Usługi</h1>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    )
}

export default ListaUslug;