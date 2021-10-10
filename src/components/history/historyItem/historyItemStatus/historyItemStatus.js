import statusOkIcon from '../../../../icons/statusOk.svg';
import statusProcessingIcon from '../../../../icons/statusProcessing.svg';
import statusFailIcon from '../../../../icons/statusFail.svg';

import './history__item-status.css';

function HistoryItemStatus({ status }) {
    switch (status) {
        case "ok":
            return <img src={statusOkIcon} className="history__item-status" alt="statusOk" />;
        case "processing":
            return <img src={statusProcessingIcon} className="history__item-status" alt="statusProcessing" />
        case "fail":
            return <img src={statusFailIcon} className="history__item-status" alt="statusFail" />;
        default: return <p>No status provided</p>
    }
}

export default HistoryItemStatus;