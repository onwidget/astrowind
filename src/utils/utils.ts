/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) =>
	date
		? new Date(date).toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
