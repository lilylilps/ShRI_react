import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__navigation">
                <a className="footer__navigation-link" href="https://yandex.ru/">
                    Support
                </a>
                <a className="footer__navigation-link" href="https://yandex.ru/">
                    Learning
                </a>
                <a className="footer__navigation-link" href="https://yandex.ru/">
                    Русская версия
                </a>
            </div>
            <p className="footer__copyright">
                &copy; 2021 Lily Makarova
            </p>
        </footer>
    )
}

export default Footer;