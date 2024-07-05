import PropTypes from 'prop-types';

export function Input({ placeholder, value, onChange }) {
    return <div>
        <input type="text" className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)} />
    </div>
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.node,
};