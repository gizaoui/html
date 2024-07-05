import PropTypes from 'prop-types';

export function ProductCategoryRow({ name }) {
    return <tr>
        <td style={{ backgroundColor: 'lightgray', textAlign: "center" }} colSpan={2}>
            <strong>{name}</strong>
        </td>
    </tr>
}
ProductCategoryRow.propTypes = {
    name: PropTypes.string,
};