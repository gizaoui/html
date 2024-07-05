import PropTypes from 'prop-types';

export function ProductRow({ product }) {

    const style = product.stocked ? undefined : { color: "red" }

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}
ProductRow.propTypes = {
    product: PropTypes.object,
};