import React from 'react';

function HistoriesLoading(Component) {
	return function HistoriesLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				
			</p>
		);
	};
}
export default HistoriesLoading;