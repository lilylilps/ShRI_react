import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import MaskedInput from "react-text-mask";

import { uploadSettings } from "../../store/actions/settings.action";

import Button from '../button/button';
import useInput from "../../hooks/useInput";
import Alert from "../alert/alert";

import clear from "../../icons/clear.svg";

import "./settings.css";

function Settings() {
    const { reset: repositoryNameReset, setError: repositoryNameSetError, ...repositoryName } = useInput("", true);
    const { reset: buildCommandReset, setError: buildCommandSetError, ...buildCommand } = useInput("", true);
    const { reset: mainBranchReset, setError: _, ...mainBranch } = useInput("");

    const [submitTime, setSumbitTime] = useState(10);
    const [disabledButton, setDisabledButton] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!repositoryName.value) {
            repositoryNameSetError();
        }
        if (!buildCommand.value) {
            buildCommandSetError();
            return;
        }

        setDisabledButton(true);

        const settings = {
            repositoryName: repositoryName.value,
            buildCommand: buildCommand.value,
            mainBranch: mainBranch.value,
            submitTime
        };

        setTimeout(() => {
            const submitResult = Math.floor(Math.random() * 2);
            setDisabledButton(false);
            if (!!submitResult) {
                dispatch(uploadSettings(settings));
                history.push("/");
            } else {
                setIsOpen(true);
            }
        }, 1000);
    }

    return (
        <>
            <header className="settings-header">
                <h1 className="settings-header__title">
                    School CI server
                </h1>
            </header>
            <form onSubmit={handleFormSubmit} className="settings">
                <h2 className="settings__title">
                    Settings
                </h2>
                <p className="settings__subtitle">
                    Configure repository connection and&nbsp;synchronization settings.
                </p>

                <div>
                    <label htmlFor="repositoryName" className="settings__input-title">
                        GitHub repository<span className="settings__input-title settings__input-title_asterisk"> *</span>
                    </label>
                    <div className="settings__input-block">
                        <input name="repositoryName" className="settings__input-field" placeholder="user-name/repo-name" type="text" value={repositoryName}
                            {...repositoryName}>
                        </input>
                        {!!repositoryName.value ?
                            <button onClick={repositoryNameReset} type="reset" className="settings__button-clear">
                                <img src={clear} className="settings__input-clear" alt="clear" />
                            </button> : null
                        }
                    </div>
                    {repositoryName.error && <span className="settings__input-error">{repositoryName.error}</span>}
                </div>

                <div>
                    <label htmlFor="buildCommand" className="settings__input-title">
                        Build command<span className="settings__input-title settings__input-title_asterisk"> *</span>
                    </label>
                    <div className="settings__input-block">
                        <input name="buildCommand" className="settings__input-field" placeholder="npm ci && npm run build" type="text" value={buildCommand}
                            {...buildCommand}></input>
                        {!!buildCommand.value ?
                            <button onClick={buildCommandReset} type="reset" className="settings__button-clear">
                                <img src={clear} className="settings__input-clear" alt="clear" />
                            </button> : null
                        }
                    </div>
                    {buildCommand.error && <span className="settings__input-error">{buildCommand.error}</span>}
                </div>

                <label htmlFor="mainBranch" className="settings__input-title">
                    Main branch
                </label>
                <div className="settings__input-block">
                    <input name="mainBranch" className="settings__input-field" placeholder="master |" type="text" value={mainBranch}
                        {...mainBranch}></input>
                    {!!mainBranch.value ?
                        <button onClick={mainBranchReset} type="reset" className="settings__button-clear">
                            <img src={clear} className="settings__input-clear" alt="clear" />
                        </button> : null
                    }
                </div>

                <label htmlFor="submitTime" className="settings__input-title">
                    Synchronize every
                    <MaskedInput
                        guide={false}
                        mask={[/[0-9]/, /[0-9]/]}
                        name="submitTime"
                        className="settings__input-synchro"
                        placeholder="10" value={submitTime}
                        onChange={(e) => setSumbitTime(e.target.value)}
                    /> minutes
                </label>

                <div className="settings__buttons">
                    <Button type="submit" className="settings-button_yellow" disabled={disabledButton}>
                        <p className="settings-text__button">Save</p>
                    </Button>
                    <Link className="link" to="/">
                        <Button className="settings-text__button_cancel" disabled={disabledButton}>
                            <p className="settings-text__button">Cancel</p>
                        </Button>
                    </Link>
                </div>

                {modalIsOpen &&
                    <Alert
                        title={"Failed to clone repository"}
                        subtitle={"Please, try again."}
                        onClose={setIsOpen}
                        duration={2000}
                    />
                }
            </form>
        </>
    );
}

export default Settings;