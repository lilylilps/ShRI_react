import HistoryItemStatus from './historyItemStatus/historyItemStatus';
import HistoryItemCommit from './historyItemCommit/historyItemCommit';
import HistoryItemDate from './historyItemDate/historyItemDate';

import './history__item.css';

function HistoryItem({ commit }) {
    return (
        <div className="history__item">
            <div className="history__item-info">
                <HistoryItemStatus status={commit.status} />
                <HistoryItemCommit status={commit.status} title={commit.title} commitInfo={commit.commitInfo} />
            </div>

            <HistoryItemDate dateInfo={commit.dateInfo} />
        </div>
    );
}

export default HistoryItem;