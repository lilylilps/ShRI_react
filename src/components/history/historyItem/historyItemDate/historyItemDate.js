import calendar from '../../../../../src/icons/calendar.svg';
import clock from '../../../../../src/icons/clock.svg';
import moment from 'moment';
import 'moment/locale/ru';
import './history__item-date.css';

function HistoryItemDate({ dateInfo }) {
    const hour = Math.trunc(dateInfo.duration / 60);
    const minutes = dateInfo.duration % 60;

    moment.locale("ru");
    return (
        <div className="history__item-date">
            <div className="history__item-date_info">
                <img src={calendar} className="history__item-date_icon" alt="calendar" />
                <p className="history__item-date_text">{moment(new Date(dateInfo.date)).format("DD MMM, HH:mm")}</p>
            </div>
            <div className="history__item-date_info">
                <img src={clock} className="history__item-date_icon" alt="clock" />
                <p className="history__item-date_text">{hour} ч {minutes} мин</p>
            </div>
        </div>
    );
}

export default HistoryItemDate;