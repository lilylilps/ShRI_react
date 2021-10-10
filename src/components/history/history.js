import { Link } from "react-router-dom";
import { useState } from "react";

import Button from '../button/button';
import HistoryItem from './historyItem/historyItem';
import BuildModal from './buildModal/buildModal';

import icon from '../../icons/settings-icon.svg';
import run from '../../icons/run.svg';
import initialCommits from './initialCommits';

import './history.css';

function History() {
    const settings = JSON.parse(localStorage.getItem("settings"));
    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleOpen = (isOpen) => setIsOpen(isOpen);

    return (
        <div className="history">
            <header className="history__header">
                <h1 className="history__repository-name">
                    {settings.repositoryName}
                </h1>
                <div className="history__buttons">
                    <Button onClick={() => toggleOpen(true)} className="history__button">
                        <img src={run} className="history__settings-icon" alt="run" />
                        <p className="history__settings-text">
                            Run build
                        </p>
                    </Button>
                    <Link className="link" to="/settings">
                        <Button className="history__button-settings">
                            <img src={icon} className="settings-icon" alt="settings" />
                        </Button>
                    </Link>

                    <BuildModal isOpen={modalIsOpen} toggleOpen={toggleOpen} />
                </div>
            </header>

            <div className="history__list">
                {initialCommits.map((commit, index) => {
                    return <HistoryItem key={index} commit={commit} />
                })}

                <Button className="history__show-button">
                    <p className="history__button-text">
                        Show more
                    </p>
                </Button>
            </div>
        </div>
    );
}

export default History;