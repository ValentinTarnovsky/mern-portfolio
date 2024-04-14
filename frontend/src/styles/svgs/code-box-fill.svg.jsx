
import PropTypes from "prop-types";

const SvgCodeBoxIcon = (props) => {
    const { height, width, color, className } = props;

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height}
            width={width}
            fill={color}>
            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16.4645 15.5355L20 12L16.4645 8.46447L15.0503 9.87868L17.1716 12L15.0503 14.1213L16.4645 15.5355ZM6.82843 12L8.94975 9.87868L7.53553 8.46447L4 12L7.53553 15.5355L8.94975 14.1213L6.82843 12ZM11.2443 17L14.884 7H12.7557L9.11597 17H11.2443Z"/>
        </svg>
    );
};

SvgCodeBoxIcon.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

SvgCodeBoxIcon.defaultProps = {
    height: "24px",
    width: "24px",
    color: "#FAFAFA",
};

export default SvgCodeBoxIcon;