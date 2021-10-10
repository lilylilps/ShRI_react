import classNames from 'classnames';
import './button.css';

function Button({children, className, ...props}) {
    return (
        <button {...props} className={classNames('button', className)}>
            {children}
        </button>
    )
}

export default Button;