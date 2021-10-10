import commitIcon from '../../../../../src/icons/commitIcon.svg';
import authorIcon from '../../../../../src/icons/authorIcon.svg';
import classNames from 'classnames';
import './history__item-commit.css';

function HistoryItemCommit({ status, title, commitInfo }) {
    const getStatus = () => {
        switch (status) {
            case "ok":
                return "green";
            case "processing":
                return "orange";
            case "fail":
                return "red";
            default:
                return "";
        }
    };

    const commitStatus = getStatus();

    return (
        <div className="history__item-commit">
            <div className="history__item-commit_header">
                <span className={classNames('history__item-commit_number', commitStatus)}>#{title.number}</span>
                <p className="history__item-commit_title">
                    {title.text}
                </p>
            </div>
            <div className="history__item-commit_info">
                <div className="history__item-commit_data">
                    <img src={commitIcon} className="history__item-commit_icon" alt="commit" />
                    <p className="history__item-commit_branch">{commitInfo.branchName}</p>
                    <p className="history__item-commit_id">{commitInfo.commit}</p>
                </div>
                <div className="history__item-commit_author">
                    <img src={authorIcon} className="history__item-commit_author-icon" alt="author" />
                    <p className="history__item-commit_author-name">{commitInfo.author}</p>
                </div>
            </div>
        </div>
    );
}

export default HistoryItemCommit;