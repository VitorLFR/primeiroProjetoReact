import Logo from '../../assets/img/banner.jpg';
import "./style.css";

export function Banner() {
    return (
        <section className="banner">
            <div className="banner-Container">

                <div className="bannerBox">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos architecto assumenda, ratione voluptates, aliquam at aperiam ex dolore perferendis similique provident cum, sunt facere! Provident sit veniam sed deleniti doloremque!
                    </p>
                </div>
                
                <div className="bannerBox">
                    <img src={Logo} alt="imagem" />
                </div>
                
            </div>
        </section>
    );
}