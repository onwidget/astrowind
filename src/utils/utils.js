/** */
export const getFormattedDate = (date) =>
	date
		? new Date(date).toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
