import React from 'react';
import PropTypes from 'prop-types';

export const FavoriteButton = ({ width, height, fill, viewBox, xmlns, d, onClick }) => {

	return (
		<button
			className="btn-icon"
			onClick={onClick}
		>
			<svg
				width={width}
				height={height}
				fill="none"
				viewBox={viewBox}
				xmlns={xmlns}
			>
				<path
					d={d}
					fill={fill}
				/>
			</svg>
		</button>
	)
}

FavoriteButton.defaultProps = {
	width: "20",
	height: "17",
	fill: "#FF6767",
	viewBox: "0 0 20 17",
	xmlns: "http://www.w3.org/2000/svg",
}

FavoriteButton.propTypes = {
	onClick: PropTypes.func,
	d: PropTypes.string,
}