import { useSelector } from "react-redux";

import image from "../../icons/start-screen.svg";
import icon from '../../icons/settings-icon.svg';
import Button from '../button/button';
import { Link } from "react-router-dom";
import History from '../history/history';

import './home.css';

function Home() {
    const settings = useSelector(state => state.settingsState.settings);

    return (
        <>
            {settings ?
                <History /> :
                <>
                    <header className="content-header">
                        <h1 className="content-header__title">
                            School CI server
                        </h1>
                        <Link className="link" to="/settings">
                            <Button className="content-header__button">
                                <img src={icon} className="content-header__settings-icon" alt="settings" />
                                <p className="content-header__settings-text">
                                    Settings
                                </p>
                            </Button>
                        </Link>
                    </header>
                    <div className="content">
                        <img className="content__image" src={image} alt="contentImg" />
                        <p className="content__text">
                            Configure repository connection and&nbsp;synchronization settings
                        </p>
                        <Link className="link" to="/settings">
                            <Button className="settings-button_yellow">
                                <p className="settings-text__button">
                                    Open settings
                                </p>
                            </Button>
                        </Link>
                    </div>
                </>
            }
        </>
    );
}

export default Home;