import PropTypes from 'prop-types';

export function Checkbox({ checked, onChange, label, id }) {
    return <div className="form-check">
        <input type="checkbox" className="form-check-input"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className='form-check-label'>{label}</label>
    </div>
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.node,
    id: PropTypes.string,
};